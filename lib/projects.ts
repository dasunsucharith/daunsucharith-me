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
		slug: "mediportal",
		title: "Mediportal Website",
		shortDescription: "Healthcare digital solutions website",
		description: `Overview:
Mediportal is a healthcare technology company offering secure digital solutions for patient management and clinical workflows. I was responsible for the design and development of their public-facing website using Webflow.

What I Worked On:

- Developed the site architecture and layout using Webflow’s CMS and Designer for a modular, scalable build.
- Created a clean, modern UI with attention to healthcare industry compliance, clarity, and accessibility.
- Implemented custom animations, scroll interactions, and structured content blocks for easier content management.
- Worked with the marketing team to set up performance tracking via GA4 and conversion goals via GTM.
- Ensured the site was fully responsive, fast-loading, and aligned with SEO standards.

Impact:
The new site provided a more professional and user-friendly experience, supporting business development and driving inbound leads.`,
		image: "/assets/projects/Mediportal-mock.png",
		url: "https://mediportal.com.au",
	},
	{
		slug: "jordan-and-brooke",
		title: "Jordan & Brooke Website",
		shortDescription: "K–12 tutoring company website on WordPress",
		description: `Overview:
Jordan & Brooke is a Melbourne-based K–12 tutoring company that blends academic tutoring with social-emotional learning. I built their modern, responsive WordPress site to highlight their personalized, student-centered approach.

What I Worked On:
- Customized a WordPress + Elementor build tailored to educational services.
- Showcased key features like small-group programs, SEL highlights, NAPLAN support, and scholarship info.
- Ensured a polished, accessible layout that clearly communicates Jordan & Brooke’s engaging and holistic approach.
- Integrated lead-capture forms, event pages (e.g., competitions, NAPLAN bookings), and contact workflows.
- Implemented SEO foundations and set up GA4 & GTM for performance tracking and conversion analysis.

Impact:
The site now effectively communicates Jordan & Brooke’s unique tutoring method, drives prospective parent interest, and supports lead generation with seamless forms and analytics.`,
		image: "/assets/projects/jordanandbrooke-mock.png",
		url: "https://jordanandbrooke.com.au",
	},
	{
		slug: "kaema",
		title: "Kaema Website",
		shortDescription: "WordPress site for a brand distributor in Australia",
		description: `Overview:
Kaema Australia is a Sydney-based import & distribution company that helps international brands enter the Australian market. I built their website using WordPress and Elementor, transforming their brand vision into a polished, functional online presence.

What I Worked On:
- Developed the full site based on brand assets and design direction, using WordPress + Elementor.
- Created a flexible, mobile-responsive layout optimized for performance and cross-device compatibility.
- Built a CMS-friendly structure, enabling the Kaema team to easily update content about partners, services, and contact information.

Impact:
Delivered a strong digital foundation for Kaema’s market expansion, producing a clean, professional site that aligns with their mission and supports ongoing business growth.`,
		image: "/assets/projects/kaema-mock.png",
		url: "https://kaema.com.au",
	},
	{
		slug: "dothan-yard",
		title: "Dothan Yard Website",
		shortDescription: "Creative agency website with custom enhancements",
		description: `Overview:
Dothan Yard is a creative and digital innovation agency based in Nugegoda, Sri Lanka. I developed their official website using WordPress and Elementor, with additional custom-coded components to meet their creative and functional needs.

What I Worked On:
- Built the entire site using WordPress + Elementor based on their branding and layout guidelines.
- Added custom code for advanced features like dynamic forms, conditional content sections, and animation logic.
- Ensured smooth performance, responsive design, and backend flexibility for future updates.

Impact:
The result is a visually striking, interactive, and performance-optimized site that reflects Dothan Yard’s identity and supports their service-driven storytelling.`,
		image: "/assets/projects/dothanyard-mock.png",
		url: "https://dothanyard.com",
	},
	{
		slug: "3rd-eye-media",
		title: "3rd Eye Media Website",
		shortDescription: "Creative agency portfolio site built in Webflow",
		description: `Overview:
3rd Eye Media is a creative agency based in Australia, specializing in video production and storytelling. I built their public-facing website using Webflow, focusing on cinematic presentation and smooth user flow to match their brand personality.

What I Worked On:
- Designed and developed the website using Webflow, implementing dynamic content through the CMS for case studies and video showcases.
- Built a scroll-friendly layout with custom animations, micro-interactions, and smooth transitions to enhance user engagement.
- Focused on performance optimization, clean mobile responsiveness, and strategic CTAs to support client inquiries.
- Integrated GA4, GTM, and basic SEO for improved search visibility and analytics.
- Ensured brand cohesion across pages with bold visuals and motion-first design.

Impact:
The final site effectively positions 3rd Eye Media as a premium creative partner, with a visual-first user experience that supports client acquisition and storytelling.`,
		image: "/assets/projects/3rdeyemedia-mock.png",
		url: "https://www.3rdeyemedia.com.au",
	},
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
