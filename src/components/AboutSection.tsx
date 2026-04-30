const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title fade-in">About</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm fade-in fade-in-delay-1">
            <p className="text-lg leading-relaxed text-center">
              I'm a full-stack engineer who ships AI-powered products end-to-end. I design the UI in{" "}
              <span className="font-semibold text-primary">Next.js + React + Tailwind</span>, build backend services in{" "}
              <span className="font-semibold text-primary">Node.js / TypeScript</span>, and integrate LLM workflows into production systems. I care about owning features without handoffs, improving reliability, and delivering measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;