import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";


const ProjectsSection = () => {
  const projects = [
    {
      title: "Distributed Web Scraping Pipeline",
      description: "Python crawling runtime with worker queues, Redis Streams, atomic URL deduplication, exponential-backoff retries, dead-letter queues, JSONL output, and plugin-based crawlers.",
      tech: ["Python", "Redis Streams", "Linux", "Git", "Pytest", "Web Scraping"],
      githubUrl: "https://github.com/Nitish-Naik/Distributed-Web-Scraping-Pipeline",
      liveUrl: undefined
    },
    {
      title: "CDFRS Extension",
      description: "Research toolkit for streaming anomaly detection and adaptive ensembling with PySpark, Kafka producers/consumers, HIGGS/NIDS dataset partitioning, and throughput benchmarking.",
      tech: ["Python", "PySpark", "Kafka", "Anomaly Detection", "Data Streams", "Benchmarking"],
      githubUrl: "https://github.com/Nitish-Naik/CDFRS-Extension",
      liveUrl: undefined
    },
    {
      title: "FlowMind AI",
      description: "AI workflow orchestration engine that lets users compose multi-step pipelines from natural-language intent to structured execution.",
      tech: ["Next.js", "Tailwind", "FastAPI", "Redis", "OpenAI"],
      githubUrl: undefined,
      liveUrl: undefined
    },
    {
      title: "CalmPilot",
      description: "Real-time user platform with authentication, subscriptions, and low-latency WebSocket-driven UI updates.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "WebSockets"],
      githubUrl: undefined,
      liveUrl: undefined
    },
    {
      title: "LogIQ",
      description: "Distributed logging and AI debugging platform for high-throughput ingestion, search, and root-cause analysis.",
      tech: ["Next.js", "Node.js", "Redis Streams", "PostgreSQL", "OpenAI"],
      githubUrl: undefined,
      liveUrl: undefined
    },
  ];

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
    </section>
  );
};

export default ProjectsSection;
