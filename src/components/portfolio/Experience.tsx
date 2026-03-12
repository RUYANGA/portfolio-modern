import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Full-stack Intern",
    company: "SEVEN X",
    location: "Kimironko, Rwanda",
    period: "March 2025 — May 2025 (3 Months)",
    points: [
      "Building high-performance web applications using Hono for the backend and Next.js for the frontend.",
      "Designing and implementing scalable database schemas using PostgreSQL.",
      "Developed robust and secure API endpoints to support feature-rich frontend components.",
      "Optimizing application performance and ensuring cross-platform responsiveness.",
    ],
    impact: "Contributing to the rapid delivery of modern, scalable full-stack solutions.",
  },
  {
    title: "Backend Development Intern",
    company: "Binary Hub",
    location: "Kigali, Rwanda",
    period: "Jan 2024 — Aug 2025",
    points: [
      "Developed API endpoints and backend features using Node.js and NestJS",
      "Implemented validation layers and structured error handling patterns",
      "Assisted in debugging production issues and improving system reliability",
      "Collaborated with senior engineers on architecture improvements",
      "Enhanced application stability through testing and refactoring",
    ],
    impact: "Strengthened backend reliability and improved development workflow efficiency.",
  },
  {
    title: "Junior Backend Developer",
    company: "VIPI Transport",
    location: "Kigali, Rwanda",
    period: "Sept 2022 — 2023",
    points: [
      "Designed and maintained RESTful APIs using Node.js and Express",
      "Modeled and optimized MongoDB and PostgreSQL database schemas",
      "Implemented secure authentication and authorization using JWT",
      "Collaborated with frontend teams to integrate backend services",
      "Improved API response performance through query optimization",
    ],
    impact: "Contributed to stable backend services supporting daily operational workflows.",
  },
];

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "University of Rwanda — Nyarugenge Campus",
  coursework: ["Data Structures & Algorithms", "Database Systems", "Software Engineering", "Web Development", "Numerical Analysis"],
};

const certifications = [
  {
    title: "JavaScript Algorithms & Data Structures",
    year: "2025",
    description: "Algorithmic problem solving, data structures, and computational thinking using JavaScript.",
  },
  {
    title: "Pro JavaScript Backend Developer",
    year: "2024",
    description: "Advanced backend engineering: scalable API design, Node.js architecture, and performance optimization.",
  },
  {
    title: "AI Career Essentials",
    year: "2024",
    description: "Practical AI tooling, prompt engineering, and leveraging LLMs for software development.",
  },
];

const Experience = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Experience & Education</h2>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase size={18} className="text-primary" />
            <h3 className="font-heading text-xl font-semibold">Work Experience</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 relative"
          >
            {/* Animated vertical line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[0.2rem] top-1 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
            />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative pl-8 group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.2) }}
                  className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-glow group-hover:scale-125 transition-transform"
                />
                <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{exp.title}</h4>
                      <p className="font-mono text-sm text-primary">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 font-mono text-xs">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-primary font-mono">Impact: {exp.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Certs */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={18} className="text-primary" />
              <h3 className="font-heading text-xl font-semibold">Education</h3>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/20 transition-colors h-full">
              <h4 className="font-heading font-semibold mb-1">{education.degree}</h4>
              <p className="font-mono text-sm text-primary mb-4">{education.school}</p>
              <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <motion.span
                    key={c}
                    whileHover={{ y: -2, color: "hsl(var(--primary))" }}
                    className="px-3 py-1 text-xs font-mono text-secondary-foreground bg-secondary rounded-md border border-border"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} className="text-primary" />
              <h3 className="font-heading text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ x: 5 }}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/20 transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-heading text-sm font-semibold group-hover:text-primary transition-colors">{cert.title}</h4>
                    <span className="font-mono text-xs text-primary shrink-0">{cert.year}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
