import { ArrowDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { mc } from "@/constants/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(() => {
    gsap.fromTo(textRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(buttonRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1});
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 ">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold -tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi I'm</span>
            <span className="text-primary opacity-0 ml-2 animate-fade-in-delay-1">
              Kirill
            </span>
            <span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-2">
              Kushov
            </span>
          </h1>
          <p
            ref={textRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div ref={buttonRef}>
            <a  href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div
        className={mc(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce",
          !isVisible
            ? "opacity-0 pointer-events-none transition-all duration-300"
            : "opacity-100"
        )}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
