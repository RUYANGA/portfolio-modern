import { motion } from "framer-motion";
import { MapPin, Mail, Github, Briefcase } from "lucide-react";

const About = () => {
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="about" className="section-padding overflow-hidden">
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2"
          >
            <div className="bg-card rounded-xl border border-border p-6 space-y-5 hover:border-primary/30 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-20 h-20 rounded-xl bg-gradient-primary flex items-center justify-center font-heading text-2xl font-bold text-primary-foreground shadow-glow"
              >
                MR
              </motion.div>
              <div>
                <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">Ruyanga Merci</h3>
                <p className="font-mono text-sm text-primary mt-1">Full-Stack Engineer</p>
              </div>
              <div className="space-y-3 pt-2">
                {[
                  { icon: <Briefcase size={15} />, text: "Available for opportunities" },
                  { icon: <MapPin size={15} />, text: "Kigali, Rwanda" },
                  { icon: <Mail size={15} />, text: "ruyangam15@gmail.com" },
                  { icon: <Github size={15} />, text: "github.com/RUYANGA" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              <motion.div
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {[
                  "Backend system architecture & API design",
                  "Role-based authentication & authorization",
                  "Real-time communication (WebSockets)",
                  "Database modeling & optimization",
                  "Production deployment with Docker",
                  "Scalable SaaS architectures",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={listItemVariants}
                    className="flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5 font-mono text-xs">▸</span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="pt-4">
              <h4 className="font-heading font-semibold text-foreground mb-3">Currently Exploring</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Distributed Systems",
                  "Performance Optimization",
                  "Advanced DevOps",
                  "Microservices"
                ].map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    whileHover={{ y: -2, backgroundColor: "rgba(var(--primary-rgb), 0.15)" }}
                    className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20 cursor-default transition-colors"
                  >
                    {item}
                  </motion.span>
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
