import AnimatedSection from "./AnimatedSection";

export default function VoiceTraining() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            It writes like{" "}
            <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
              you.
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
            Feed ContentFlow 5–10 of your past posts. It learns your tone,
            vocabulary, and rhythm — so every generated piece sounds
            authentically yours.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm text-muted font-medium">Voice match: 94%</span>
            </div>
            <blockquote className="text-left text-white/90 italic leading-relaxed">
              "The best frameworks don't constrain creativity — they channel it.
              That's what I learned building products for the past decade."
            </blockquote>
            <p className="text-right text-sm text-muted mt-4">
              — AI-generated from your writing style
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
