const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };

  // This part is not needed for public content, but it's good to have for authenticated requests in the future.
  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // Make sure the API URL is set
  if (!API_URL) {
    throw new Error('WORDPRESS_API_URL is not configured');
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    // Next.js revalidation strategy
    next: { revalidate: 10 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error(JSON.stringify(json.errors, null, 2));
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `
  );

  return data?.posts;
}

export async function getPostBySlug(slug: string | string[] | undefined) {
    if (!slug) {
        return null;
    }
    
    const data = await fetchAPI(
      `
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          title
          slug
          date
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    `,
      {
        variables: {
          id: slug,
          idType: 'SLUG',
        },
      }
    );
  
    return data?.post;
  }
