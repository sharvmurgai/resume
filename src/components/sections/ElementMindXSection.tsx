import { motion } from "framer-motion";
import {
    Globe,
    ArrowRight,
    ShieldCheck,
    TrendingUp,
    BarChart3,
    Zap,
    FlaskConical,
    Map,
    Network,
    Bot,
    AlertTriangle,
    ExternalLink
} from "lucide-react";

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

export const ElementMindXSection = () => {
    return (
        <section className="min-h-screen pt-24 pb-16 pattern-overlay">
            <div className="section-container">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Header */}
                    <motion.div variants={item} className="text-center mb-16">
                        <span className="badge-gold mb-4 inline-block">
                            <Globe className="w-3 h-3 mr-1 inline" />
                            Supply Chain Intelligence
                        </span>
                        <h2 className="hero-title text-4xl md:text-5xl mb-6">
                            Element<span className="gradient-text-gold">MindX</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                            ML-powered "what-if" simulation platform for critical elements - turning policy shocks into clear before/after trade-flow maps, winners/losers, and resilience insights.
                        </p>
                        <p className="text-primary font-medium">
                            Built for critical chemistry + supply-chain strategy
                        </p>
                    </motion.div>

                    {/* Stat Cards */}
                    <motion.div
                        variants={item}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-6xl mx-auto"
                    >
                        {[
                            { icon: Network, title: "Global Trade Network", desc: "Country-to-country flows across decades of data" },
                            { icon: Zap, title: "Shock Simulator", desc: "Tariffs • export restrictions • outages • bans" },
                            { icon: BarChart3, title: "Replacement Ranking", desc: "Predicts \"who replaces whom\" under disruption (ML)" },
                            { icon: Map, title: "Explainable Outputs", desc: "Maps + route changes + plain-English reasoning" }
                        ].map((stat, idx) => (
                            <div key={idx} className="glass-card p-5 text-center hover:bg-secondary/50 transition-colors">
                                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                <h3 className="font-bold mb-1">{stat.title}</h3>
                                <p className="text-xs text-muted-foreground">{stat.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* About Section */}
                    <motion.div variants={item} className="glass-card p-8 mb-16 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            About ElementMindX
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                ElementMindX is a simulation platform for critical elements and materials that helps decision-makers understand how disruptions ripple through global supply chains. Users describe a scenario - tariffs, export controls, geopolitical shocks, refinery outages - and ElementMindX generates a grounded, data-backed "before vs after" world: which trade routes shrink, where shortages appear, and which suppliers are most likely to absorb diverted demand.
                            </p>
                            <p>
                                ElementMindX combines trade-network data with learned substitution behavior to quantify exposure and resilience. The result is a tool that's rigorous enough for analysis, but clear enough to communicate - pairing numbers and maps with explanations that non-experts can follow.
                            </p>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <a
                                href="https://elementmindx.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-2"
                            >
                                Launch ElementMindX <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Core Features */}
                    <motion.div variants={item} className="mb-16 max-w-6xl mx-auto">
                        <h3 className="text-2xl font-bold mb-8 text-center">Core Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Policy-to-network translation", desc: "Convert real-world scenarios into structured disruptions that the simulator can run." },
                                { title: "Before/After trade-flow visualization", desc: "Interactive world maps + route-level flow views to see reconfiguration at a glance." },
                                { title: "Shortage vs substitution engine", desc: "Separates what can be rerouted from what becomes unmet shortage - capturing real supply-chain stickiness." },
                                { title: "Replacement supplier ranking (ML)", desc: "Predicts the most likely alternative suppliers given incumbency, regional proximity, and global capacity signals." },
                                { title: "Resilience metrics", desc: "Dependency and concentration indicators highlight single points of failure and diversification opportunities." },
                                { title: "Explainable AI assistant", desc: "An embedded assistant explains results step-by-step, answers follow-ups, and can generate additional views on request." }
                            ].map((feature, idx) => (
                                <div key={idx} className="glass-card p-6 hover:bg-secondary/50 transition-colors">
                                    <h4 className="font-bold mb-2 text-primary">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Critical Chemistry Lens */}
                    <motion.div variants={item} className="glass-card p-8 mb-16 max-w-4xl mx-auto overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <FlaskConical className="w-64 h-64 rotate-12" />
                        </div>

                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <FlaskConical className="w-6 h-6 text-primary" />
                            Critical Chemistry Lens
                        </h3>
                        <p className="mb-6 text-muted-foreground font-medium">
                            ElementMindX is built around the chemistry realities that make critical materials hard to substitute:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Form & purity constraints change tradability and substitution (ore vs refined forms vs intermediates).",
                                "Processing chokepoints (refining, separation, alloying) shape where \"usable\" material can actually come from.",
                                "Circularity (scrap and recycling flows) is treated as a first-class pathway, not an afterthought.",
                                "Material-specific behavior: each element's network has distinct stickiness, supplier concentration, and reroute flexibility."
                            ].map((point, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Impact */}
                    <motion.div variants={item} className="mb-16 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-8 text-center">Impact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { target: "For Policy", desc: "Evaluate export controls and tariffs before deployment; identify unintended shortages and concentration risks." },
                                { target: "For Industry", desc: "Stress-test sourcing strategies; quantify exposure to single-country disruptions; prioritize resilience investments." },
                                { target: "For Research", desc: "Explore how materials move like interconnected reactions - local shocks can create global shifts." }
                            ].map((impact, idx) => (
                                <div key={idx} className="glass-card p-6 border-t-4 border-t-primary">
                                    <h4 className="font-bold mb-2">{impact.target}</h4>
                                    <p className="text-sm text-muted-foreground">{impact.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Availability Footer */}
                    <motion.div variants={item} className="text-center pb-8 border-t border-border/50 pt-8 max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Preview Module Available Now
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm">
                            Additional elements rolling out continuously. <a href="mailto:elementmindx@gmail.com" className="text-primary hover:underline">Contact us</a> for more elements.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};
