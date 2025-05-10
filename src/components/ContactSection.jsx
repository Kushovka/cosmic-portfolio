import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { mc } from "../constants/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  useGSAP(() => {
    gsap.from(".titleContact", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".titleContact",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
    gsap.from(".contact", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
    gsap.from(".message", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".message",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  }, []);
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center titleContact">
          Get In <span className="text-primary "> Touch</span>
        </h2>
        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto titleContact">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 contact">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mr-17 flex flex-col items-center justify-center">
              {/* mail */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kushovk2003@mail.ru"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    kushovk2003@mail.ru
                  </a>
                </div>
              </div>

              {/* phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+79931074635"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    +7(993)-107-46-35
                  </a>
                </div>
              </div>

              {/* location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-foreground hover:text-primary transition-colors duration-300">
                    Russia, Ekaterinburg
                  </a>
                </div>
              </div>
            </div>

            {/* socials */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/kirill-kushov-9714b9364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="hover:text-primary transition-colors duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/kushovka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="hover:text-primary transition-colors duration-300" />
                </a>
                <a
                  href="https://github.com/Kushovka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="hover:text-primary transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs message">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" action="">
              {/* name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Kirill Kushov..."
                />
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Kushovka@mail.ru"
                />
              </div>

              {/* message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hi! I'd like to talk about ..."
                />
              </div>

              <button
                typeof="submit"
                className={mc(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
