import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function CopyCommand() {
  const [copied, setCopied] = useState(false);
  const command = "pip install ra-aid";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative group"
      >
        <div className="bg-secondary/50 border rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <code>{command}</code>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </motion.div>
      
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Requires Python 3.8+ and pip installed
      </p>
    </div>
  );
}
