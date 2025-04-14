import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { fadeIn, staggerContainer, staggerItems } from "@/lib/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tag } from "@/components/ui/tag";
import { Code, Server } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const tagCloudRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const isTagCloudInView = useInView(tagCloudRef, { once: true });

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            I've worked with a variety of technologies and frameworks over my {portfolioData.yearsOfExperience}-year career
          </p>
        </div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Languages and Frameworks */}
          <motion.div variants={staggerItems} className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                <Code className="h-4 w-4 text-primary" />
              </span>
              Languages & Frameworks
            </h3>
            <div className="space-y-4">
              {portfolioData.skills.languages.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" indicatorClassName="bg-gradient-to-r from-primary to-primary-600" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend & Infrastructure */}
          <motion.div variants={staggerItems} className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mr-3">
                <Server className="h-4 w-4 text-secondary" />
              </span>
              Backend & Infrastructure
            </h3>
            <div className="space-y-4">
              {portfolioData.skills.backend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" indicatorClassName="bg-gradient-to-r from-secondary to-secondary-600" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Technology Cloud */}
        <motion.div 
          ref={tagCloudRef}
          initial="hidden"
          animate={isTagCloudInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mt-12 glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Technology Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.techCloud.map((tech, index) => (
              <Tag key={index} className="font-mono">{tech}</Tag>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
