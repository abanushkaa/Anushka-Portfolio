import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodementor } from "react-icons/si";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in">Anushka</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Baranwal
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            a tech enthusiast who loves blending design, logic, and AI into
            meaningful digital experiences. From coding challenges to creative
            builds, I enjoy turning ideas into reality with curiosity and
            passion.
          </p>

          {/* Buttons + Social Links */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col items-center gap-6">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>

            <div className="flex space-x-5 justify-center text-2xl">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abanushka678/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/abanushkaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/AnushkaaB/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiLeetcode />
              </a>

              {/* GeeksforGeeks */}
              <a
                href="https://www.geeksforgeeks.org/user/abanushyveq/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiGeeksforgeeks />
              </a>

              {/* Codolio (using Codementor icon for now) */}
              <a
                href="https://codolio.com/profile/AnushkaaB/card"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiCodementor />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
