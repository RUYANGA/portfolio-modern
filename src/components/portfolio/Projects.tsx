import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

interface Project {
  title: string;
  type: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "U-Caravan E-commerce",
    type: "B2B/B2C Marketplace",
    problem: "Need for a unified platform for local and international trade with complex tax and shipping logic.",
    solution: "A high-performance marketplace with deep mega menus, real-time inventory tracking, and localized payment gateways.",
    highlights: [
      "Advanced Mega Menu architecture",
      "Dynamic pricing engine (RWF/USD)",
      "Real-time order tracking pipeline",
      "SEO-optimized product discovery",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    live: "https://www.u-caravan.com",
    image: "/u-caravan.png",
  },
  {
    title: "MbuPro Real Estate",
    type: "Property Management Platform",
    problem: "Tenants and landlords lacked a centralized, real-time system for booking and property management.",
    solution: "A comprehensive real estate ecosystem featuring web and mobile clients, real-time messaging, and automated booking workflows.",
    highlights: [
      "Real-time presence & messaging system",
      "Automated booking & payment tracking",
      "Admin / Landlord / Tenant role systems",
      "Interactive property search & maps",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Socket.io", "React Native"],
    live: "https://mbupro.com/",
    image: "/mbupro.png",
  },
  {
    title: "Enterprise Analytics API",
    type: "High-Performance Backend",
    problem: "Data-heavy reporting was slowing down the main API server.",
    solution: "A FastAPI-based microservice optimized for high-throughput data processing and analytics.",
    highlights: [
      "Python / FastAPI high-performance core",
      "Asynchronous data processing",
      "Integration with Vector Databases",
      "Automated OpenAPI documentation",
    ],
    stack: ["FastAPI", "Python", "Redis", "PostgreSQL"],
    github: "https://github.com/RUYANGA",
  },
  {
    title: "NGOFund Platform",
    type: "CivicTech SaaS Marketplace",
    problem: "NGOs struggle to connect with donors and volunteers efficiently.",
    solution: "A marketplace platform connecting verified NGOs with supporters through a structured, role-based system.",
    highlights: [
      "Role-based access control (Admin / NGO / Donor)",
      "PostgreSQL relational schema design",
      "Secure JWT authentication",
      "Scalable RESTful API architecture",
    ],
    stack: ["NestJS", "PostgreSQL", "Prisma", "React", "Docker"],
    github: "https://github.com/RUYANGA",
  },
  {
    title: "DailyStandupBot",
    type: "Team Productivity Platform",
    problem: "Teams lacked structured daily reporting and visibility into progress.",
    solution: "A standup management platform with role permissions, weekly rankings, and admin dashboards.",
    highlights: [
      "Complex database relationships",
      "oRPC procedures",
      "CEO / PM / Staff role authorization",
      "Weekly ranking system",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "React"],
    github: "https://github.com/RUYANGA",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-primary" />
            <span className="font-mono text-sm text-primary">04.</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            Projects demonstrating real engineering complexity — each with clear problem, solution, and architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all group flex flex-col"
            >
              {project.image && (
                <div className="aspect-video overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs text-primary">{project.type}</span>
                    <h3 className="font-heading text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Layers size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="space-y-3 mb-5 flex-1">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Highlights</p>
                  <ul className="space-y-1">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary mt-0.5">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-[10px] font-mono text-primary bg-primary/10 rounded border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3 border-t border-border mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/RUYANGA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border text-foreground font-heading font-semibold text-sm hover:border-primary/40 transition-colors"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
