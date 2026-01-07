import { motion } from "framer-motion";
import { Briefcase, Calendar, Users } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  period?: string;
  project: string;
  description?: string;
  role: string;
  teamSize: string;
  responsibilities: string[];
  technologies: string[];
  index: number;
}

export const ExperienceCard = ({
  title,
  period,
  project,
  description,
  role,
  teamSize,
  responsibilities,
  technologies,
  index,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative bg-gradient-card rounded-xl border border-border p-6 md:p-8 shadow-card hover:border-primary/30 transition-colors"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-l-xl" />

      <div className="pl-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
          {period && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
          )}
        </div>

        {/* Project name */}
        <div className="flex items-center gap-2 mb-3">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-primary font-medium">Project: {project}</span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        )}

        {/* Role & Team */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
          <span className="text-foreground">{role}</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>Team: {teamSize}</span>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities:</h4>
          <ul className="space-y-1.5">
            {responsibilities.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
