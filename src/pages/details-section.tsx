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
      description: "The ceremony will commence promptly at 4:00 PM. Please arrive 30 minutes early to find your seats and enjoy some pre-ceremony refreshments. The celebration will continue well into the night."
    },
    {
      icon: MapPin,
      title: "Where",
      info: "Sunset Beach Resort",
      description: "1234 Ocean Drive, Santa Barbara, CA. Valet parking is complimentary for all our guests. If you are taking a ride share, please direct them to the West Entrance."
    },
    {
      icon: Clock,
      title: "Schedule",
      info: "Ceremony → Reception → Dancing",
      description: "After the ceremony, join us on the terrace for sunset cocktails at 5:00 PM, followed by dinner in the Grand Ballroom at 6:30 PM, and dancing until midnight."
    }
  ];

  return (
    <section ref={ref} id="details" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-serif">Wedding Details</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="flex flex-col gap-6 mb-16 max-w-4xl mx-auto">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col md:flex-row items-start md:items-center text-left p-8 bg-secondary rounded-xl shadow-sm border border-secondary/50 hover:shadow-md transition-shadow gap-6 md:gap-8"
            >
              <div className="flex-shrink-0 p-4 bg-background rounded-full shadow-sm">
                <detail.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl mb-2 font-serif text-primary">{detail.title}</h3>
                <p className="text-gray-900 font-medium text-lg mb-2">{detail.info}</p>
                <p className="text-gray-600 leading-relaxed">{detail.description}</p>
              </div>
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