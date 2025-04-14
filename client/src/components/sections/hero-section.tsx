import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { fadeIn, slideUp } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio-data";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="h-screen flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideUp}
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">{portfolioData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              {portfolioData.title} with {portfolioData.yearsOfExperience}+ years of experience building modern web applications
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {portfolioData.keySkills.map((skill, index) => (
                <Tag key={index}>{skill}</Tag>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get in touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View my work
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-10 animate-pulse-slow"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-lg opacity-20 animate-rotate-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent rounded-full opacity-20 animate-pulse-slow"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmVzc2lvbmFsLG1hbGV8fHx8fHwxNzA5NzM1NTQ5&ixlib=rb-4.0.3&q=80&w=400"
                alt="Professional portrait"
                className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent-500/10 rounded-full filter blur-3xl opacity-70"></div>
    </section>
  );
}
