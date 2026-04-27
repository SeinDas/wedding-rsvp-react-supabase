import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function DetailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const details = [
    {
      icon: Calendar,
      title: "When",
      info: "Saturday, June 15, 2026",
      description: "Ceremony at 4:00 PM"
    },
    {
      icon: MapPin,
      title: "Where",
      info: "Sunset Beach Resort",
      description: "1234 Ocean Drive, Santa Barbara, CA"
    },
    {
      icon: Clock,
      title: "Schedule",
      info: "Ceremony → Reception → Dancing",
      description: "Celebration until midnight"
    }
  ];

  return (
    <section ref={ref} id="details" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-serif">Wedding Details</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 bg-rose-50 rounded-lg"
            >
              <detail.icon className="w-12 h-12 mx-auto mb-4 text-rose-600" />
              <h3 className="text-xl mb-2 text-rose-900">{detail.title}</h3>
              <p className="text-gray-900 mb-2">{detail.info}</p>
              <p className="text-gray-600 text-sm">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1759954644796-0ed43f06715b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjB2ZW51ZSUyMG91dGRvb3J8ZW58MXx8fHwxNzc2MzcyNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Wedding venue"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}