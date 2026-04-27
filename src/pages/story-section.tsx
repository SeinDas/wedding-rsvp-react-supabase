import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="story" className="py-24 px-4 bg-rose-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-serif">Our Story</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1776266101221-afef1e11d383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3YWxraW5nJTIwdG9nZXRoZXIlMjByb21hbnRpY3xlbnwxfHx8fDE3NzY0MTg1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Emma and James"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-3 text-rose-900">How We Met</h3>
              <p className="text-gray-700 leading-relaxed">
                It was a rainy autumn evening in Seattle when Emma and James first crossed paths at a cozy coffee shop. 
                Both reached for the last cinnamon roll at the same time, and what started as an awkward laugh turned 
                into a three-hour conversation about everything from travel dreams to favorite books.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-3 text-rose-900">The Proposal</h3>
              <p className="text-gray-700 leading-relaxed">
                Five years later, James brought Emma back to that same coffee shop, where he had secretly arranged 
                for the barista to serve them "the last cinnamon roll." As Emma laughed at the sweet gesture, James 
                got down on one knee, and through happy tears, she said yes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-3 text-rose-900">The Journey Ahead</h3>
              <p className="text-gray-700 leading-relaxed">
                Now we're ready to start our greatest adventure yet. We can't wait to celebrate this special day 
                with the people who mean the most to us and begin our forever together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}