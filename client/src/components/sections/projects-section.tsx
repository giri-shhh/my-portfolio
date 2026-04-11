import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { fadeIn, staggerContainer, staggerItems } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

type ProjectCategory = "All" | "Backend" | "Frontend" | "Full-Stack" | "Mobile";

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = portfolioData.projects.filter(project =>
    filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">Showcasing some of my best work</p>
        </div>

        {/* Project Filters */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["All", "Backend", "Frontend", "Full-Stack", "Mobile"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category as ProjectCategory)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItems}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2 justify-end">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-primary-100 transition-colors"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live demo"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-primary-100 transition-colors"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded bg-${tech.color}-100 dark:bg-${tech.color}-900/30 text-${tech.color}-700 dark:text-${tech.color}-300`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.detailsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary-600 flex items-center gap-1 text-sm font-medium"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
