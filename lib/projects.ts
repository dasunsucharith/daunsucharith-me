export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    slug: "Wavenet",
    title: "Wavenet Website",
    shortDescription: "Corporate site redesign with SEO focus",
    description: `Overview:
As part of Wavenet’s in-house marketing team, I did the revamp of the official GlobalWavenet website a core digital asset representing multiple global business units in telecom software.

What I Worked On:
- Planned and executed a complete site redesign on webflow focused on performance, accessibility, and lead generation.
- Migrated content and restructured pages for improved SEO and user navigation.
- Integrated GA4 and Google Tag Manager to track user interactions and conversion events.
- Optimized all media, forms, and landing pages to support marketing campaigns.
- Worked closely with designers and content creators to maintain brand consistency.

Impact:
Significantly improved page load times, enhanced SEO visibility, and boosted marketing campaign performance through data-driven iteration.`,
    image: "/assets/projects/globalwavenet.png",
    url: "https://globalwavenet.com",
  },
  {
    slug: "Mediwave",
    title: "Mediwave Website",
    shortDescription: "Healthcare tech company website",
    description: `Overview:
Mediwave is a healthcare tech platform, and the website serves as a key digital interface for both enterprise clients and partners. My role involved full ownership of the site's design, development, and performance optimization.

What I Worked On:
- Built and customized the entire site using WordPress + Elementor for rapid iteration and ease of content management.
- Focused on clean UX, mobile responsiveness, and accessibility for a diverse user base.
- Integrated SEO best practices including schema, meta tags, performance tuning, and content structure.
- Collaborated closely with marketing and product teams to align messaging and visuals with business goals.
- Set up analytics tracking, goal completions, and marketing landing pages using GA4 and GTM.

Impact:
Improved site performance and SEO visibility, increased user engagement, and streamlined content workflows for the marketing team.`,
    image: "/assets/projects/mediwave-mock.png",
    url: "https://mediwave.io",
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    shortDescription: "Video streaming and quizzes",
    description:
      "A full featured LMS with video streaming and interactive quizzes.",
    image: "/assets/projects/lms.svg",
    url: "https://example.com",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
