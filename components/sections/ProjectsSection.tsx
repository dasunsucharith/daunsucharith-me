'use client'

import { motion } from 'framer-motion'

const projects = [
	{
		title: 'E-Commerce Platform',
		description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
		url: 'https://example.com',
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
	return (
		<section id="projects" className="py-20 bg-brand-base text-white">
			<div className="max-w-5xl mx-auto px-6 text-center">
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
				<div className="grid gap-8 md:grid-cols-3">
					{projects.map((project, idx) => (
						<motion.a
							key={idx}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="block bg-brand-surface rounded-2xl p-6 hover:shadow-lg transition-shadow"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
						>
							<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
							<p className="text-brand-muted text-sm leading-relaxed">
								{project.description}
							</p>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
