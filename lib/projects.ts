export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "wavenet-website",
    title: "Wavenet Website",
    shortDescription: "Corporate site redesign with SEO focus",
    description: `Overview:
As part of Wavenet’s in-house marketing team, I led the revamp of the official GlobalWavenet website—a core digital asset representing multiple global business units in telecom software.

What I Worked On:
- Planned and executed a complete site redesign on webflow focused on performance, accessibility, and lead generation.
- Migrated content and restructured pages for improved SEO and user navigation.
- Integrated GA4 and Google Tag Manager to track user interactions and conversion events.
- Optimized all media, forms, and landing pages to support marketing campaigns.
- Worked closely with designers and content creators to maintain brand consistency.

Impact:
Significantly improved page load times, enhanced SEO visibility, and boosted marketing campaign performance through data-driven iteration.`,
    image: "/assets/projects/wavenet-website.svg",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    shortDescription: "Analytics and billing dashboard",
    description:
      "A comprehensive dashboard for SaaS businesses with analytics and billing integration.",
    image: "/assets/projects/saas-dashboard.svg",
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    shortDescription: "Video streaming and quizzes",
    description:
      "A full featured LMS with video streaming and interactive quizzes.",
    image: "/assets/projects/lms.svg",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
