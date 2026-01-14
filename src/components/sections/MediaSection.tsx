import { motion } from "framer-motion";
import { Play, ExternalLink, Eye } from "lucide-react";

const videos = [
  {
    title: "ReadEasy Pitch - Imagination in Action",
    description: "Pitching ReadEasy at the Imagination in Action event",
    url: "https://www.youtube.com/watch?v=5NURmCXVRzk",
    thumbnail: "https://img.youtube.com/vi/5NURmCXVRzk/maxresdefault.jpg",
    category: "Pitch",
  },
  {
    title: "ReadEasy Demo",
    description: "Demonstration of ReadEasy's features and capabilities",
    url: "https://www.youtube.com/watch?v=Uwfy2D4Tq5I",
    thumbnail: "https://img.youtube.com/vi/Uwfy2D4Tq5I/maxresdefault.jpg",
    category: "Demo",
  },
  {
    title: "Vizuara Webinar",
    description: "Guest speaker webinar discussing research and innovations",
    url: "https://www.youtube.com/watch?v=bolSp0Dq3p8",
    thumbnail: "https://img.youtube.com/vi/bolSp0Dq3p8/maxresdefault.jpg",
    category: "Webinar",
    views: "3.1K+",
  },
  {
    title: "MIT App Inventor Course - Part 1",
    description: "Educational course on MIT App Inventor development",
    url: "https://www.youtube.com/watch?v=GMtSqM6cLxA",
    thumbnail: "https://img.youtube.com/vi/GMtSqM6cLxA/maxresdefault.jpg",
    category: "Course",
    views: "1K+",
  },
  {
    title: "MIT App Inventor Course - Part 2",
    description: "Continued educational course on MIT App Inventor development",
    url: "https://www.youtube.com/watch?v=3AFb2VSGThg",
    thumbnail: "https://img.youtube.com/vi/3AFb2VSGThg/maxresdefault.jpg",
    category: "Course",
    views: "1.6K+",
  },
];

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
  visible: { opacity: 1, y: 0 },
};

export const MediaSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Media & <span className="text-primary">Presentations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Webinars, courses, and educational content
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {video.description}
                </p>
                {video.views && (
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{video.views} views</span>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
