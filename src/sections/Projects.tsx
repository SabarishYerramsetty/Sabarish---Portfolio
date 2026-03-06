import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Shield, Search, Network, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { 
    icon: Shield, 
    title: 'SIEM Brute Force Detection', 
    tags: ['Windows', 'Splunk', 'Security'], 
    description: 'Simulated brute-force attacks generating Event ID 4625. Built Splunk queries to detect and investigate login anomalies.' 
  },
  { 
    icon: Search, 
    title: 'Malware Detection & Endpoint Monitoring', 
    tags: ['Defender', 'Splunk', 'EICAR'], 
    description: 'Simulated malware (EICAR) and analyzed Event ID 1116 alerts. Configured SIEM log ingestion and performed incident analysis.' 
  },
  { 
    icon: Network, 
    title: 'Network Traffic Analysis & Incident Response', 
    tags: ['Wireshark', 'Splunk', 'PCAP'], 
    description: 'Analyzed PCAP files using Wireshark to detect suspicious network activity. Correlated network traffic with system logs in Splunk.' 
  },
  { 
    icon: Lock, 
    title: 'Network Hardening & Risk Assessment', 
    tags: ['MFA', 'Firewall', 'Compliance'], 
    description: 'Identified weak configurations and recommended MFA and firewall controls. Implemented security best practices.' 
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll('.project-card'),
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
    <section ref={sectionRef} id="projects" className="bg-[#05060B] cyber-grid py-20 lg:py-32 relative z-50">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-[#F2F5F9] mb-4 text-[clamp(32px,4vw,52px)]">
            Projects
          </h2>
          <div className="scanline w-20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="project-card cyber-card p-6 lg:p-8 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#39FF14]/20 rounded-lg group-hover:bg-[#39FF14]/30 transition-colors">
                  <project.icon className="text-[#39FF14]" size={24} />
                </div>
                <ExternalLink className="text-[#A7B0BC] group-hover:text-[#39FF14] transition-colors" size={18} />
              </div>

              <h3 className="font-heading font-semibold text-lg text-[#F2F5F9] mb-3 group-hover:text-[#39FF14] transition-colors">
                {project.title}
              </h3>

              <p className="text-[#A7B0BC] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="font-mono text-xs text-[#39FF14]/70 uppercase tracking-wider px-2 py-1 bg-[#39FF14]/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
