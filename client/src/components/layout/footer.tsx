import { Link } from "wouter";
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaMediumM,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alex Chen</h3>
            <p className="text-gray-400 mb-4">
              Software Developer with expertise in Java, Spring Boot, React, and more.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://medium.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Medium">
                <FaMediumM />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experience");
                  }}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                contact@example.com
              </p>
              <p className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                San Francisco, California
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
