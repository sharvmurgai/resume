import { motion } from "framer-motion";
import { Sparkles, Rocket, ArrowLeft } from "lucide-react";

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

interface ElementMindXSectionProps {
  onBack: () => void;
}

export const ElementMindXSection = ({ onBack }: ElementMindXSectionProps) => {
  return (
    <section className="min-h-screen pt-24 pb-16 pattern-overlay">
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Back Button */}
          <motion.button
            variants={item}
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Startups
          </motion.button>

          {/* Header */}
          <motion.div variants={item} className="text-center mb-12">
            <span className="badge-gold mb-4 inline-block">
              <Sparkles className="w-3 h-3 mr-1 inline" />
              Startup Spotlight
            </span>
            <h2 className="hero-title text-4xl md:text-5xl mb-4">
              Element<span className="gradient-text-gold">MindX</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Coming soon...
            </p>
          </motion.div>

          {/* Placeholder Content */}
          <motion.div 
            variants={item} 
            className="glass-card p-12 text-center max-w-2xl mx-auto"
          >
            <Rocket className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h3 className="font-display text-2xl font-bold mb-4">
              Under Development
            </h3>
            <p className="text-muted-foreground">
              This startup is currently in development. More details will be shared soon.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
