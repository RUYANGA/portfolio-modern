import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MessageSquare, MapPin, Github, Twitter, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.ruyanga.tech/mail/contact-message", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json().catch(() => ({}));
        toast.error(errorData.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={loading}
                    className="w-full bg-secondary/80 dark:bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/60 disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-muted-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={loading}
                    className="w-full bg-secondary/80 dark:bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/60 disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-mono text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  disabled={loading}
                  className="w-full bg-secondary/80 dark:bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/60 disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  disabled={loading}
                  className="w-full bg-secondary/80 dark:bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted-foreground/60 disabled:opacity-50"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-lg bg-gradient-primary text-primary-foreground font-heading font-bold shadow-glow hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
