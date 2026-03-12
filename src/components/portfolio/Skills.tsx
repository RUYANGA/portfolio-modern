import { motion, Variants } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "◆",
    skills: ["React.js", "Next.js", "TypeScript (Expert)", "Tailwind CSS", "Responsive UI", "State Management"],
  },
  {
    title: "Mobile",
    icon: "◆",
    skills: ["React Native", "Flutter", "Mobile UI/UX", "App Store Deployment", "Cross-Platform", "Native Modules"],
  },
  {
    title: "Backend",
    icon: "◆",
    skills: ["Node.js", "NestJS", "Django", "FastAPI", "REST & GraphQL", "Query Optimization"],
  },
  {
    title: "Databases",
    icon: "◆",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM", "Vector Databases"],
  },
  {
    title: "DevOps & Tools",
    icon: "◆",
    skills: ["Docker", "Microsoft Azure", "Hostinger", "Coolify", "Nginx", "Auto HTTPS", "Linux (Ubuntu)", "CI/CD", "Git & GitHub"],
  },
  {
    title: "Languages",
    icon: "◆",
    skills: ["JavaScript (Expert)", "TypeScript (Expert)", "Python (Expert)", "Java", "Dart", "C++"],
  },
];

const Skills = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            A comprehensive overview of my technical competencies, focused on depth over breadth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(var(--primary-rgb), 0.3)" }}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-shadow group h-full"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary text-sm">{cat.icon}</span>
                <h3 className="font-heading font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, color: "hsl(var(--primary))", borderColor: "hsl(var(--primary) / 0.4)" }}
                    className="px-3 py-1.5 text-xs font-mono text-foreground/80 dark:text-secondary-foreground bg-secondary/50 dark:bg-secondary rounded-md border border-border group-hover:border-primary/20 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
