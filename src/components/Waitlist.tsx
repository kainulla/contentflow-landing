import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API endpoint (e.g., /api/waitlist)
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Get early access
          </h2>
          <p className="text-muted mb-10">
            Join the waitlist. Be first when we launch.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 px-6 rounded-2xl border border-accent/30 bg-accent/5"
            >
              <p className="text-xl font-semibold text-white">
                You're on the list! 🎉
              </p>
              <p className="text-muted mt-2">
                We'll reach out when it's your turn.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Early Access
              </motion.button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
