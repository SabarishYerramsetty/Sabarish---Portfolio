import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  { degree: "Master's in Cybersecurity", school: 'University of Central Missouri', details: 'GPA: 3.5', icon: GraduationCap },
  { degree: 'B.Tech Computer Science', school: 'Vellore Institute of Technology', details: 'GPA: 3.10', icon: BookOpen },
];

const certifications = [
  { name: 'CompTIA Security+ (SY0-701)', year: '2026' },
  { name: 'Google Cybersecurity Professional Certificate', year: '' },
  { name: 'AWS Certified Cloud Practitioner', year: '' },
];

const achievements = [
  'IEEE Research Publication',
  'Journal Publication',
  'Organized 4 technical events as club secretary'
];

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.edu-left'),
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
      section.querySelector('.edu-right'),
      { x: 50, opacity: 0 },
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
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#05060B] cyber-grid py-20 lg:py-32 relative z-50">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="edu-left lg:w-1/2">
            <h2 className="font-heading font-bold text-[#F2F5F9] mb-8 text-[clamp(28px,3.5vw,44px)]">
              Education
            </h2>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="cyber-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#39FF14]/20 rounded-lg flex-shrink-0">
                      <edu.icon className="text-[#39FF14]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-[#F2F5F9]">
                        {edu.degree}
                      </h3>
                      <p className="font-mono text-sm text-[#39FF14] mt-1">
                        {edu.school}
                      </p>
                      <p className="font-mono text-xs text-[#A7B0BC] mt-1">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="edu-right lg:w-1/2">
            <h2 className="font-heading font-bold text-[#F2F5F9] mb-8 text-[clamp(28px,3.5vw,44px)]">
              Certifications
            </h2>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div className="flex items-center gap-3 p-4 border border-white/5 rounded-lg hover:border-[#39FF14]/50 transition-colors">
                  <Award className="text-[#39FF14] flex-shrink-0" size={18} />
                  <div>
                    <p className="font-mono text-sm text-[#F2F5F9]">
                      {cert.name}
                    </p>
                    {cert.year && (
                      <p className="font-mono text-xs text-[#A7B0BC]">
                        {cert.year}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-mono text-sm text-[#39FF14] uppercase tracking-wider mb-4">
                Achievements
              </h3>
              <ul className="space-y-2">
                {achievements.map((achievement) => (
                  <li className="text-[#A7B0BC] text-sm flex items-start gap-2">
                    <span className="text-[#39FF14] mt-1 flex-shrink-0">›</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
