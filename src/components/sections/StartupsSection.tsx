import { useState } from "react";
import { motion } from "framer-motion";
import { ReadEasySection } from "./ReadEasySection";
import { ElementMindXSection } from "./ElementMindXSection";
import { ArrowLeft, BookOpen, BrainCircuit, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StartupsSection = () => {
    const [selectedStartup, setSelectedStartup] = useState<"readeasy" | "elementmindx" | null>(null);

    if (selectedStartup === "readeasy") {
        return (
            <div className="relative">
                <div className="fixed top-20 left-4 z-40 md:left-8">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedStartup(null)}
                        className="gap-2 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Startups
                    </Button>
                </div>
                <ReadEasySection />
            </div>
        );
    }

    if (selectedStartup === "elementmindx") {
        return (
            <div className="relative">
                <div className="fixed top-20 left-4 z-40 md:left-8">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedStartup(null)}
                        className="gap-2 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Startups
                    </Button>
                </div>
                <ElementMindXSection />
            </div>
        );
    }

    return (
        <section className="min-h-screen pt-32 pb-16 pattern-overlay">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="badge-gold mb-4 inline-block">
                        Entrepreneurship
                    </span>
                    <h2 className="hero-title text-4xl md:text-5xl mb-6">
                        My <span className="gradient-text-gold">Startups</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Building innovative solutions to solve real-world problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* ReadEasy Card */}
                    <motion.div
                        onClick={() => setSelectedStartup("readeasy")}
                        className="glass-card p-10 cursor-pointer group relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <BookOpen className="w-24 h-24 text-accent/10 -rotate-12 transform group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <BookOpen className="w-12 h-12 text-accent mb-6" />
                        <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">ReadEasy</h3>
                        <p className="text-muted-foreground text-lg mb-6">
                            AI-powered text simplification and readability adaptation platform bridging literacy gaps.
                        </p>
                        <span className="text-accent font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            View Details <div className="i-lucide-arrow-right w-4 h-4" />
                        </span>
                    </motion.div>

                    {/* ElementMindX Card */}
                    <motion.div
                        onClick={() => setSelectedStartup("elementmindx")}
                        className="glass-card p-10 cursor-pointer group relative overflow-hidden h-full flex flex-col"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Globe className="w-24 h-24 text-primary/10 -rotate-12 transform group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <Globe className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">ElementMindX</h3>
                        <p className="text-muted-foreground text-lg mb-6 flex-grow">
                            ML-powered "what-if" simulation platform for critical chemistry elements - turning policy shocks into clear before/after trade-flow maps, winners/losers, and resilience insights.
                        </p>
                        <span className="text-primary font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform mt-auto">
                            View Details <div className="i-lucide-arrow-right w-4 h-4" />
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
