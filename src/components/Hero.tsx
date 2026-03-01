import { motion } from "framer-motion";

export default function Hero() {
  const scrollToWaitlist = () => {
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.img
        src="/contentflow-landing/logo.svg"
        alt="ContentFlow"
        className="w-14 h-14 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        One Input →{" "}
        <span className="text-accent">
          Every Platform.
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg sm:text-xl text-muted max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        Drop a blog post, video, or podcast — ContentFlow turns it into 30+
        ready-to-publish pieces for every channel.
      </motion.p>

      <motion.button
        onClick={scrollToWaitlist}
        className="mt-10 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full text-lg transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Get Early Access
      </motion.button>
    </section>
  );
}
