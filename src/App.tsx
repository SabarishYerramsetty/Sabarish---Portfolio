import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { IntroStatement } from './sections/IntroStatement';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { ClosingQuote } from './sections/ClosingQuote';
import { Footer } from './sections/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="relative bg-[#05060B] min-h-screen">
      <div className="noise-overlay" />
      <Navigation />
      <main className="relative">
        <Hero />
        <IntroStatement />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <ClosingQuote />
        <Footer />
      </main>
      <Toaster 
        position="bottom-right" 
        toastOptions={{ 
          style: { 
            background: '#0B0E14', 
            border: '1px solid rgba(57, 255, 20, 0.3)', 
            color: '#F2F5F9' 
          } 
        }} 
      />
    </div>
  );
}

export default App;
