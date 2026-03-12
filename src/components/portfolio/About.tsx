import { motion } from "framer-motion";
import { MapPin, Mail, Github, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-primary" />
            <span className="font-mono text-sm text-primary">01.</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="bg-card rounded-xl border border-border p-6 space-y-5">
              <div className="w-20 h-20 rounded-xl bg-gradient-primary flex items-center justify-center font-heading text-2xl font-bold text-primary-foreground">
                MR
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">Ruyanga Merci</h3>
                <p className="font-mono text-sm text-primary mt-1">Full-Stack Engineer</p>
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Briefcase size={15} className="text-primary" />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={15} className="text-primary" />
                  <span>Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={15} className="text-primary" />
                  <span>ruyangam15@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Github size={15} className="text-primary" />
                  <span>github.com/RUYANGA</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am a Full-Stack Engineer passionate about building reliable digital platforms that combine 
              strong backend architecture with intuitive user experiences. My work centers on designing 
              scalable APIs, structured databases, and modern web interfaces that perform efficiently in 
              real production environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience across the full development lifecycle — from system design and 
              implementation to deployment and optimization — I enjoy transforming complex requirements 
              into clean, maintainable solutions.
            </p>

            <div className="pt-4">
              <h4 className="font-heading font-semibold text-foreground mb-4">What I Focus On</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Backend system architecture & API design",
                  "Role-based authentication & authorization",
                  "Real-time communication (WebSockets)",
                  "Database modeling & optimization",
                  "Production deployment with Docker",
                  "Scalable SaaS architectures",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 font-mono text-xs">▸</span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-heading font-semibold text-foreground mb-3">Currently Exploring</h4>
              <div className="flex flex-wrap gap-2">
                {["Distributed Systems", "Performance Optimization", "Advanced DevOps", "Microservices"].map((item) => (
                  <span key={item} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
