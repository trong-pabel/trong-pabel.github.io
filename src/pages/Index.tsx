import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { GraduationCap, Award, Heart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import soccerMedal1 from "@/assets/soccer/soccerMedal1.jpg";

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

type GalleryKey = "soccer" | "badminton";

const galleries: Record<GalleryKey, { title: string; images: { src: string; caption?: string }[] }> = {
  soccer: {
    title: "Soccer",
    images: [
      { src: soccerMedal1, caption: "Soccer Tournament Medal" },
      // Add more images as needed
    ],
  },
  badminton: {
    title: "Badminton",
    images: [
      // Add more images as needed
    ],
  },
};

const Index = () => {
  const [activeGallery, setActiveGallery] = useState<GalleryKey | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isModalOpen = activeGallery !== null;

  const openGallery = (key: GalleryKey) => {
    const images = galleries[key].images;
    if (!images || images.length === 0) return; 

    setActiveGallery(key);
    setActiveIndex(0);
  };

  const closeModal = () => {
    setActiveGallery(null);
    setActiveIndex(0);
  };

  const nextImage = () => {
    if (!activeGallery) return;
    const len = galleries[activeGallery].images.length;
    setActiveIndex((i) => (i + 1) % len);
  };

  const prevImage = () => {
    if (!activeGallery) return;
    const len = galleries[activeGallery].images.length;
    setActiveIndex((i) => (i - 1 + len) % len);
  };

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
              <button
                onClick={() => openGallery("soccer")}
                className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                ⚽ Soccer
              </button>
              <button
                onClick={() => openGallery("badminton")}
                className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                🏸 Badminton
              </button>
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

      <AnimatePresence>
        {isModalOpen && activeGallery && galleries[activeGallery].images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative bg-background rounded-xl p-6 shadow-2xl max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Title */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {galleries[activeGallery].title} • {activeIndex + 1}/{galleries[activeGallery].images.length}
                </p>
              </div>

              {/* Image area */}
              <div className="relative">
                {/* Prev */}
                {galleries[activeGallery].images.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border rounded-full w-10 h-10 flex items-center justify-center hover:bg-background transition"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                )}

                <img
                  src={galleries[activeGallery].images[activeIndex].src}
                  alt={`${galleries[activeGallery].title} image ${activeIndex + 1}`}
                  className="rounded-lg w-full max-h-[75vh] object-contain"
                />

                {/* Next */}
                {galleries[activeGallery].images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border rounded-full w-10 h-10 flex items-center justify-center hover:bg-background transition"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                )}
              </div>

              {/* Caption */}
              {galleries[activeGallery].images[activeIndex].caption && (
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  {galleries[activeGallery].images[activeIndex].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
