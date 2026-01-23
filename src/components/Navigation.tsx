import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "startups", label: "Startup" },
  { id: "media", label: "Media" },
  { id: "awards", label: "Awards" },
  { id: "leadership", label: "Leadership" },
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
    >
      <nav className="section-container flex items-center justify-between h-16">
        <motion.a 
          href="#"
          onClick={() => onTabChange("home")}
          className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          Sharv Murgai
        </motion.a>
        
        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "nav-tab",
                activeTab === tab.id && "active"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        
        <motion.a
          href="mailto:murgai.sharv@gmail.com"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get in Touch
        </motion.a>

        {/* Mobile menu */}
        <MobileNav activeTab={activeTab} onTabChange={onTabChange} />
      </nav>
    </motion.header>
  );
};

const MobileNav = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <div className="md:hidden">
      <select
        value={activeTab}
        onChange={(e) => onTabChange(e.target.value)}
        className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border-none focus:ring-2 focus:ring-primary"
      >
        {tabs.map((tab) => (
          <option key={tab.id} value={tab.id}>
            {tab.label}
          </option>
        ))}
      </select>
    </div>
  );
};
