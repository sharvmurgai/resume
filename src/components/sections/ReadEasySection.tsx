import { motion } from "framer-motion";
import { Sparkles, Users, School, Trophy, ExternalLink, Presentation, Award } from "lucide-react";

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

const achievements = [
  {
    icon: Users,
    value: "500+",
    label: "Active Users",
  },
  {
    icon: School,
    value: "10+",
    label: "Schools Globally",
  },
  {
    icon: Award,
    value: "NeurIPS",
    label: "2025 Publication",
  },
  {
    icon: Trophy,
    value: "Best Demo",
    label: "IEEE ANTS 2023",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Founded ReadEasy",
    description: "Started developing software to adapt text readability and personalize reading experiences.",
  },
  {
    year: "2023",
    title: "IEEE ANTS Best Demo Award",
    description: "Won Best Demo Award at the IEEE ANTS Exhibition.",
  },
  {
    year: "2024",
    title: "MIT BWSI CRE[AT]E Challenge",
    description: "Returning presenters, showcasing continued innovation.",
  },
  {
    year: "2025",
    title: "Imagination in Action",
    description: "Pitched to investors, expanding the startup's reach.",
  },
  {
    year: "2025",
    title: "NeurIPS Publication",
    description: "First author on accepted research paper at NeurIPS 2025 workshop.",
  },
];

export const ReadEasySection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 pattern-overlay">
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-12">
            <span className="badge-gold mb-4 inline-block">
              <Sparkles className="w-3 h-3 mr-1 inline" />
              Startup Spotlight
            </span>
            <h2 className="hero-title text-4xl md:text-5xl mb-4">
              Read<span className="gradient-text-gold">Easy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CTO & Co-founder of an emerging EdTech startup bridging literacy gaps 
              through AI-powered text simplification.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={item}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={item}
                className="glass-card p-5 text-center hover:shadow-glow transition-all duration-300"
              >
                <achievement.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold font-display gradient-text-gold">
                  {achievement.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* About */}
          <motion.div variants={item} className="glass-card p-6 md:p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              About ReadEasy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ReadEasy is software designed to adapt text readability and personalize 
              the reading experience to bridge literacy gaps. Using techniques like 
              reduced syntactic ambiguity, altered sentence structure, and vocabulary 
              choice optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The platform helps students who are falling behind, as well as those with 
              reading disabilities or autism. Our mission is to make reading accessible 
              to everyone.
            </p>
            <a
              href="https://readeasy.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Visit ReadEasy
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={item} className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Journey & Milestones
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  variants={item}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-14 h-8 rounded bg-accent/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">{milestone.year}</span>
                  </div>
                  <div className="glass-card p-4 flex-1">
                    <h4 className="font-medium text-foreground">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ReadEasy Gallery */}
          <motion.div variants={item} className="mt-16">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 justify-center">
              <div className="w-2 h-2 rounded-full bg-accent" />
              ReadEasy Gallery
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: "https://i.ibb.co/Qjv3FZvj/readeasy-neurips.jpg", title: "NeurIPS Poster", desc: "ReadEasy poster presentation" },
                { src: "https://i.ibb.co/4GhtHL2/readeasy-google.jpg", title: "Imagination in Action @ Google", desc: "Presenting at Google" },
                { src: "https://i.ibb.co/RGnZvF68/readeasy-pitch.jpg", title: "Imagination in Action Pitch", desc: "MIT innovation event" },
                { src: "https://i.ibb.co/HD8qxTFN/imagination.jpg", title: "ReadEasy Pitch", desc: "Presenting to investors" },
                { src: "https://i.ibb.co/6JH8pX6K/teachers1.jpg", title: "Teacher Presentation", desc: "Workshop with educators" },
                { src: "https://i.ibb.co/6cz335yS/teachers2.jpg", title: "Teacher Workshop", desc: "Session with teachers" },
                { src: "https://i.ibb.co/0VjgbjsQ/volunteering.jpg", title: "ReadEasy Volunteering", desc: "Community outreach" },
              ].map((img, index) => (
                <motion.div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold">{img.title}</h4>
                    <p className="text-sm text-primary-foreground/80">{img.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
