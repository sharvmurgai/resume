import { motion } from "framer-motion";
import { Sparkles, Rocket, Brain, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface StartupSectionProps {
  onSelectStartup: (startup: "readeasy" | "elementmindx") => void;
}

const startups = [
  {
    id: "readeasy" as const,
    name: "ReadEasy",
    tagline: "AI-Powered Text Simplification",
    description: "CTO & Co-founder of an EdTech startup bridging literacy gaps through AI-powered text adaptation.",
    icon: Brain,
    color: "from-accent to-primary",
    stats: ["500+ Users", "10+ Schools", "NeurIPS 2025"],
  },
  {
    id: "elementmindx" as const,
    name: "ElementMindX",
    tagline: "Coming Soon",
    description: "A new venture in development. More details to be announced.",
    icon: Rocket,
    color: "from-primary to-accent",
    stats: ["In Development"],
  },
];

export const StartupSection = ({ onSelectStartup }: StartupSectionProps) => {
  return (
    <section className="min-h-screen pt-24 pb-16 pattern-overlay">
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-16">
            <span className="badge-gold mb-4 inline-block">
              <Sparkles className="w-3 h-3 mr-1 inline" />
              Entrepreneurship
            </span>
            <h2 className="hero-title text-4xl md:text-5xl mb-4">
              My <span className="gradient-text-gold">Startups</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions to real-world problems through technology and entrepreneurship.
            </p>
          </motion.div>

          {/* Startup Cards */}
          <motion.div 
            variants={item}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {startups.map((startup) => (
              <motion.button
                key={startup.id}
                onClick={() => onSelectStartup(startup.id)}
                className="glass-card p-8 text-left group hover:shadow-glow transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${startup.color} flex items-center justify-center mb-6`}>
                  <startup.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2 gradient-text-gold">
                  {startup.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {startup.tagline}
                </p>
                <p className="text-muted-foreground mb-6">
                  {startup.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {startup.stats.map((stat) => (
                    <span 
                      key={stat}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
