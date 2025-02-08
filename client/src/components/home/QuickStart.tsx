import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const INSTALLATION_STEPS = [
  {
    title: "Install RA.Aid",
    code: {
      pip: "pip install ra-aid",
      mac: `brew tap ai-christianson/homebrew-ra-aid
brew install ra-aid`,
    },
  },
  {
    title: "Set up API keys",
    code: `export ANTHROPIC_API_KEY=your_api_key_here
export OPENAI_API_KEY=your_api_key_here # optional, used for expert model o1
export TAVILY_API_KEY=your_api_key_here # optional, used for web research`,
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

        <TabsContent value="install">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">{INSTALLATION_STEPS[0].title}</h3>
                <Tabs defaultValue="pip" className="w-full">
                  <TabsList className="w-full grid grid-cols-2 mb-4">
                    <TabsTrigger value="pip">pip</TabsTrigger>
                    <TabsTrigger value="mac">macOS</TabsTrigger>
                  </TabsList>
                  <TabsContent value="pip">
                    <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{INSTALLATION_STEPS[0].code.pip}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="mac">
                    <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{INSTALLATION_STEPS[0].code.mac}</code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {INSTALLATION_STEPS.slice(1).map((step, index) => (
          <TabsContent key={index + 1} value={["configure", "use"][index]}>
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