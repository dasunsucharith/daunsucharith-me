'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-surface text-white">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg leading-relaxed text-brand-muted"
        >
          I'm currently working as a Marketing Automation Developer at Wavenet Pvt Ltd since October 2022.
          With a background in marketing automation, SEO, and web development, I help brands create seamless digital systems.
          I believe great digital experiences aren’t just beautiful, they’re purposeful, measurable, and built to evolve.
        </motion.p>
      </div>
    </section>
  )
}

export default AboutSection
