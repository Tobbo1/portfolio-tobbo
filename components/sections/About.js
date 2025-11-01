import { motion } from 'framer-motion';
import { MapPin, Target } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Section About
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300">
          Cette section sera complétée plus tard.
        </p>
      </div>
    </section>
  );
}