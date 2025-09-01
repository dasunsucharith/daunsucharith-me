const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

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
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch API: ${res.status} ${res.statusText}\n${errorText}`);
  }

  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    const errorText = await res.text();
    throw new Error(`Expected JSON response, but got ${contentType}\n${errorText}`);
  }

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
            modified
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
          modified
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
              description
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
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
