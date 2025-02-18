import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src="/assets/logo-white-transparent.gif" 
              alt="RA.Aid Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-base hover:text-primary transition-colors">
            Features
          </a>
          <a href="#quickstart" className="text-base hover:text-primary transition-colors">
            Quick Start
          </a>
          <a href="#community" className="text-base hover:text-primary transition-colors">
            Community
          </a>
          <a 
            href="https://docs.ra-aid.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-primary transition-colors"
          >
            Documentation
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
