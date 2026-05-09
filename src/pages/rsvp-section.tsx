import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Heart } from 'lucide-react';

export function RsvpSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: 'yes',
    dietaryRestrictions: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} id="rsvp" className="py-24 px-4 bg-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-serif">RSVP</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-700 text-lg">
            Please respond by May 1, 2026
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-background p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="attendance" className="block text-sm mb-2 text-gray-700">
              Will you be attending? *
            </label>
            <select
              id="attendance"
              name="attendance"
              required
              value={formData.attendance}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="yes">Joyfully Accept</option>
              <option value="no">Regretfully Decline</option>
            </select>
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm mb-2 text-gray-700">
              Number of Guests *
            </label>
            <select
              id="guests"
              name="guests"
              required
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          <div>
            <label htmlFor="dietaryRestrictions" className="block text-sm mb-2 text-gray-700">
              Dietary Restrictions
            </label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              rows={3}
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Please let us know of any dietary restrictions..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-lg hover:opacity-90 transition-colors text-lg flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <Heart className="w-5 h-5 fill-white" />
                Thank You!
              </>
            ) : (
              'Submit RSVP'
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
