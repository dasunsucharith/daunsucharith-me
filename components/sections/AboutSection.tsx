'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-surface text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-6 space-y-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: '#FEA485' }}
        >
          About Me
        </motion.h2>
        <img
          src="/assets/dasun.png"
          alt="Dasun Sucharith"
          className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-[#FEA485] shadow-lg mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg leading-relaxed text-white text-center"
        >
          I'm currently working as a Marketing Automation Developer at Wavenet Pvt Ltd since October 2022. So yes, you could say I’m a developer with a marketer’s mindset, combining code and strategy to solve real business problems.<br /><br />
          With a background in marketing automation, SEO, and web development, I help brands create seamless digital systems, from high-converting email flows to fast, scalable websites and search-first content strategies.<br /><br />
          I work with a wide range of tools across marketing, SEO, AI, and web development, giving me the flexibility to plug into any part of a digital growth engine, technical or creative.<br /><br />
          I believe great digital experiences aren’t just beautiful, they’re purposeful, measurable, and built to evolve.<br /><br />
          If you're looking for someone who can bridge the gap between marketing and tech, I'm your guy.
        </motion.p>
        <a
          href="/assets/files/dasun%20sucharith%20CV%206172025.pdf"
          download
          className="inline-block mt-6 px-6 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-brand-accent to-brand-strong text-white border border-white/20 relative overflow-hidden group"
          style={{ background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)', backdropFilter: 'blur(20px)' }}
        >
          <span className="relative z-10">Download My CV</span>
        </a>
      </motion.div>
    </section>
  )
}

export default AboutSection
