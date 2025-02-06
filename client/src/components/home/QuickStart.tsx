import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const INSTALLATION_STEPS = [
  {
    title: "Install RA.Aid",
    code: "pip install ra-aid",
  },
  {
    title: "Set up API keys",
    code: `# For Anthropic Claude models (recommended)
export ANTHROPIC_API_KEY=your_api_key_here

# For Tavily web search
export TAVILY_API_KEY=your_api_key_here`,
  },
  {
    title: "Start developing",
    code: `# Basic usage
ra-aid -m "Your task or query here"

# Research-only mode
ra-aid -m "Explain the authentication flow" --research-only`,
  },
];

export default function QuickStart() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="install" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="install">Install</TabsTrigger>
          <TabsTrigger value="configure">Configure</TabsTrigger>
          <TabsTrigger value="use">Use</TabsTrigger>
        </TabsList>

        {INSTALLATION_STEPS.map((step, index) => (
          <TabsContent key={index} value={["install", "configure", "use"][index]}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
                  <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{step.code}</code>
                  </pre>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
