import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="text-red-500" size={32} />,
      title: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      icon: <Server className="text-blue-500" size={32} />,
      title: "Backend", 
      skills: ["PHP", "C#", "Node.js", "Express", "MySQL"]
    },
    {
      icon: <Smartphone className="text-green-500" size={32} />,
      title: "Mobile & Desktop",
      skills: ["Windows Forms", "Applications Desktop", "Responsive Design"]
    },
    {
      icon: <Database className="text-purple-500" size={32} />,
      title: "Base de Données",
      skills: ["MySQL", "Database Design", "SQL Optimization"]
    },
    {
      icon: <Palette className="text-pink-500" size={32} />,
      title: "Design",
      skills: ["UI/UX Design", "Graphic Design", "Prototyping"]
    },
    {
      icon: <GitBranch className="text-orange-500" size={32} />,
      title: "Outils",
      skills: ["Git", "VS Code", "Figma", "Postman"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Mes <span className="text-red-600 dark:text-red-400">Compétences</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un éventail de technologies et d'outils que je maîtrise pour créer des solutions complètes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}