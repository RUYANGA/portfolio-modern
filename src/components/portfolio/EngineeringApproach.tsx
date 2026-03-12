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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Engineering Approach</h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            How I conceptualize, build, and maintain production-grade systems — prioritizing reliability,
            security, and engineering excellence over quick shortcuts.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Top Row: Architecture/Philosophy */}
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
          </motion.div>

          {/* Bottom Row: Process & Principles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Deployment Flow */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(var(--primary-rgb), 0.3)" }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary text-primary group-hover:scale-110 transition-transform">
                  <Rocket size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">Deployment Flow</h3>
              </div>

              <div className="flex-grow font-mono text-xs space-y-3 text-foreground/70 dark:text-muted-foreground bg-secondary/80 dark:bg-secondary/50 rounded-lg p-5 border border-border group-hover:border-primary/20 transition-colors">
                <div className="space-y-1">
                  <p><span className="text-primary/80 dark:text-primary/70"># Backend:</span> Docker → CI/CD → VPS</p>
                  <p><span className="text-primary/80 dark:text-primary/70"># Mobile:</span> Expo / Fastlane → Stores</p>
                  <p><span className="text-primary/80 dark:text-primary/70"># Web:</span> Vercel / Netlify / Caddy</p>
                </div>
                <div className="h-px bg-border my-3" />
                <div className="space-y-1 opacity-80">
                  <p><span className="text-primary/60 dark:text-primary/50">$</span> expo build:android</p>
                  <p><span className="text-primary/60 dark:text-primary/50">$</span> docker-compose push prod</p>
                </div>
              </div>
            </motion.div>

            {/* Architecture Principles */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(var(--primary-rgb), 0.3)" }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary text-primary group-hover:scale-110 transition-transform">
                  <Shield size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">Architecture Principles</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-grow">
                {[
                  "Separation of Concerns",
                  "Modular Structure",
                  "Clean API Contracts",
                  "Secure Auth Flows",
                  "Performance-First DB",
                  "Testable Code",
                ].map((p) => (
                  <div
                    key={p}
                    className="px-3 py-3 text-[10px] sm:text-xs text-center font-mono text-secondary-foreground bg-secondary/50 rounded-lg border border-border group-hover:border-primary/10 transition-colors flex items-center justify-center"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
