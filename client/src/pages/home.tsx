import { Brain, Code, GitMerge, Maximize, PenTool, Search } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { Github } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CopyCommand from "@/components/home/CopyCommand";
import FeatureCard from "@/components/home/FeatureCard";
import GithubStats from "@/components/home/GithubStats";
import QuickStart from "@/components/home/QuickStart";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Planning",
    description: "Breaks down complex tasks into manageable steps with intelligent planning and execution strategies.",
  },
  {
    icon: Search,
    title: "Smart Research",
    description: "Leverages web search and documentation analysis to gather context and best practices.",
  },
  {
    icon: Code,
    title: "Autonomous Coding",
    description: "Implements solutions across multiple files while maintaining code quality and consistency.",
  },
  {
    icon: GitMerge,
    title: "Version Control",
    description: "Built-in support for Git operations and repository management with safe execution.",
  },
  {
    icon: PenTool,
    title: "Custom Commands",
    description: "Flexible command-line interface with support for various AI providers and models.",
  },
  {
    icon: Maximize,
    title: "Extensible",
    description: "Open-source architecture that's easy to extend and customize for your needs.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Install Command */}
        <section className="py-20 border-t bg-secondary/5">
          <div className="container mx-auto px-4">
            <CopyCommand />
          </div>
        </section>

        {/* GitHub Stats */}
        <section className="py-20 border-t">
          <div className="container mx-auto px-4">
            <GithubStats />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 border-t bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold">Powerful Features</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to develop software autonomously, powered by state-of-the-art AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="py-20 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold">Quick Start Guide</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get up and running with RA.Aid in minutes.
              </p>
            </div>

            <QuickStart />
          </div>
        </section>

        {/* Community */}
        <section id="community" className="py-20 border-t bg-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with other developers, get help, and contribute to the future of autonomous development.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://discord.gg/your-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors"
                >
                  <SiDiscord className="h-5 w-5" />
                  Join Discord
                </a>

                <a
                  href="https://github.com/ai-christianson/RA.Aid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  Contribute on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}