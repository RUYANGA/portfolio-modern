import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "◆",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "State Management"],
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
    skills: ["Git & GitHub", "Docker", "Linux (Ubuntu)", "CI/CD", "AWS / VPS", "Cloud Deployment"],
  },
  {
    title: "Languages",
    icon: "◆",
    skills: ["JavaScript", "TypeScript", "Python (Expert)", "Java", "Dart", "C++"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            A comprehensive overview of my technical competencies, focused on depth over breadth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary text-sm">{cat.icon}</span>
                <h3 className="font-heading font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-secondary-foreground bg-secondary rounded-md border border-border group-hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
