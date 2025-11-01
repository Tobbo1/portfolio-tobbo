import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import ProjectCard from '../components/ui/ProjectCard';
import { Code, Database, Palette, Globe } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Pharmacy Management System",
      description: "Système complet de gestion de pharmacie avec inventaire, ventes et gestion des stocks.",
      technologies: ["C#", "MySQL", "Windows Forms", "Entity Framework"],
      category: "Desktop App",
      status: "Complété",
      image: "/images/pharmacy-system.jpg",
      githubLink: "#",
      demoLink: "#",
      features: ["Gestion des stocks", "Ventes et facturation", "Rapports automatisés", "Base de données sécurisée"],
      icon: <Database className="text-green-600" size={24} />
    },
    {
      title: "Vehicle Management System",
      description: "Application web de gestion de parc automobile avec suivi maintenance et localisation.",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
      category: "Web App",
      status: "Complété",
      image: "/images/vehicle-system.jpg",
      githubLink: "#",
      demoLink: "#",
      features: ["Gestion véhicules", "Planning maintenance", "Suivi coûts", "Rapports performance"],
      icon: <Globe className="text-blue-600" size={24} />
    }
  ];

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 80 },
    { name: "C#", level: 75 },
    { name: "MySQL", level: 85 },
    { name: "C", level: 70 }
  ];

  return (
    <>
      <Head>
        <title>Projets - Nyamsi Alex</title>
        <meta name="description" content="Découvrez mes projets de développement et réalisations techniques" />
      </Head>
      
      <Navbar />
      
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Mes <span className="text-red-600 dark:text-red-400">Projets</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Découvrez mes réalisations techniques et mes projets de développement
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Compétences <span className="text-blue-600 dark:text-blue-400">Techniques</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-red-600 dark:text-red-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-red-500 to-blue-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}