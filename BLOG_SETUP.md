# Setting Up a Headless WordPress Blog

This document outlines the steps taken to integrate a headless WordPress CMS with the Next.js frontend.

## 1. Backend Setup: Headless WordPress

To manage blog content, a new WordPress installation was set up.

- **Hosting Location:** Instead of a subdirectory, a dedicated **subdomain** was created to ensure clean separation and avoid server conflicts.
- **URL:** The WordPress instance is live at `https://cms.dasunsucharith.me`.
- **Headless Plugin:** The **WPGraphQL** plugin was installed in WordPress. This exposes a GraphQL endpoint, which is a modern and efficient way for the frontend to request data.
- **API Endpoint:** The Next.js application fetches data from `https://cms.dasunsucharith.me/graphql`.

## 2. Frontend Integration

### Connecting to the API

- **Environment Variable:** The WordPress GraphQL API URL was added to the project's environment configuration.
  - A new variable `WORDPRESS_API_URL` was added to the `.env.example` file.
  - For local development, this variable must be set in a `.env.local` file:
    ```
    WORDPRESS_API_URL="https://cms.dasunsucharith.me/graphql"
    ```
- **Data Fetching Logic:** A new file was created at `lib/wordpress.ts` to handle all communication with the WordPress API. This file contains functions to:
  - `getAllPosts()`: Fetches a list of all blog posts for the main blog page.
  - `getPostBySlug()`: Fetches a single post by its URL slug for the individual post pages.

### Creating the Blog Pages

Two new sets of pages were created in the `app/` directory:

1.  **Blog Index Page (`app/blog/page.tsx`):**
    - This page displays a list of all recent blog posts, showing the title, excerpt, and publication date for each.
    - Each post title links to its individual page.

2.  **Individual Post Page (`app/blog/[slug]/page.tsx`):**
    - This is a dynamic route that uses the `slug` from the URL (e.g., `/blog/my-first-post`) to fetch and display the full content of a specific post.
    - It handles cases where a post is not found by showing a 404 page.

### Updating the User Interface

- **Navigation:** The main navigation component at `components/Navigation.tsx` was updated.
  - A "Blog" link pointing to `/blog` was added to the `navItems` array.
  - Existing links were updated to be root-relative (e.g., `/#about`) to ensure they work correctly from the new blog pages.

### Styling Post Content

- **Tailwind Typography:** To automatically style the HTML content coming from WordPress, the `@tailwindcss/typography` plugin is used. This provides beautiful default styles for prose.
- **Configuration:** The plugin was enabled by adding `require('@tailwindcss/typography')` to the `plugins` array in the `tailwind.config.js` file.

## 3. Running Locally

To see the changes, run the development server:

```bash
npm run dev
```

Ensure you have created the `.env.local` file with the `WORDPRESS_API_URL` as described in Step 2.

## 4. Vercel Deployment

For the blog to work in production, the `WORDPRESS_API_URL` environment variable must be set in your Vercel project settings.

1.  Go to your project dashboard on Vercel.
2.  Navigate to **Settings > Environment Variables**.
3.  Add a new variable with the following details:
    - **Name:** `WORDPRESS_API_URL`
    - **Value:** `https://cms.dasunsucharith.me/graphql`
4.  Save the variable. Vercel will automatically trigger a new deployment with the updated environment.
