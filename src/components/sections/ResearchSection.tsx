import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Award } from "lucide-react";

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

const currentResearch = [
  {
    institution: "MIT Julia Lab",
    role: "Research Intern – Scientific Machine Learning",
    period: "November 2024 - Present",
    highlights: [
      "First author on research paper @ NeurIPS 2025",
      "Developed Universal Differential Equation (UDE) models in Julia",
      "Simulated 2D Brusselator dynamics using finite-difference methods",
      "Disease modeling and SciML applications",
    ],
    color: "primary",
  },
  {
    institution: "Stanford University",
    role: "Research Intern – Critical Chemistry and Industrial Ecology",
    period: "November 2024 - Present",
    highlights: [
      "Modeled lifecycle of critical elements through spatial and chemical lenses",
      "Data-driven map-based visualizations for rare-earth element flow",
      "Developed modular infrastructure for material flow analysis",
    ],
    color: "accent",
  },
];

const publications = [
  // NeurIPS Workshop Papers
  {
    title: "Developing Surrogates for Epidemic Agent-Based Models via Scientific Machine Learning",
    venue: "NeurIPS 2025 Workshop",
    type: "Presented",
    category: "SciML + Epidemiology",
    link: "https://ml4physicalsciences.github.io/2025/files/NeurIPS_ML4PS_2025_261.pdf",
  },
  {
    title: "ReadEasy: Bridging Reading Accessibility Gaps using Responsible Multimodal Simplification with Generative AI",
    venue: "NeurIPS 2025 Workshop",
    type: "Presented",
    category: "Education + AI",
    link: "https://openreview.net/forum?id=FKcIefSPxe",
  },
  // ACS Conference Presentations
  {
    title: "SCINet: GPU-accelerated physics-informed modeling of molecular interactions to predict nanofluid heat capacity",
    venue: "ACS Fall 2025",
    type: "NVIDIA GPU Award",
    category: "Chemistry + ML",
    link: "https://scimeetings.acs.org/exhibit/SCINet-GPU-accelerated-physics-informed/4324175",
  },
  {
    title: "Effect of UDE optimization on CO₂ absorption efficiency in carbon capture systems using MEA and Ca(OH)₂",
    venue: "ACS Fall 2025",
    type: "Presented",
    category: "Sustainability",
    link: "https://acs.digitellinc.com/p/s/effect-of-ude-optimization-on-co2-absorption-efficiency-in-carbon-capture-systems-using-mea-and-caoh2-with-scientific-machine-learning-642172",
  },
  {
    title: "GPU-enabled U0 prediction on QM9: Time-to-solution benchmarks for molecular machine learning",
    venue: "ACS Spring 2026",
    type: "Accepted",
    category: "Chemistry + ML",
    link: "#",
  },
  {
    title: "Optimizing Chemical Reaction Pathways Using Scientific ML and Topological Data Analysis",
    venue: "ACS GC&E 2025",
    type: "Accepted",
    category: "Chemistry + ML",
    link: "#",
  },
  {
    title: "Towards Sustainable Chemical Design: Advancing Predictive Modeling of Functional Chemicals and Materials with SciML",
    venue: "ACS GC&E 2024",
    type: "Presented",
    category: "Sustainability",
    link: "#",
  },
  // IEEE Research Papers
  {
    title: "Enhancing Distributed Security and Reliability in Semiconductor Supply Chains with Blockchain and Chemistry Integration",
    venue: "IEEE SRDS 2024",
    type: "Published",
    category: "Blockchain + Security",
    link: "https://ieeexplore.ieee.org/abstract/document/10806509/",
  },
  {
    title: "Modeling and Forecasting Battery Degradation using Scientific Machine Learning for Sustainability",
    venue: "IEEE MIT URTC 2024",
    type: "Published",
    category: "Sustainability + SciML",
    link: "https://ieeexplore.ieee.org/abstract/document/10937563",
  },
  {
    title: "Modeling User Behavior with Reduced Canonical Form (RCF): Exploring the Future with Human Machine Interface (HMI) for ITS",
    venue: "IEEE/ACM CCGrid 2024",
    type: "Published",
    category: "HMI + ML",
    link: "https://ieeexplore.ieee.org/abstract/document/10707494/",
  },
  {
    title: "Parallel Tempering (PT) Empowers Cell Tower Clustering: Advancing k-medoids Optimization",
    venue: "IEEE ANTS 2023",
    type: "Published",
    category: "Optimization",
    link: "https://ieeexplore.ieee.org/abstract/document/10468718/",
  },
  {
    title: "Machine Learning Optimized Quantum Dot Chemistry for Secure 6G Quantum Communication",
    venue: "IEEE HPSR 2024",
    type: "Published",
    category: "Quantum + ML",
    link: "https://ieeexplore.ieee.org/document/11038882",
  },
  // Other Professional Conferences
  {
    title: "Navigating the Metaverse: Adaptive Traffic Optimization through Parallel Tempering in 6G Environments",
    venue: "ANT 2024 / ScienceDirect",
    type: "Published",
    category: "Optimization",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050924013450/pdf?md5=003f7ea0eda2df4261424283d5c1179e&pid=1-s2.0-S1877050924013450-main.pdf",
  },
  {
    title: "Physics-Informed Neural Network for Real-Time mmWave Channel Impulse-Response Prediction in Urban Microcells",
    venue: "NEW2AN 2025 / Springer",
    type: "Invited Extended Paper",
    category: "ML + Wireless",
    link: "https://drive.google.com/file/d/1WAle3W9ZEDmeV-7njUuVp7xf0SrhudHC/view?usp=sharing",
  },
  {
    title: "A Scientific Machine Learning Approach for Predicting and Forecasting Battery Degradation in Electric Vehicles",
    venue: "arXiv / Tsinghua Talk",
    type: "6 Citations",
    category: "Sustainability",
    note: "Invited talk at Tsinghua University – professor reached out after reading the paper",
    link: "https://arxiv.org/pdf/2410.14347",
  },
];

