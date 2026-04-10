import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-glass",
        isScrolled && "shadow-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#hero"
            className="text-xl font-bold text-primary dark:text-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <span className="text-gradient">Dev</span>Portfolio
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
            <Button variant="default" asChild>
              <a href="/assets/Girisha_Resume.pdf">Resume</a>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 shadow-lg",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="px-4 py-3 space-y-3">
          <a
            href="#about"
            className="block hover:text-primary dark:hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className="block hover:text-primary dark:hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block hover:text-primary dark:hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="block hover:text-primary dark:hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="block hover:text-primary dark:hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
          <Button className="w-full" asChild>
            <a href="/assets/Girisha_Resume.pdf">Resume</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
