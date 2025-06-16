'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Mail, Phone, Globe, Award, Book, Coffee } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  const technologies = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'] },
    { category: 'Tools', skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Adobe Creative Suite'] },
    { category: 'Cloud', skills: ['AWS', 'Vercel', 'Netlify', 'Firebase', 'DigitalOcean'] },
  ]

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing modern development practices.',
      achievements: ['Increased performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipeline']
    },
    {
      title: 'Frontend Developer',
      company: 'DigitalFlow Agency',
      period: '2020 - 2022',
      description: 'Developed responsive web applications for various clients, focusing on user experience and performance optimization.',
      achievements: ['Delivered 25+ projects', 'Improved page load times by 60%', 'Client satisfaction rate 98%']
    },
    {
      title: 'Web Developer',
      company: 'StartupVenture',
      period: '2019 - 2020',
      description: 'Built the company\'s main product from scratch, implementing both frontend and backend solutions.',
      achievements: ['Built MVP in 3 months', 'Scaled to 10k+ users', 'Reduced server costs by 30%']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      description: 'Specialized in Software Engineering and Web Technologies'
    },
    {
      degree: 'Certified AWS Solutions Architect',
      school: 'Amazon Web Services',
      period: '2021',
      description: 'Professional certification in cloud architecture and deployment'
    }
  ]

  const personalStats = [
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Book, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Happy Clients', value: '25+' },
    { icon: Globe, label: 'Countries Worked With', value: '10+' },
  ]

  return (
    <div className="min-h-screen bg-brand-base">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-accent to-brand-strong text-brand-base overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h1>
              <p className="text-xl mb-8 text-brand-base/80">
                I'm a passionate developer and digital strategist with over 5 years of experience 
                creating exceptional web experiences that drive business growth.
              </p>
              <div className="space-y-4 text-brand-base/80">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>hello@dasunsucharith.com</span>
                </div>
              </div>
              <motion.button
                className="mt-8 bg-brand-base text-brand-accent px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow glow-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-80 h-80 bg-brand-surface/10 backdrop-blur-md rounded-3xl mx-auto flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-brand-accent to-brand-strong rounded-2xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-brand-base">DS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Stats */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-base" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-brand-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-20 bg-brand-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              I work with modern technologies to build scalable, performant, and beautiful web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                className="bg-brand-surface p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-sm font-medium inline-block mr-2 mb-2"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              My journey through various roles and companies, building expertise in web development.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                className="bg-brand-base p-8 rounded-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <p className="text-brand-strong font-medium mb-2">{job.company}</p>
                    <p className="text-brand-muted">{job.period}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-brand-muted mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-brand-muted flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-brand-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Education & Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="bg-brand-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-brand-strong font-medium mb-2">{edu.school}</p>
                <p className="text-brand-muted mb-4">{edu.period}</p>
                <p className="text-brand-muted">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-brand-base/80 mb-8">
              Ready to bring your next project to life? I'd love to hear about your ideas.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-brand-base text-brand-accent px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow glow-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage