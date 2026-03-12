import { motion, Variants } from "framer-motion";
import { Shield, Rocket, Workflow, Server, Code, CheckCircle } from "lucide-react";

const EngineeringApproach = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="approach" className="section-padding bg-card/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-primary" />
            <span className="font-mono text-sm text-primary">02.</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Engineering Approach</h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            How I conceptualize, build, and maintain production-grade systems — prioritizing reliability,
            security, and engineering excellence over quick shortcuts.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Architecture/Philosophy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Server size={24} />,
                title: "Reliable Backend",
                desc: "Strong focus on data integrity, distributed systems architecture, and resilient API design using NestJS and Node.js.",
              },
              {
                icon: <Code size={24} />,
                title: "Clean Logic",
                desc: "Emphasis on type safety, SOLID principles, and hexagonal architecture to ensure maintainable and testable codebases.",
              },
              {
                icon: <Shield size={24} />,
                title: "Security & Ops",
                desc: "Implementing secure authentication, role management, and containerized deployments for modern production needs.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: "rgba(var(--primary-rgb), 0.3)" }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="p-3 rounded-lg bg-secondary text-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
            <h3 className="font-heading font-semibold text-lg mb-5 flex items-center gap-2">
              <Rocket size={18} className="text-primary" />
              Deployment Flow
            </h3>
            <div className="font-mono text-xs space-y-2 text-muted-foreground bg-secondary rounded-lg p-4 border border-border">
              <p><span className="text-primary"># Backend:</span> Docker → CI/CD → VPS</p>
              <p><span className="text-primary"># Mobile:</span> Expo / Fastlane → Stores</p>
              <p><span className="text-primary"># Web:</span> Vercel / Netlify / Caddy</p>
              <div className="h-px bg-border my-2" />
              <p><span className="text-primary">$</span> expo build:android</p>
              <p><span className="text-primary">$</span> docker-compose push prod</p>
            </div>
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="font-heading font-semibold text-lg mb-5">Architecture Principles</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Separation of Concerns",
                "Modular Structure",
                "Clean API Contracts",
                "Secure Auth Flows",
                "Performance-First DB",
                "Testable Code",
              ].map((p) => (
                <div key={p} className="px-3 py-2 text-xs text-center font-mono text-secondary-foreground bg-secondary rounded-lg border border-border">
                  {p}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
