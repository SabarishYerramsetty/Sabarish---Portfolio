import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, ShieldAlert, FileSearch, Scale, ClipboardCheck, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Target, title: 'Threat Hunting', description: 'Proactive threat detection using behavioral analysis, IOC sweeps, and hypothesis-driven hunting.', tools: 'Splunk, Elastic, Sigma, YARA', proficiency: 85, color: '#39FF14' },
  { icon: ShieldAlert, title: 'SOC Operations', description: 'SIEM monitoring, alert triage, incident escalation, and 24/7 security operations center workflows.', tools: 'QRadar, Splunk ES, ServiceNow', proficiency: 90, color: '#00D9FF' },
  { icon: FileSearch, title: 'Incident Response', description: 'Rapid containment, forensic analysis, malware investigation, and post-incident recovery.', tools: 'Wireshark, Volatility, Autopsy', proficiency: 80, color: '#FF00FF' },
  { icon: Scale, title: 'Risk Management', description: 'Risk assessment, vulnerability management, threat modeling, and security control evaluation.', tools: 'Nessus, OpenVAS, NIST RMF', proficiency: 75, color: '#FFD700' },
  { icon: ClipboardCheck, title: 'Security Policy', description: 'Policy development, compliance frameworks, security standards implementation, and governance.', tools: 'NIST, ISO 27001, PCI DSS', proficiency: 70, color: '#FF6B35' },
  { icon: AlertTriangle, title: 'Disaster Recovery', description: 'Business continuity planning, backup strategies, DR testing, and crisis management protocols.', tools: 'Veeam, AWS DR, Azure Site Recovery', proficiency: 65, color: '#9D4EDD' },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll('.skill-card'),
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
    <section ref={sectionRef} className="bg-[#05060B] cyber-grid py-20 lg:py-32 relative z-30">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <p className="font-mono text-sm text-[#39FF14] uppercase tracking-[0.15em] text-center mb-12">
          Core Competencies
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.title} 
              className="skill-card cyber-card p-6 group cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="p-3 rounded-lg transition-all" 
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon size={24} style={{ color: skill.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg text-[#F2F5F9] mb-1 group-hover:text-[#39FF14] transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-[#A7B0BC] text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-xs text-[#A7B0BC] uppercase">Proficiency</span>
                  <span className="font-mono text-sm font-bold" style={{ color: skill.color }}>
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${skill.proficiency}%`, backgroundColor: skill.color }} 
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.tools.split(', ').map((tool) => (
                  <span 
                    key={tool} 
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                    style={{ 
                      backgroundColor: `${skill.color}15`, 
                      color: skill.color, 
                      border: `1px solid ${skill.color}30` 
                    }}
                  >
                    {tool}
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
