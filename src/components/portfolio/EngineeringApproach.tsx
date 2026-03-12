import { motion } from "framer-motion";
import { Shield, Rocket, Workflow, Server } from "lucide-react";

const EngineeringApproach = () => {
  return (
    <section id="engineering" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-primary" />
            <span className="font-mono text-sm text-primary">05.</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How I Build Software</h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            My engineering philosophy emphasizes scalability, security, and maintainability at every layer.
          </p>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
            <Workflow size={18} className="text-primary" />
            Development Process
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              "Requirements Analysis",
              "Schema Design",
              "API Planning",
              "Auth Implementation",
              "Frontend Integration",
              "Testing",
              "Deployment",
            ].map((step, i) => (
              <div key={step} className="relative">
                <div className="bg-card rounded-lg border border-border p-4 text-center hover:border-primary/30 transition-colors h-full flex flex-col items-center justify-center">
                  <span className="font-mono text-xs text-primary mb-2">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-medium text-foreground">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="font-heading font-semibold text-lg mb-5 flex items-center gap-2">
              <Server size={18} className="text-primary" />
              System Architecture
            </h3>
            <div className="font-mono text-sm space-y-2 text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="text-primary">Admin/Web</span>
                <span className="text-border">→</span>
                <span>Next.js / React</span>
              </div>
              <div className="w-px h-4 bg-border ml-6" />
              <div className="flex items-center gap-3">
                <span className="text-primary">Mobile</span>
                <span className="text-border">→</span>
                <span>React Native / Flutter</span>
              </div>
              <div className="w-px h-4 bg-border ml-6" />
              <div className="flex items-center gap-3">
                <span className="text-primary">API</span>
                <span className="text-border">→</span>
                <span>NestJS / FastAPI / Django</span>
              </div>
              <div className="w-px h-4 bg-border ml-6" />
              <div className="flex items-center gap-3">
                <span className="text-primary">Backend</span>
                <span className="text-border">→</span>
                <span>PostgreSQL / Redis / Vector DB</span>
              </div>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="font-heading font-semibold text-lg mb-5 flex items-center gap-2">
              <Shield size={18} className="text-primary" />
              Security Practices
            </h3>
            <ul className="space-y-3">
              {[
                "JWT & OAuth2 authentication",
                "Mobile biometric auth integration",
                "End-to-end API encryption (HTTPS)",
                "Role-based access control (RBAC)",
                "Environment isolation & secrets",
                "App Store / Play Store security compliance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-mono text-xs">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Deployment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card rounded-xl border border-border p-6"
          >
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
