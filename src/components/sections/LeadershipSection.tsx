import { motion } from "framer-motion";
import { Users, Heart, Code, Lightbulb, GraduationCap, Zap } from "lucide-react";

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

const leadershipRoles = [
  {
    icon: Lightbulb,
    title: "iStart Valley Youth Executive Committee",
    role: "Committee Member",
    period: "June 2023 - Present",
    description: "Promoted entrepreneurship in middle school and high school students, encouraging more students to develop startups.",
    impact: "Won Most Innovative Startup Pitch in final competition",
  },
  {
    icon: GraduationCap,
    title: "Competitive Math Club",
    role: "Co-founder",
    period: "August 2022 - Present",
    description: "Started the first and largest competitive math club at school to increase participation in math competitions.",
    impact: "Sent several students to national math competitions, teaching AMC 10 concepts",
  },
  {
    icon: Heart,
    title: "Pi-Plus Foundation",
    role: "Founder & Organizer",
    period: "January 2024 - Present",
    description: "A student-led organization promoting mathematical development among underprivileged children throughout Bangalore.",
    impact: "Hosted multiple workshops in government schools and competitions",
  },
  {
    icon: Code,
    title: "Cal Commit",
    role: "Python Curriculum Developer",
    period: "June 2022 - March 2023",
    description: "Played a part in the development of the Python Course curriculum for Cal Commit.",
    impact: "Contributed to comprehensive Python education materials",
  },
  {
    icon: Zap,
    title: "VividHacks",
    role: "Organizer & Developer",
    period: "July 2022 - Present",
    description: "Organized and judged projects in hackathons with 200+ participants.",
    impact: "Conducted workshop on introduction to Natural Language Processing (NLP)",
  },
];

export const LeadershipSection = () => {
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
              <Users className="w-3 h-3 mr-1 inline" />
              Leadership
            </span>
            <h2 className="hero-title text-4xl md:text-5xl mb-4">
              Community <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Building communities and empowering others through education, 
              entrepreneurship, and technology.
            </p>
          </motion.div>

          {/* Leadership Cards */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={role.title}
                variants={item}
                className="glass-card p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-display font-bold text-foreground">
                          {role.title}
                        </h4>
                        <p className="text-sm text-primary font-medium">
                          {role.role}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {role.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-accent font-medium">{role.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact summary */}
          <motion.div variants={item} className="mt-16 max-w-3xl mx-auto">
            <div className="glass-card p-6 md:p-8 text-center">
              <h3 className="font-display text-xl font-bold mb-4">Impact Summary</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold font-display gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">Organizations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-display gradient-text">200+</div>
                  <div className="text-sm text-muted-foreground">Students Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-display gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Years Leading</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership Gallery */}
          <motion.div variants={item} className="mt-16">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Community Gallery
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <motion.div 
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co/bG9mR6n/yplus.jpg"
                  alt="Y+ Meetups"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold">Y+ Meetups</h4>
                  <p className="text-sm text-primary-foreground/80">Networking with young innovators</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
