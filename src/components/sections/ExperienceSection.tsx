import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

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

const experiences = [
  {
    company: "Material Alchemy",
    role: "Paid Intern – Analysis & Visualization",
    period: "June 2025 - September 2025",
    description: "Created powerful visualization tools for chemical compounds and materials datasets. Designed interactive dashboards for researchers to explore compound properties.",
    highlights: [
      "Built analysis aids for chemical structure-performance correlations",
      "Translated complex datasets into user-friendly visual outputs",
      "Supported faster decision-making for scientists",
    ],
  },
  {
    company: "Y+ Ventures",
    role: "Member of Fellowship",
    period: "June 2025 - August 2025",
    description: "Developed an Opportunity Radar system for business/market opportunities using data aggregation, NLP classification, and scoring models.",
    highlights: [
      "System currently in use by Y+ Ventures",
      "Built NLP-based opportunity classification",
      "Created scoring models for prioritization",
    ],
  },
  {
    company: "Vizuara AI",
    role: "Research Intern",
    period: "August 2024 - Present",
    description: "Working on education tools and ML applications including YouTube series content and LLM-powered solutions.",
    highlights: [
      "Developed bespoke classroom schedule generator",
      "Working on MIT Apps integrating ML and generative AI",
      "Built email generation product with knowledge layer",
    ],
  },
  {
    company: "AP Chemistry Lab",
    role: "Lab Assistant",
    period: "August 2025 - Present",
    description: "Assisted AP Chemistry teacher with lab preparation and student mentorship.",
    highlights: [
      "Set up labs, prepared reagents, maintained equipment",
      "Graded quizzes and assignments",
      "Helped students understand concepts and safety practices",
    ],
  },
];

export const ExperienceSection = () => {
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
            <span className="badge-highlight mb-4 inline-block">
              <Briefcase className="w-3 h-3 mr-1 inline" />
              Experience
            </span>
            <h2 className="hero-title text-4xl md:text-5xl mb-4">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From chemistry labs to AI startups – building impactful solutions across industries.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={item}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Content card */}
                <motion.div
                  className="glass-card p-6 hover:shadow-glow transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {exp.role}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Skills section */}
          <motion.div variants={item} className="mt-16">
            <h3 className="text-lg font-semibold mb-6 text-center">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {[
                "Python", "Julia", "TensorFlow", "PyTorch", "Keras",
                "SciML", "LLMs", "Sci-kit Learn", "Data Visualization",
                "React", "Machine Learning", "Deep Learning"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
