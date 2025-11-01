import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import { MapPin, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <>
      <Head>
        <title>À Propos - Nyamsi Alex</title>
        <meta name="description" content="Découvrez mon parcours, mes passions et mes ambitions" />
      </Head>
      
      <Navbar />
      
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              À Propos de <span className="text-red-600 dark:text-red-400">Moi</span>
            </motion.h1>
            
            <motion.div
              className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Mon Parcours
                </h2>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Je m'appelle <strong>Nyamsi Lemotio Alex Brayen</strong>, j'ai 19 ans et je vis à Douala, Cameroun.
                  </p>
                  
                  <p>
                    Je suis étudiant en informatique, passionné par la programmation depuis mon plus jeune âge. 
                    Mon intérêt pour la technologie va au-delà du simple code - j'aime créer des expériences 
                    digitales qui marient beauté et fonctionnalité.
                  </p>
                  
                  <p>
                    En dehors du développement, je suis un sportif passionné. J'ai d'ailleurs participé à une 
                    <strong> Coupe d'Afrique de tchoukball</strong>, une expérience qui m'a enseigné la discipline, 
                    le travail d'équipe et la persévérance.
                  </p>
                  
                  <p>
                    Curieux et très dynamique, je consacre mon temps libre à apprendre de nouvelles technologies, 
                    écouter de la musique et créer des designs innovants.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 mb-2">
                      <MapPin size={20} />
                      <span className="font-semibold">Localisation</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Douala, Cameroun<br />
                      Bepanda Bonabo
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                      <Target size={20} />
                      <span className="font-semibold">Ambition</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Créer ma propre entreprise dans le domaine tech
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image/Stats Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Passion Cards */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Mes Passions
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="text-red-600 dark:text-red-400" size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sport</span>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Musique</span>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="text-green-600 dark:text-green-400" size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Design</span>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="text-purple-600 dark:text-purple-400" size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Innovation</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-red-500 to-blue-600 p-6 rounded-xl text-white">
                  <blockquote className="text-lg italic text-center">
                    "Motivé et ambitieux, je transforme mes rêves en réalité grâce au code et à l'innovation."
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}