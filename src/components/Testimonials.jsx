import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Wedding Client",
      text: "Angie captured our wedding day beautifully. Every photo tells a story, and we couldn't be happier with the memories she preserved for us.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop"
    },
    {
      name: "Marcus Johnson",
      role: "High School Athletic Director",
      text: "Working with Angie for our sports photography has been incredible. She captures the intensity and emotion of every game perfectly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop"
    },
    {
      name: "Emily Chen",
      role: "Portrait Client",
      text: "I've never felt more confident in front of a camera. Angie made the session relaxed and fun, and the photos turned out stunning.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            What Clients Say
          </h2>
          <div className="w-20 h-1 bg-copper mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
              />
              
              <div className="flex-1 text-center md:text-left">
                <svg className="w-10 h-10 text-copper/30 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-charcoal/80 text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{testimonials[activeIndex].text}"
                </p>
                <div>
                  <p className="font-semibold text-charcoal text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-copper text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-copper w-8' : 'bg-copper/30'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

