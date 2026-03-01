import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    title: "Drop anything",
    description: "Blog URL, video, podcast, text, PDF — any content you already have.",
    icon: "📥",
  },
  {
    title: "AI multiplies it",
    description: "Extracts themes, generates platform-optimized posts in your voice.",
    icon: "⚡",
  },
  {
    title: "Edit & publish",
    description: "Review, tweak, and schedule everything in one place.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16">
            How it works
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connector line (desktop only) — sits between icon and step label */}
          <div className="hidden md:block absolute top-5 left-[20%] right-[20%] h-px bg-accent/30" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.15}>
              <div className="relative text-center px-4">
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface text-3xl mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
