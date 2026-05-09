import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sponsors = [
    {
      name: "Grand Ballroom Events",
      tier: "Platinum Sponsor",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=200&fit=crop",
      description: "Premium event venue and catering services"
    },
    {
      name: "Elegant Florals",
      tier: "Gold Sponsor",
      logo: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=200&fit=crop",
      description: "Luxury floral arrangements and design"
    },
    {
      name: "Dream Photography",
      tier: "Gold Sponsor",
      logo: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=200&fit=crop",
      description: "Professional wedding photography and videography"
    },
    {
      name: "Sweet Moments Bakery",
      tier: "Silver Sponsor",
      logo: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=200&fit=crop",
      description: "Custom wedding cakes and desserts"
    },
    {
      name: "Harmony Strings",
      tier: "Silver Sponsor",
      logo: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=200&fit=crop",
      description: "Live music and entertainment"
    },
    {
      name: "Perfect Day Planners",
      tier: "Silver Sponsor",
      logo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=200&fit=crop",
      description: "Wedding planning and coordination"
    }
  ];

  const getTierColor = (tier: string) => {
    if (tier.includes("Platinum")) return "text-primary border-primary";
    if (tier.includes("Gold")) return "text-accent border-accent";
    return "text-muted-foreground border-border";
  };

  return (
    <section ref={ref} id="sponsors" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-serif">Our Sponsors</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We're grateful to our amazing sponsors who helped make this special day possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-secondary p-8 rounded-lg border-2 ${getTierColor(sponsor.tier)} hover:shadow-lg transition-shadow`}
            >
              <div className="relative h-32 mb-6 bg-background rounded-lg overflow-hidden">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`text-xs uppercase tracking-wider ${getTierColor(sponsor.tier)} block mb-2`}>
                {sponsor.tier}
              </span>
              <h3 className="text-xl mb-3 text-primary">{sponsor.name}</h3>
              <p className="text-gray-600 text-sm">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-sm">
            Interested in sponsoring our event?{' '}
            <a href="#rsvp" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
