import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import portraitImage from "@/assets/portrait.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const highlights = [
  "MIT Julia Lab Research Intern",
  "Stanford University Researcher",
  "NeurIPS 2025 Author",
  "NVIDIA GPU Award Winner",
  "ReadEasy CTO (500+ users)",
];

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center pattern-overlay">
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto"
        >
          {/* Hero content with portrait */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-12">
            {/* Portrait */}
            <motion.div 
              variants={item}
              className="relative flex-shrink-0"
            >
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute -inset-3 rounded-full border border-primary/10" />
                <div className="absolute -inset-6 rounded-full border border-primary/5" />
                
                {/* Portrait image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-lg">
                  <img 
                    src={portraitImage} 
                    alt="Sharv Murgai"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Accent glow */}
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl -z-10" />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="text-center lg:text-left flex-1">
              {/* Quick badge */}
              <motion.div variants={item} className="mb-6">
                <span className="badge-highlight">
                  High School Senior • Cupertino, CA
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1 
                variants={item}
                className="hero-title text-4xl md:text-6xl lg:text-7xl mb-6"
              >
                Sharv{" "}
                <span className="gradient-text">Murgai</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p 
                variants={item}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 text-balance"
              >
                Passionate about research, machine learning, chemistry, and sustainability. 
                Building the future through Scientific ML and EdTech innovation.
              </motion.p>

              {/* Quick links */}
              <motion.div 
                variants={item}
                className="flex flex-wrap justify-center lg:justify-start gap-3"
              >
                <a 
                  href="mailto:murgai.sharv@gmail.com"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:shadow-glow"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card text-foreground font-medium hover:border-primary/50 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
              </motion.div>
            </div>
          </div>

          {/* Highlights removed — using large stat boxes instead */}

          {/* Stats */}
          <motion.div 
            variants={item}
            className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
          >
              {[
                { value: "Stanford", label: "University Researcher" },
                { value: "MIT", label: "Julia Lab Research Intern" },
                { value: "NeurIPS", label: "Reviewer" },
                { value: "NVIDIA", label: "Award Winner" },
                { value: "15", label: "Publications" },
                { value: "500+", label: "ReadEasy Users" },
              ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass-card p-5 flex-1 min-w-[140px] max-w-[180px]"
              >
                <div className="text-2xl md:text-3xl font-bold font-display gradient-text whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
