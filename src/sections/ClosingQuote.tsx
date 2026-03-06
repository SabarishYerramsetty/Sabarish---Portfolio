import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ClosingQuote() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll('.quote-item'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.15,
        scrollTrigger: { 
          trigger: section, 
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        } 
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#05060B] cyber-grid py-20 lg:py-32 relative z-60">
      <div className="px-6 lg:px-16 max-w-4xl mx-auto text-center">
        <p className="quote-item font-mono text-sm text-[#39FF14] mb-6 uppercase tracking-wider">
          — Sabarish
        </p>
        
        <div className="quote-item scanline w-40 mx-auto mb-8" />
        
        <h2 className="quote-item font-heading font-semibold text-[#F2F5F9] leading-tight text-[clamp(24px,5vw,48px)]">
          "Security isn't a feature. It's a habit."
        </h2>
      </div>
    </section>
  );
}
