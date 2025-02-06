import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Hero() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background -z-10" />

      <div className="container mx-auto px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Develop Software{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Autonomously
            </span>
          </h1>

          <p className="mt-6 text-xl text-muted-foreground font-normal tracking-tight">
            RA.Aid is an open-source AI assistant that combines research, planning, and implementation
            to help you build software faster and smarter.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#quickstart">Get Started</a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/ai-christianson/RA.Aid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                Star on GitHub
              </a>
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
            <a
              href="https://discord.gg/f6wYbzHYxV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <SiDiscord className="h-6 w-6" />
              <span>Join Discord</span>
            </a>

            <div className="h-4 w-px bg-border" />

            <span className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Apache 2.0 License
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}