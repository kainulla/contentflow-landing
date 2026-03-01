import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Platforms from "./components/Platforms";
import VoiceTraining from "./components/VoiceTraining";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-black text-white font-sans">
      <Hero />
      <Problem />
      <HowItWorks />
      <Platforms />
      <VoiceTraining />
      <Waitlist />
      <Footer />
    </main>
  );
}
