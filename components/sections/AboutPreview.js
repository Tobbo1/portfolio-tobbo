import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Passionné par l'<span className="text-red-600 dark:text-red-400">Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Je suis Nyamsi Lemotio Alex Brayen, un Software Engineer de 19 ans basé à Douala. 
              Passionné par la programmation, le design et l'innovation, je crée des solutions 
              digitales qui allient performance et esthétique.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              En dehors du code, je suis un sportif accompli ayant participé à une Coupe d'Afrique 
              de tchoukball, et j'aspire à créer ma propre entreprise dans le domaine tech.
            </p>
            <motion.a
              href="/about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>En savoir plus</span>
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300">Projets Complets</div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/20 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
            <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Passionné</div>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/20 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-300">Ambition</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}