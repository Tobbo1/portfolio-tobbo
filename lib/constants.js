// lib/constants.js
export const SITE_CONFIG = {
  name: "Nyamsi Alex",
  title: "Nyamsi Lemotio Alex Brayen - Software Engineer",
  description: "Software Engineer full-stack passionné par le développement web, mobile et la création de solutions innovantes. Basé à Douala, Cameroun.",
  url: "https://votre-portfolio.com",
  email: "alexnyamsi6@gmail.com",
  location: "Douala, Cameroun",
  social: {
    github: "https://github.com/Tobbo1",
    linkedin: "https://www.linkedin.com/in/alex-nyamsi",
  },
  skills: [
    "HTML/CSS", "JavaScript", "PHP", "C#", "MySQL", "C",
    "React", "Next.js", "Node.js", "Windows Forms", "Git"
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "Pharmacy Management System",
    description: "Système complet de gestion de pharmacie avec gestion des stocks, ventes, et rapports automatisés. Interface intuitive pour une gestion efficace des médicaments et des clients.",
    fullDescription: `
      Développement d'un système desktop complet pour la gestion de pharmacie incluant :
      • Gestion des stocks et inventaire en temps réel
      • Module de vente et facturation
      • Gestion des fournisseurs et des commandes
      • Génération de rapports statistiques
      • Base de données sécurisée avec MySQL
      
      Ce projet m'a permis de maîtriser le développement d'applications desktop avec C# et l'intégration de bases de données complexes.
    `,
    technologies: ["C#", "MySQL", "Windows Forms", "Entity Framework", "Crystal Reports"],
    category: "Desktop Application",
    status: "Complété",
    image: "/images/pharmacy-system.jpg",
    githubLink: "#",
    demoLink: "#",
    features: [
      "Gestion complète des stocks et inventaire",
      "Système de vente et facturation intégré",
      "Base de données relationnelle MySQL",
      "Interface utilisateur intuitive Windows Forms",
      "Rapports automatisés et statistiques"
    ],
    challenges: [
      "Optimisation des performances avec de grandes bases de données",
      "Gestion des transactions simultanées",
      "Création d'une interface utilisateur ergonomique"
    ]
  },
  {
    id: 2,
    title: "Vehicle Management System",
    description: "Application web de gestion de parc automobile avec suivi de maintenance, coûts et localisation des véhicules. Solution complète pour entreprises et particuliers.",
    fullDescription: `
      Conception et développement d'une application web de gestion de véhicules offrant :
      • Suivi complet du parc automobile
      • Planning de maintenance préventive
      • Gestion des coûts et dépenses
      • Historique des réparations
      • Tableaux de bord analytiques
      
      Ce projet a renforcé mes compétences en développement web full-stack et en gestion de projets complexes.
    `,
    technologies: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "Bootstrap"],
    category: "Web Application", 
    status: "Complété",
    image: "/images/vehicle-system.jpg",
    githubLink: "#",
    demoLink: "#",
    features: [
      "Gestion complète du parc véhicules",
      "Planning de maintenance préventive",
      "Suivi des coûts et dépenses",
      "Tableaux de bord analytiques",
      "Interface responsive Bootstrap"
    ],
    challenges: [
      "Architecture MVC robuste",
      "Sécurisation des données sensibles", 
      "Optimisation des requêtes SQL complexes"
    ]
  }
];
