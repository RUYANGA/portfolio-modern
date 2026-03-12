import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-primary" />
            <span className="font-mono text-sm text-primary">06.</span>
            <div className="h-px w-12 bg-gradient-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you have a specific project in mind or just want to discuss engineering and architecture, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "ruyangam15@gmail.com",
                href: "mailto:ruyangam15@gmail.com",
              },
              {
                icon: <MessageSquare size={20} />,
                label: "WhatsApp",
                value: "+250 780 120 184",
                href: "https://wa.me/250780120184",
              },
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: "Kigali, Rwanda",
                href: "#",
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                variants={itemVariants}
                whileHover={{ x: 5, borderColor: "rgba(var(--primary-rgb), 0.3)" }}
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="p-3 rounded-lg bg-secondary text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div variants={itemVariants} className="pt-6">
              <p className="text-sm font-heading font-semibold mb-4">Connect Socially</p>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/RUYANGA" },
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/merci-ruyanga" },
                  { icon: <Twitter size={20} />, href: "https://twitter.com/ruyanga_merci" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-muted-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-mono text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-primary text-primary-foreground font-heading font-bold shadow-glow hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
