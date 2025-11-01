import { motion } from 'framer-motion';
import { Heart, Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-red-400 mb-2">
              Alex<span className="text-blue-400">.dev</span>
            </h3>
            <p className="text-gray-400">
              Software Engineer & Creative Developer
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-2">
              <Mail size={16} />
              <a 
                href="mailto:alexnyamsi6@gmail.com" 
                className="hover:text-red-400 transition-colors duration-300"
              >
                alexnyamsi6@gmail.com
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Douala, Cameroun
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end space-x-1">
              <span>© {currentYear} Fait avec</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>par Nyamsi Alex</span>
            </p>
          </motion.div>

        </div>
        
        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="https://github.com/Tobbo1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/alex-nyamsi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:alexnyamsi6@gmail.com"
            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}