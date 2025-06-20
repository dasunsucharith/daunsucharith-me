"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../lib/projects";

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
          style={{ color: "#FEA485" }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block group relative rounded-2xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-brand-base/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold">
                    {project.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
