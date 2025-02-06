import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star, GitFork, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function GithubStats() {
  const { data } = useQuery({
    queryKey: ["github-stats"],
    queryFn: async () => {
      const res = await fetch("https://api.github.com/repos/ai-christianson/RA.Aid");
      return res.json();
    }
  });

  const stats = [
    {
      icon: Star,
      label: "Stars",
      value: data?.stargazers_count || "0",
    },
    {
      icon: GitFork,
      label: "Forks",
      value: data?.forks_count || "0",
    },
    {
      icon: Users,
      label: "Contributors",
      value: data?.subscribers_count || "0",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map(({ icon: Icon, label, value }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-secondary/10 border-secondary/20">
            <CardContent className="p-6 flex items-center gap-4">
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="text-2xl font-semibold">{value}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
