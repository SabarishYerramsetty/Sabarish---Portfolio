import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Terminal, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function TerminalTyping({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`inline-block w-2 h-5 bg-[#39FF14] ml-1 transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    gsap.fromTo(
      content.querySelectorAll('.animate-item'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const terminalTexts = ['Threat Hunting...', 'SIEM Monitoring...', 'Incident Response...', 'Risk Assessment...'];

  return (
    <section 
      ref={sectionRef} 
      id="hero" 
      className="min-h-screen bg-[#05060B] cyber-grid flex items-center relative z-10 pt-20 lg:pt-0"
    >
      <div 
        ref={contentRef}
        className="w-full px-6 lg:px-16 py-8 lg:py-0"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          <div className="animate-item w-full max-w-[300px] lg:max-w-[400px] lg:w-[35%]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img 
                src="/hero-portrait.jpg" 
                alt="Sabarish" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05060B]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#05060B]/80" />
            </div>
          </div>

          <div className="animate-item w-full lg:w-[55%] text-center lg:text-left">
            <h1 className="font-heading font-bold text-[#F2F5F9] leading-none mb-4 text-[clamp(40px,8vw,72px)]">
              Sabarish
            </h1>
            
            <div className="scanline w-32 lg:w-48 mx-auto lg:mx-0 mb-6" />
            
            <p className="font-heading font-semibold text-[#39FF14] mb-2 text-[clamp(18px,3vw,28px)]">
              Cybersecurity Analyst
            </p>
            <p className="font-mono text-sm text-[#A7B0BC] uppercase tracking-wider mb-6">
              Based in Warrensburg, MO
            </p>

            <div className="p-4 bg-[#0B0E14]/80 border border-[#39FF14]/30 rounded-lg backdrop-blur-sm mb-6 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={14} className="text-[#39FF14]" />
                <span className="font-mono text-xs text-[#A7B0BC]">sabarish@security:~$</span>
              </div>
              <div className="font-mono text-sm text-[#39FF14] text-left">
                <ChevronRight size={14} className="inline mr-1" />
                <TerminalTyping texts={terminalTexts} />
              </div>
            </div>

            <div className="mb-6">
              <button 
                onClick={scrollToProjects} 
                className="cyber-button group relative overflow-hidden inline-flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#39FF14] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://github.com/SabarishYerramsetty" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-lg bg-white/5 text-[#A7B0BC] hover:bg-[#39FF14]/20 hover:text-[#39FF14] transition-all"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-naga-sabarish-yerramsetty-617013210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-lg bg-white/5 text-[#A7B0BC] hover:bg-[#39FF14]/20 hover:text-[#39FF14] transition-all"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:ysabarish369@gmail.com" 
                className="p-3 rounded-lg bg-white/5 text-[#A7B0BC] hover:bg-[#39FF14]/20 hover:text-[#39FF14] transition-all"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
