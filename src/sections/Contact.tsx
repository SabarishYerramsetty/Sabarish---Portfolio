import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Clock, Send, Copy, Check, X } from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showMessage, setShowMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.contact-left'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        scrollTrigger: { 
          trigger: section, 
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        } 
      }
    );

    gsap.fromTo(
      section.querySelector('.contact-right'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        delay: 0.2,
        scrollTrigger: { 
          trigger: section, 
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        } 
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('ysabarish369@gmail.com');
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const composedMessage = `Subject: Portfolio Contact from ${formData.name}

Hi Sabarish,

${formData.message}

Best regards,
${formData.name}
${formData.email}`;

  const copyMessage = () => {
    navigator.clipboard.writeText(composedMessage);
    toast.success('Message copied! Now paste it in your email app.');
  };

  const openGmail = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hi Sabarish,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    window.open(`https://mail.google.com/mail/?view=cm&to=ysabarish369@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section ref={sectionRef} id="contact" className="bg-[#05060B] cyber-grid py-20 lg:py-32 relative z-50">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="contact-left lg:w-2/5">
            <h2 className="font-heading font-bold text-[#F2F5F9] mb-6 text-[clamp(32px,4vw,52px)]">
              Let's work together
            </h2>

            <div className="scanline w-24 mb-6" />

            <p className="text-[#A7B0BC] text-base leading-relaxed mb-10">
              Open to consulting, full-time roles, and security reviews. 
              Let's discuss how I can help secure your systems.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#39FF14]/20 rounded-lg">
                  <Mail className="text-[#39FF14]" size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#A7B0BC] uppercase tracking-wider">Email</p>
                  <a href="mailto:ysabarish369@gmail.com" className="text-[#F2F5F9] hover:text-[#39FF14] transition-colors">
                    ysabarish369@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#39FF14]/20 rounded-lg">
                  <MapPin className="text-[#39FF14]" size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#A7B0BC] uppercase tracking-wider">Location</p>
                  <p className="text-[#F2F5F9]">Warrensburg, MO</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#39FF14]/20 rounded-lg">
                  <Clock className="text-[#39FF14]" size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#A7B0BC] uppercase tracking-wider">Availability</p>
                  <p className="text-[#F2F5F9]">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right lg:w-3/5">
            <div className="cyber-card p-6 lg:p-8">
              {!showMessage ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs text-[#A7B0BC] uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-[#F2F5F9] placeholder:text-[#A7B0BC]/50 focus:border-[#39FF14] focus:outline-none focus:ring-1 focus:ring-[#39FF14] transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#A7B0BC] uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-[#F2F5F9] placeholder:text-[#A7B0BC]/50 focus:border-[#39FF14] focus:outline-none focus:ring-1 focus:ring-[#39FF14] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#A7B0BC] uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#0B0E14] border border-white/10 rounded-lg text-[#F2F5F9] placeholder:text-[#A7B0BC]/50 focus:border-[#39FF14] focus:outline-none focus:ring-1 focus:ring-[#39FF14] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button type="submit" className="w-full cyber-button flex items-center justify-center gap-2">
                    <Send size={16} /> Preview Message
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-[#F2F5F9]">Your Message</h3>
                    <button onClick={() => setShowMessage(false)} className="p-2 text-[#A7B0BC] hover:text-[#39FF14] transition-colors">
                      <X size={18} />
                    </button>
                  </div>

                  <div className="p-4 bg-[#0B0E14] border border-white/10 rounded-lg">
                    <pre className="font-mono text-sm text-[#A7B0BC] whitespace-pre-wrap">{composedMessage}</pre>
                  </div>

                  <div className="space-y-3">
                    <button onClick={copyMessage} className="w-full cyber-button flex items-center justify-center gap-2">
                      <Copy size={16} /> Copy Message
                    </button>

                    <button onClick={openGmail} className="w-full flex items-center justify-center gap-2 py-3 border border-white/10 rounded-lg text-[#F2F5F9] hover:border-[#39FF14] hover:text-[#39FF14] transition-colors">
                      <Mail size={16} /> Open in Gmail
                    </button>

                    <button onClick={copyEmail} className="w-full flex items-center justify-center gap-2 py-3 text-[#A7B0BC] hover:text-[#39FF14] transition-colors">
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? 'Email Copied!' : 'Copy Email Only'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
