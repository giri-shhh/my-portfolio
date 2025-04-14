import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { fadeIn, staggerContainer, staggerItems } from "@/lib/motion";
import { Briefcase, Code, Coffee } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio-data";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="text-primary" />;
      case 'coding':
        return <Code className="text-accent" />;
      case 'java':
        return <FaJava className="text-secondary" />;
      default:
        return <Coffee />;
    }
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">My professional journey over the past {portfolioData.yearsOfExperience} years</p>
        </div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-700 transform md:-translate-x-px"></div>

          {/* Timeline entries */}
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={staggerItems}
              className="relative z-10 mb-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex justify-end md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <div className="glass-card p-6 md:text-right">
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <h4 className={`text-${exp.color} mb-2`}>{exp.company}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exp.period}</p>
                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                    <div className={`absolute md:left-1/2 bg-white dark:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center border-4 border-${exp.color} shadow transform -translate-y-1/2 md:-translate-x-1/2 md:translate-y-0`}>
                      {getIcon(exp.icon)}
                    </div>
                    <div className="md:w-1/2 md:pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8"></div>
                    <div className={`absolute md:left-1/2 bg-white dark:bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center border-4 border-${exp.color} shadow transform -translate-y-1/2 md:-translate-x-1/2 md:translate-y-0`}>
                      {getIcon(exp.icon)}
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <h4 className={`text-${exp.color} mb-2`}>{exp.company}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exp.period}</p>
                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
