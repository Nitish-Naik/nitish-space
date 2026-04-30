import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";

// Import project images
import dashboard1 from "../../public/assets/dashboard1.png";
import dashboard2 from "../../public/assets/dashboard2.png";
import dashboard3 from "../../public/assets/dashboard3.png";
import dashboard4 from "../../public/assets/dashboard4.png";
import dashboard5 from "../../public/assets/dashboard5.png";
import dashboard6 from "../../public/assets/dashboard6.png";
import automationImg from "../../public/assets/project-automation.jpg";
import dataAnalysisImg from "../../public/assets/project-data-analysis.jpg";
import instant0 from "../../public/assets/instant0.png";
import instant00 from "../../public/assets/instant00.png";
import instant1 from "../../public/assets/instantDev1.png";
import instant2 from "../../public/assets/instant2.png";
import instant3 from "../../public/assets/instant3.png";
import instant4 from "../../public/assets/instant4.png";
import instant5 from "../../public/assets/instant5.png";
import instant6 from "../../public/assets/instant6.png";
import instant7 from "../../public/assets/instant7.png";
import instant8 from "../../public/assets/instant8.png";


const ProjectsSection = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const projects = [
    {
      title: "FlowMind AI",
      description: "AI workflow orchestration engine that lets users compose multi-step pipelines from natural-language intent to structured execution.",
      tech: ["Next.js", "Tailwind", "FastAPI", "Redis", "OpenAI"],
      githubUrl: undefined,
      liveUrl: undefined,
      images: [automationImg]
    },
    {
      title: "CalmPilot",
      description: "Real-time user platform with authentication, subscriptions, and low-latency WebSocket-driven UI updates.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "WebSockets"],
      githubUrl: undefined,
      liveUrl: undefined,
      images: [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5, dashboard6]
    },
    {
      title: "LogIQ",
      description: "Distributed logging and AI debugging platform for high-throughput ingestion, search, and root-cause analysis.",
      tech: ["Next.js", "Node.js", "Redis Streams", "PostgreSQL", "OpenAI"],
      githubUrl: undefined,
      liveUrl: undefined,
      images: [instant0, instant00, instant1, instant2, instant3, instant4, instant5, instant6, instant7, instant8]
    },
  ];

  const openGallery = (images: string[]) => {
    setCurrentImages(images);
    setGalleryOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title fade-in">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card group fade-in fade-in-delay-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => openGallery(project.images)}
                  >
                    <ImageIcon className="h-4 w-4 mr-2" />
                    View Gallery
                  </Button>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.images.length > 0 && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => openGallery(project.images)}
                    >
                      <ImageIcon className="h-4 w-4" />
                      View Screenshots
                    </Button>
                  </motion.div>
                )}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Github className="h-4 w-4" />
                      </motion.div>
                      Code
                    </Button>
                  )}
                </motion.div>
                {project.liveUrl && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.div>
                      Demo
                    </Button>
                  </motion.div>
                )} 
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={currentImages}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </section>
  );
};

export default ProjectsSection;
