import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Sharv Murgai
            </h3>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3 h-3" />
              Cupertino, CA
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:murgai.sharv@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sharv Murgai. Built with passion for college applications.
          </p>
        </div>
      </div>
    </footer>
  );
};
