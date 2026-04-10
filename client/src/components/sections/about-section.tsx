import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { fadeIn } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio-data";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-5">
            <div className="glass-card p-2 rotate-3 hover:rotate-0 transition-all">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mdHdhcmUsZGV2ZWxvcGVyfHx8fHx8MTcwOTczNTc3OA&ixlib=rb-4.0.3&q=80&w=600"
                alt="Developer working"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-4">
              {portfolioData.title} with a passion for creating elegant solutions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With {portfolioData.yearsOfExperience} years of experience in software development, I've built robust and scalable applications across various domains. I specialize in full-stack development with a focus on {portfolioData.specializations.join(", ")} ecosystems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {portfolioData.aboutMe}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{portfolioData.yearsOfExperience}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{portfolioData.completedProjects}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{portfolioData.technologies}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{portfolioData.clients}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Send className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" asChild>
                <a href="/assets/Girisha_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
