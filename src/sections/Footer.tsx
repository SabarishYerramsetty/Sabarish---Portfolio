import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      footer.querySelector('.footer-content'),
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        scrollTrigger: { 
          trigger: footer, 
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        } 
      }
    );
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-[#05060B] border-t border-white/5 py-12 lg:py-16 relative z-70">
      <div className="footer-content px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="font-heading font-bold text-2xl text-[#F2F5F9] hover:text-[#39FF14] transition-colors mb-8"
          >
            Sabarish
          </button>

          <nav className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8">
            <button onClick={() => scrollToSection('projects')} className="font-mono text-sm text-[#A7B0BC] hover:text-[#39FF14] transition-colors uppercase tracking-wider">Work</button>
            <button onClick={() => scrollToSection('experience')} className="font-mono text-sm text-[#A7B0BC] hover:text-[#39FF14] transition-colors uppercase tracking-wider">About</button>
            <button onClick={() => scrollToSection('contact')} className="font-mono text-sm text-[#A7B0BC] hover:text-[#39FF14] transition-colors uppercase tracking-wider">Contact</button>
            <a href="https://github.com/SabarishYerramsetty" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#A7B0BC] hover:text-[#39FF14] transition-colors uppercase tracking-wider">GitHub</a>
            <a href="https://www.linkedin.com/in/sai-naga-sabarish-yerramsetty-617013210" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#A7B0BC] hover:text-[#39FF14] transition-colors uppercase tracking-wider">LinkedIn</a>
          </nav>

          <div className="flex items-center gap-6 mb-8">
            <a href="https://github.com/SabarishYerramsetty" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/5 text-[#A7B0BC] hover:bg-[#39FF14]/20 hover:text-[#39FF14] transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sai-naga-sabarish-yerramsetty-617013210" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/5 text-[#A7B0BC] hover:bg-[#39FF14]/20 hover:text-[#39FF14] transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ysabarish369@gmail.com" className="p-3 rounded-lg bg-white/5 text-[#A7B0BC] hover:bg-[#39FF14]/20 hover:text-[#39FF14] transition-all">
              <Mail size={20} />
            </a>
          </div>

          <p className="font-mono text-xs text-[#A7B0BC]/60">
            © {new Date().getFullYear()} Sabarish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
