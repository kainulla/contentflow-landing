import AnimatedSection from "./AnimatedSection";

const competitors = ["Taplio", "Typefully", "OpusClip", "Buffer"];

export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            You know you should post everywhere.
            <br />
            <span className="text-muted">You don't have time.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {competitors.map((name) => (
              <span
                key={name}
                className="px-5 py-2.5 rounded-full border border-white/10 text-muted line-through decoration-red-500/70 decoration-2"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="mt-6 text-muted">
            4 tools, 4 subscriptions, still manual work.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-10 text-xl sm:text-2xl font-semibold">
            <span className="text-accent">
              ContentFlow
            </span>
            : one tool, one price.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
