import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  tech: string;
  highlights: string[];
  index: number;
}

export const ProjectCard = ({ name, tech, highlights, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gradient-card rounded-xl border border-border p-6 shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground" />
      </div>

      <p className="text-primary text-sm font-medium mb-4">{tech}</p>

      <ul className="space-y-2">
        {highlights.map((item, i) => (
          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
            <span className="text-primary mt-0.5">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
