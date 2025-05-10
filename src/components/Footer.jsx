
import { ArrowUp } from "lucide-react";


const Footer = () => {


  return (
    <footer className="py-12 px-4 bg-card/50 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-foreground ">
        &copy; {new Date().getFullYear()} Kushovka.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/5 hover:bg-primary/20 text-primary transition-colors dutation-300 animate-bounce"
      >
        <ArrowUp size={32} />
      </a>
    </footer>
  );
};

export default Footer;
