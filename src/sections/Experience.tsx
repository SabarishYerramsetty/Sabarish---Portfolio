import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { 
    title: 'Security Analyst', 
    company: 'Facilities Planning & Operations, University of Central Missouri', 
    period: 'Dec 2024 – Present', 
    description: [
      'Performed internal security assessments identifying vulnerabilities and misconfigurations.',
      'Monitored infrastructure risks and supported incident investigation.',
      'Implemented security controls improving system protection and compliance.'
    ] 
  },
  { 
    title: 'Cyber Threat Intelligence & Hunting (SIEM)', 
    company: 'SmartInternz', 
    period: 'May 2023 – Jul 2023', 
    description: [
      'Discovered 15+ vulnerabilities during web penetration testing.',
      'Investigated simulated incidents using IBM QRadar SIEM.'
    ] 
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.exp-left'),
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        scrollTrigger: { 
          trigger: section, 
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        } 
      }
    );

    gsap.fromTo(
      section.querySelectorAll('.exp-card'),
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        stagger: 0.15,
        scrollTrigger: { 
          trigger: section, 
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        } 
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="bg-[#05060B] cyber-grid py-20 lg:py-32 relative z-40">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="exp-left lg:w-1/3">
            <h2 className="font-heading font-bold text-[#F2F5F9] mb-6 text-[clamp(32px,4vw,52px)]">
              Experience
            </h2>
            <div className="scanline w-24 mb-6" />
            <p className="text-[#A7B0BC] text-base leading-relaxed mb-8">
              A mix of security engineering, threat detection, and cloud hardening. 
              Hands-on experience with SIEM monitoring, vulnerability assessment, and incident response.
            </p>
            <a 
              href="./Sabarish-Resume.pdf" 
              download="Sabarish-Resume.pdf" 
              className="inline-flex items-center gap-2 cyber-button"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-6">
            {experiences.map((exp) => (
              <div key={exp.title} className="exp-card cyber-card p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#39FF14]/20 rounded-lg flex-shrink-0">
                    <Briefcase className="text-[#39FF14]" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-[#F2F5F9]">
                      {exp.title}
                    </h3>
                    <p className="font-mono text-sm text-[#39FF14] mt-1">
                      {exp.company}
                    </p>
                    <p className="font-mono text-xs text-[#A7B0BC] mt-1 uppercase tracking-wider">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 ml-0 lg:ml-14">
                  {exp.description.map((item) => (
                    <li className="text-[#A7B0BC] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[#39FF14] mt-1 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
