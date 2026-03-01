import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const platforms = [
  "X Threads",
  "LinkedIn Posts",
  "IG Carousels",
  "TikTok Scripts",
  "Newsletter Snippets",
  "Reddit Posts",
];

export default function Platforms() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            One piece of content.
            <br />
            <span className="text-accent">
              Six platforms.
            </span>
          </h2>
          <p className="text-muted mt-4 mb-12">
            ContentFlow generates native formats for every channel.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((platform, i) => (
            <AnimatedSection key={platform} delay={i * 0.08}>
              <motion.span
                className="inline-block px-6 py-3 rounded-full border border-accent/30 text-white font-medium bg-accent/5 hover:bg-accent/10 hover:border-accent/60 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {platform}
              </motion.span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
