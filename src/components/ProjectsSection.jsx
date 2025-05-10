import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ProjectsSection = () => {
  useGSAP(() => {
    gsap.from(".titleProject", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".titleProject",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
    gsap.from(".project1", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project1",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
    gsap.from(".buttonProject", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".buttonProject",
        start: "top 85%",
        end: "bottom 70%",
        scrub: true,
      },
    });
  }, []);
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* title + paragraph */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center titleProject">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto titleProject">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        {/* projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 project1">
          {projects.map((project, id) => (
            <div
              key={id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* img */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* tag */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary/15 text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* title */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                {/* description */}
                <p className="text-foreground/50 text-sm mb-4">
                  {project.description}
                </p>

                {/* links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* button to github */}
        <div className="text-center mt-12 buttonProject">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Kushovka"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
