'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
	{
		title: 'Wavenet Website',
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
		url: 'https://www.globalwavenet.com/',
	},
	{
		title: 'SaaS Dashboard',
		description:
			'A comprehensive dashboard for SaaS businesses with analytics and billing integration.',
		url: 'https://example.com',
	},
	{
		title: 'Learning Management System',
		description: 'A full featured LMS with video streaming and interactive quizzes.',
		url: 'https://example.com',
	},
]

const ProjectsSection = () => {
	const [current, setCurrent] = useState(0)
	const total = projects.length

	const prevSlide = () =>
		setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1))
	const nextSlide = () =>
		setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))

	return (
		<section id="projects" className="py-20 bg-brand-base text-white">
			<div className="max-w-3xl mx-auto px-6 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-3xl md:text-4xl font-bold text-center mb-10"
					style={{ color: '#FEA485' }}
				>
					Projects
				</motion.h2>
				<div className="relative flex items-center justify-center">
					<button
						onClick={prevSlide}
						className="absolute left-[-6rem] z-10 bg-[#FEA485] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:bg-[#ff8c5a] transition-colors duration-300"
					>
						&#8592;
					</button>
					<div className="w-full flex justify-center">
						<motion.a
							key={current}
							href={projects[current].url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col md:flex-row bg-brand-surface rounded-2xl p-12 w-full max-w-4xl items-center shadow-lg transition-shadow min-h-[425px]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							{/* Image placeholder */}
							<div className="w-80 h-80 bg-gray-700 rounded-2xl flex-shrink-0 mb-8 md:mb-0 md:mr-12 flex items-center justify-center">
								<span className="text-gray-400 text-lg">Image</span>
							</div>
							{/* Content */}
							<div className="flex-1 text-left">
								<h3 className="text-2xl font-semibold mb-4">
									{projects[current].title}
								</h3>
								<p className="text-white text-xs leading-relaxed whitespace-pre-line mb-4">
									{projects[current].description}
								</p>
								<span className="text-sm text-brand-accent">
									View Project &rarr;
								</span>
							</div>
						</motion.a>
					</div>
					<button
						onClick={nextSlide}
						className="absolute right-[-6rem] z-10 bg-[#FEA485] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:bg-[#ff8c5a] transition-colors duration-300"
					>
						&#8594;
					</button>
				</div>
				<div className="flex justify-center mt-4 gap-2">
					{projects.map((_, idx) => (
						<button
							key={idx}
							onClick={() => setCurrent(idx)}
							className={`w-3 h-3 rounded-full ${
								current === idx ? 'bg-[#FEA485]' : 'bg-gray-500'
							} transition-colors`}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
