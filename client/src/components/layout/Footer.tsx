import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/assets/logo-white-transparent.gif" 
                alt="RA.Aid Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-base text-muted-foreground">
              Open-source autonomous software development assistant powered by AI.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-base">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://docs.ra-aid.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-base">Community</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/ai-christianson/RA.Aid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground hover:text-primary inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/f6wYbzHYxV"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-base text-muted-foreground hover:text-primary inline-flex items-center gap-2"
                >
                  <SiDiscord className="h-4 w-4" />
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-base">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/ai-christianson/RA.Aid/blob/master/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-base text-muted-foreground">
          <p>© {new Date().getFullYear()} AI Christianson. Released under the Apache License 2.0.</p>
        </div>
      </div>
    </footer>
  );
}
