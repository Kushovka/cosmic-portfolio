import { useState } from "react";
import { categories, skills } from "../constants";
import { mc } from "../constants/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useGSAP(() => {
    gsap.from(".titleSkills", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".titleSkills",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
    gsap.from(".category", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".category",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
    gsap.from(".skills", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center titleSkills">
          My <span className="text-primary"> Skills</span>
        </h2>
        {/* categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 category">
          {categories.map((category, id) => (
            <button
              key={id}
              className={mc(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary-70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* card skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 skills">
          {filteredSkills.map((skill, id) => (
            <div
              key={id}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* name */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              {/* level */}
              <div className="w-full bg-secondary/30 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
