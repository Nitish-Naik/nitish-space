import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Go",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
    "WebSockets",
    "Flask",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "MySQL",
    "Supabase",
    "Redis Streams",
    "Kafka",
    "Event-Driven Architecture",
    "Async Processing",
    "Concurrency",
    "Microservices",
    "Selenium",
    "Git",
    "Docker",
    "AWS",
    "CI/CD",
    "GitHub Actions",
    "OpenAI APIs",
    "Prompt Engineering",
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="section-container">
        <h2 className="section-title fade-in">Skills & Proficiency</h2>
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="py-3 px-6 bg-card border border-border rounded-lg shadow-sm font-medium text-foreground text-center min-w-[120px]"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;