const reviewerJournals = [
  {
    venue: "Journal of Reliability Engineering & System Safety",
    note: "#1 ranked journal in reliability engineering",
  },
  {
    venue: "The Open Public Health Journal",
  },
];

const reviewerConferences = [
  {
    venue: "NeurIPS 2025 MATH-AI Workshop",
  },
  {
    venue: "IEEE 2nd International Symposium on Parallel Computing and Distributed Systems",
  },
];

export const ResearchSection = () => {
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
              <BookOpen className="w-3 h-3 mr-1 inline" />
              Research
            </span>
            <h2 className="hero-title text-4xl md:text-5xl mb-4">
              Academic <span className="gradient-text">Contributions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              15+ peer-reviewed publications across NeurIPS, IEEE, and ACS conferences.
            </p>
          </motion.div>

          {/* Reviewer Positions */}
          <motion.div variants={item} className="mb-12">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Reviewer Positions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Journals */}
              <div className="glass-card p-5">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Journals
                </h4>
                <div className="space-y-3">
                  {reviewerJournals.map((journal, index) => (
                    <div key={index}>
                      <p className="text-sm font-medium text-foreground">{journal.venue}</p>
                      {journal.note && (
                        <p className="text-xs text-accent mt-0.5 font-medium">{journal.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Conferences */}
              <div className="glass-card p-5">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Conferences
                </h4>
                <div className="space-y-3">
                  {reviewerConferences.map((conf, index) => (
                    <div key={index}>
                      <p className="text-sm font-medium text-foreground">{conf.venue}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Current Positions */}
          <motion.div variants={item} className="mb-16">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Current Research Positions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {currentResearch.map((position, index) => (
                <motion.div
                  key={position.institution}
                  variants={item}
                  className="glass-card p-6 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-display text-xl font-bold text-foreground">
                        {position.institution}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {position.role}
                      </p>
                    </div>
                    <span className="badge-highlight text-xs">
                      {position.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {position.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Selected Publications
            </h3>
            <div className="grid gap-4">
              {publications.map((pub, index) => (
                <motion.a
                  key={pub.title}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  className="glass-card p-4 md:p-6 hover:shadow-soft transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                          {pub.category}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          pub.type.includes("Award") || pub.type.includes("Citation")
                            ? "bg-accent/15 text-accent" 
                            : pub.type.includes("Invited")
                            ? "bg-primary/20 text-primary"
                            : "bg-primary/10 text-primary"
                        }`}>
                          {pub.type}
                        </span>
                      </div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {pub.title}
                      </h4>
                      {pub.note && (
                        <p className="text-xs text-accent mt-1 italic">{pub.note}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {pub.venue}
                      </span>
                      <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Research Gallery */}
          <motion.div variants={item} className="mt-16">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Research Gallery
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: "https://i.ibb.co/PsG2dX0Z/neurips.jpg", title: "NeurIPS 2025", desc: "Epidemiology research presentation" },
                { src: "https://i.ibb.co/WNBFXZ1b/scinet1.jpg", title: "SCINet @ ACS", desc: "Research presentation" },
                { src: "https://i.ibb.co/fGvLdZQ8/scinet2.jpg", title: "SCINet @ ACS", desc: "Scientific machine learning talk" },
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
