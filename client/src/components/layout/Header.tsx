import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-display">
            RA.Aid
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm hover:text-primary transition-colors">
            Features
          </a>
          <a href="#quickstart" className="text-sm hover:text-primary transition-colors">
            Quick Start
          </a>
          <a href="#community" className="text-sm hover:text-primary transition-colors">
            Community
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://discord.gg/f6wYbzHYxV" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <SiDiscord className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a 
              href="https://github.com/ai-christianson/RA.Aid"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}