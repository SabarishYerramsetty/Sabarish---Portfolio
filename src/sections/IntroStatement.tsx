import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Target, AlertTriangle, FileWarning } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseAreas = [
  { icon: Shield, label: 'SOC Operations', color: '#39FF14' },
  { icon: Target, label: 'Threat Hunting', color: '#00D9FF' },
  { icon: AlertTriangle, label: 'Incident Response', color: '#FF00FF' },
  { icon: FileWarning, label: 'Risk Management', color: '#FFD700' },
];

export function IntroStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll('.intro-item'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1,
        scrollTrigger: { 
          trigger: section, 
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        } 
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#05060B] cyber-grid py-20 lg:py-32 relative z-20">
      <div className="px-6 lg:px-16 max-w-4xl mx-auto text-center">
        <h2 className="intro-item font-heading font-semibold text-[#F2F5F9] leading-tight mb-8 text-[clamp(24px,4vw,48px)]">
          I defend systems through proactive threat hunting, rapid incident response, and strategic risk management.
        </h2>

        <div className="intro-item scanline w-48 mx-auto mb-8" />

        <p className="intro-item font-mono text-sm text-[#A7B0BC] uppercase tracking-wider mb-10">
          Specialized in SOC operations, security policy development, disaster recovery planning, and enterprise threat detection.
        </p>

        <div className="intro-item flex flex-wrap justify-center gap-3">
          {expertiseAreas.map((area) => (
            <div
              key={area.label}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg transition-all hover:scale-105"
              style={{
                borderColor: `${area.color}40`,
                backgroundColor: `${area.color}10`,
              }}
            >
              <area.icon size={16} style={{ color: area.color }} />
              <span className="font-mono text-xs uppercase tracking-wider" style={{ color: area.color }}>
                {area.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
