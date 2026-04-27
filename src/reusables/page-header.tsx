import { useState, useEffect } from 'react';
import { motion } from 'motion/react';


export function PageHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Story', id: 'story' },
    { label: 'Details', id: 'details' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'RSVP', id: 'rsvp' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className={`font-serif text-xl transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            A Beautiful Celebration
          </motion.button>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm uppercase tracking-wider transition-colors hover:opacity-70 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
