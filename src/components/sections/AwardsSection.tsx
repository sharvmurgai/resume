import { motion } from "framer-motion";
import { Trophy, Medal, Star, Cpu, Calculator, Award, Heart } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const majorAwards = [
  {
    icon: Cpu,
    title: "NVIDIA GPU Award",
    description: "Only High Schooler to win at the American Chemical Society",
    category: "Research",
  },
  {
    icon: Trophy,
    title: "USAAIO Nationals Bronze",
    description: "Nationals Hall of Fame – Top 50 in the country",
    category: "Competition",
  },
  {
    icon: Star,
    title: "NeurIPS 2025 Reviewer",
    description: "Reviewer of top-tier MATH-AI workshop",
    category: "Research",
  },
  {
    icon: Calculator,
    title: "AIME Qualifier",
    description: "Distinction in AMC 12/AMC 10",
    category: "Mathematics",
  },
  {
    icon: Medal,
    title: "Infinity International Math Competition",
    description: "Individual Gold; Team Silver",
    category: "Mathematics",
  },
  {
    icon: Award,
    title: "Best Demo Award",
    description: "IEEE ANTS Exhibition for ReadEasy",
    category: "Innovation",
  },
  {
    icon: Heart,
    title: "Presidential Gold Medal",
    description: "Presidential Service Gold Medal",
    category: "Service",
  },
];

const otherAchievements = [
  "Won Most Innovative Startup Pitch in iStart Valley final Pitch Competition",
  "Attained first place in 5+ hackathons throughout high school",
  "Reviewer of Journal of Reliability Engineering & System Safety (#1 in field)",
  "Reviewer of The Open Public Health Journal",
  "IEEE 2nd International Symposium on Parallel Computing - Reviewer",
];

const academicAchievements = [
  {
    title: "11 IGCSE A*s",
    subjects: "Add. Math, Ext. Math, Physics, Chemistry, Biology, Economics, History, CS, Eng Lit, Eng Lang, Spanish",
  },
  {
    title: "4 AP 5s (11th Grade)",
    subjects: "Calculus BC, Chemistry, Microeconomics, English Language",
  },
  {
    title: "Stanford Pre-Collegiate",
    subjects: "Linear Algebra (102%), Differential Equations (100.4%), Intermediate Mechanics (98%)",
  },
];

export const AwardsSection = () => {
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
              <Trophy className="w-3 h-3 mr-1 inline" />
              Recognition
            </span>
            <h2 className="hero-title text-4xl md:text-5xl mb-4">
              Awards & <span className="gradient-text-gold">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From NVIDIA GPU Awards to Presidential Service Medal – recognition across 
              research, competitions, and service.
            </p>
          </motion.div>

          {/* Major Awards Grid */}
          <motion.div variants={item} className="mb-16">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Major Awards
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorAwards.map((award, index) => (
                <motion.div
                  key={award.title}
                  variants={item}
                  className="glass-card p-5 hover:shadow-glow transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <award.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {award.category}
                      </span>
                      <h4 className="font-display font-bold text-foreground mt-1">
                        {award.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Excellence */}
          <motion.div variants={item} className="mb-16">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Academic Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {academicAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={item}
                  className="glass-card p-5"
                >
                  <h4 className="font-display font-bold text-lg gradient-text mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.subjects}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Achievements */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Other Achievements
            </h3>
            <div className="glass-card p-6">
              <ul className="space-y-3">
                {otherAchievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Awards Gallery */}
          <motion.div variants={item} className="mt-16">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 justify-center">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Awards Gallery
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co/HfGK1xqb/nvidia.jpg"
                  alt="NVIDIA GPU Award at ACS"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold text-lg">NVIDIA GPU Award</h4>
                  <p className="text-sm text-primary-foreground/80">ACS Fall 2025 Conference</p>
                </div>
              </motion.div>

              {/* Instagram post tile */}
              <motion.a
                href="https://www.instagram.com/p/C-sVKkDIdeZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co/0jTPDwcR/download.jpg"
                  alt="TISB Instagram post - Congratulations to the IGCSE class of 2024"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold text-lg">TISB — IGCSE 2024</h4>
                  <p className="text-sm text-primary-foreground/80">Instagram post — Congratulations to the IGCSE class of 2024</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
