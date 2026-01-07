import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { GraduationCap, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
  { category: "Languages", skills: ["C", "C++", "C#"] },
  { category: "Desktop", skills: ["Windows Desktop"] },
  { category: "Libraries", skills: ["STL", "Boost", "ODA SDK"] },
  { category: "Database", skills: ["SQLite"] },
  { category: "Other", skills: ["Backend–UI Sync", "Debugging", "Test Case Design"] },
];

const experiences = [
  {
    title: "Fresher C/C++ Developer",
    period: "May 2025 – Present",
    project: "ECAD3D",
    description:
      "Windows-based desktop application for 3D electrical control cabinet design, handling design data processing, validation, and synchronization across system components.",
    role: "C++ / C# Software Engineer",
    teamSize: "3 (BA, Developer)",
    responsibilities: [
      "Developed and maintained core C++ logic for multiple modules",
      "Implemented reference design list functionality (loading, validation, merging, updating)",
      "Built CSV and DCX import processing with strict format validation and error handling",
      "Implemented backend–database–UI data synchronization logic",
      "Developed C# UI-related logic to reflect backend data changes",
      "Analyzed specifications, designed test cases, and implemented features",
      "Participated in requirement discussions with stakeholders",
      "Contributed to the on-time release of ECAD3D version 1.0",
    ],
    technologies: ["C++", "C#", "STL", "Boost", "SQLite"],
  },
  {
    title: "C++ Software Engineer",
    project: "VinaCAD",
    role: "C++ Software Engineer",
    teamSize: "8 (Developers, Testers)",
    responsibilities: [
      "Developed CAD commands using C/C++ in a command-based architecture",
      "Implemented drawing annotation features (DIM, Revision Cloud)",
      "Handled command execution flow and user interactions",
      "Created reusable helper modules for CAD commands",
      "Debugged and stabilized existing command logic",
    ],
    technologies: ["C", "C++", "ODA", "CAD Command Framework"],
  },
];

const projects = [
  {
    name: "Ecommerce Website",
    tech: "ASP.NET MVC, VNPay",
    githubUrl: "https://github.com/trong-pabel/Ecommerce",
    highlights: [
      "Product, cart, and order management",
      "VNPay payment integration",
      "Checkout and payment status handling",
    ],
  },
  {
    name: "Shoe Sales Software",
    tech: "C#, SQL Server",
    githubUrl: "https://github.com/trong-pabel/QL_CUAHANG",
    highlights: [
      "Cart, invoicing, payment, employee management",
      "Database design and CRUD implementation",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fresher C++ Software Engineer with over one year of experience in
            desktop application development. Seeking to grow in large-scale
            software systems with a strong focus on code quality,
            maintainability, and structured development processes.
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills" className="bg-secondary/20">
        <div className="space-y-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-primary mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.project} {...exp} index={index} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" className="bg-secondary/20">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-card rounded-xl border border-border p-6 shadow-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">Education</h3>
            </div>
            <p className="text-foreground font-medium">
              Da Nang University of Technology (DUT)
            </p>
            <p className="text-muted-foreground text-sm">
              Information Technology – Information Security
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-card rounded-xl border border-border p-6 shadow-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">Certifications</h3>
            </div>
            <p className="text-foreground font-medium">TOEIC 650</p>
            <p className="text-muted-foreground text-sm">
              English proficiency certification
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-card rounded-xl border border-border p-6 shadow-card md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm">
                ⚽ Soccer
              </span>
              <span className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm">
                🏸 Badminton
              </span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            © Nguyen Huu Trong — Fresher C/C++ Software Engineer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
