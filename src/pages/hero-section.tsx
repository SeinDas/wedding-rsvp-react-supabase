import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useRef } from 'react';


export function HeroSection() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1765292783735-9ec7213b1df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNlcmVtb255JTIwY291cGxlfGVufDF8fHx8MTc3NjQxODU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wedding ceremony"  
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Heart className="w-12 h-12 mx-auto mb-8 fill-white" />
        </motion.div>
        
        <motion.h1
          className="text-6xl md:text-8xl mb-6 font-serif"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Output the heading here */}
          A Beautiful Celebration
        </motion.h1>
        
        <motion.div
          className="text-xl md:text-2xl mb-8 tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Output the date here */}
          December 31, 2026
        </motion.div>
        
        <motion.p
          className="text-lg md:text-xl opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Output the motto here */}
          Two hearts, one journey.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#rsvp"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            RSVP Now
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white opacity-70"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}