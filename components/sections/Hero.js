import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-900 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nyamsi{' '}
          <span className="text-red-600 dark:text-red-400">Alex</span>
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8 font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer & Creative Developer
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Passionné par la programmation, le design et l'innovation. 
          Je crée des solutions digitales modernes et performantes.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://github.com/Tobbo1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Github className="text-gray-700 dark:text-gray-300" size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/alex-nyamsi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="text-blue-600" size={24} />
          </a>
          <a 
            href="mailto:alexnyamsi6@gmail.com" 
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Mail className="text-red-600" size={24} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToProjects}
          className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}