import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <a href="#home" className="font-heading font-bold text-xl text-gradient mb-3 block">
              MR<span className="text-foreground">.</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full-Stack Engineer building scalable and efficient web systems.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/RUYANGA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all text-muted-foreground"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all text-muted-foreground"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:ruyangam15@gmail.com"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all text-muted-foreground"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © 2026 Made with <Heart size={12} className="text-primary" /> by Merci RUYANGA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
