const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title fade-in">About</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm fade-in fade-in-delay-1">
            <p className="text-lg leading-relaxed text-center">
              I'm a full-stack engineer who ships products end-to-end and enjoys the systems side of software:{" "}
              <span className="font-semibold text-primary">data pipelines, queues, distributed scraping, async processing, and reliable backend services</span>. I build interfaces in{" "}
              <span className="font-semibold text-primary">Next.js + React + Tailwind</span>, services in{" "}
              <span className="font-semibold text-primary">Node.js / TypeScript / Python</span>, and data-heavy workflows with{" "}
              <span className="font-semibold text-primary">PostgreSQL, Redis Streams, Linux, and Git</span>. I care about owning features without handoffs, improving reliability, and delivering measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
