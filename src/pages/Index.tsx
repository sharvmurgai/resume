import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { StartupSection } from "@/components/sections/StartupSection";
import { ReadEasySection } from "@/components/sections/ReadEasySection";
import { ElementMindXSection } from "@/components/sections/ElementMindXSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { Footer } from "@/components/Footer";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween" as const,
  ease: "easeInOut" as const,
  duration: 0.3,
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [activeStartup, setActiveStartup] = useState<"readeasy" | "elementmindx" | null>(null);

  const handleSelectStartup = (startup: "readeasy" | "elementmindx") => {
    setActiveStartup(startup);
  };

  const handleBackToStartups = () => {
    setActiveStartup(null);
  };

  const renderSection = () => {
    switch (activeTab) {
      case "home":
        return <HeroSection />;
      case "research":
        return <ResearchSection />;
      case "experience":
        return <ExperienceSection />;
      case "startup":
        if (activeStartup === "readeasy") {
          return <ReadEasySection onBack={handleBackToStartups} />;
        }
        if (activeStartup === "elementmindx") {
          return <ElementMindXSection onBack={handleBackToStartups} />;
        }
        return <StartupSection onSelectStartup={handleSelectStartup} />;
      case "media":
        return <MediaSection />;
      case "awards":
        return <AwardsSection />;
      case "leadership":
        return <LeadershipSection />;
      default:
        return <HeroSection />;
    }
  };

  // Reset startup selection when changing tabs
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab !== "startup") {
      setActiveStartup(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
