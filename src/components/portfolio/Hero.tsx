import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Mail, FileDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const name = "Merci RUYANGA";
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
  }, [text, typingSpeed]);

  const tick = () => {
    let fullText = name;
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-60 dark:opacity-100"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl opacity-60 dark:opacity-100"
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container-narrow px-4 md:px-8 pt-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-primary" />
            <span className="font-mono text-sm text-primary">Hello, I'm</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 min-h-[1.5em] md:min-h-[2em]"
          >
            <span className="text-foreground">{text.split(" ")[0]}</span>
            <br />
            <span className="text-gradient">
              {text.split(" ")[1] || ""}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[3px] h-[0.8em] bg-primary ml-2 align-middle"
            />
          </motion.h1>

          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-glow mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary">Full-Stack Engineer</span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="font-mono text-xs text-muted-foreground">Backend-Focused</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            Full-Stack Engineer with 5+ years of experience designing, building, and deploying
            production-ready web applications. Specialized in{" "}
            <span className="text-foreground font-medium">backend architecture</span>,{" "}
            <span className="text-foreground font-medium">API development</span>, and{" "}
            <span className="text-foreground font-medium">database design</span> using TypeScript (Expert),
            NestJS (Expert), FastAPI (Expert), Django (Expert), MySql (Expert) ,MongoDb and PostgreSQL (Expert).
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity shadow-glow"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border text-foreground font-heading font-semibold text-sm hover:border-primary/40 transition-colors"
            >
              View Projects
            </a>
            <a
              href="https://github.com/RUYANGA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border text-foreground font-heading font-semibold text-sm hover:border-primary/40 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap gap-3"
          >
            {["TypeScript (Expert)", "NestJS", "React", "Next.js", "PostgreSQL", "Docker"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-secondary rounded-md border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-muted-foreground">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
