import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-block px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium border border-border hover:border-primary/50 transition-colors cursor-default"
    >
      {skill}
    </motion.span>
  );
};
