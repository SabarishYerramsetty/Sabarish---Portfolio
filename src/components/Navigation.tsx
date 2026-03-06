import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#05060B]/90 backdrop-blur-md border-b border-[#39FF14]/30'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-heading font-bold text-xl text-[#F2F5F9] hover:text-[#39FF14] transition-colors"
          >
            Sabarish
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="font-mono text-sm uppercase tracking-wider text-[#A7B0BC] hover:text-[#39FF14] transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="font-mono text-sm uppercase tracking-wider text-[#A7B0BC] hover:text-[#39FF14] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-mono text-sm uppercase tracking-wider text-[#A7B0BC] hover:text-[#39FF14] transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F2F5F9] hover:text-[#39FF14] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#05060B]/98 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="font-heading text-2xl text-[#F2F5F9] hover:text-[#39FF14] transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="font-heading text-2xl text-[#F2F5F9] hover:text-[#39FF14] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-heading text-2xl text-[#F2F5F9] hover:text-[#39FF14] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
