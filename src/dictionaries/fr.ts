// src/dictionaries/fr.ts

export const fr = {

  common: {
    topbar: "Étudiante en Génie Informatique · ENSPY Yaoundé",
  },
  contact: {
    invitation: "Ouverte aux opportunités de stage, collaboration sur des projets innovants, ou tout échange autour du développement web, mobile et de l'intelligence artificielle.",
    email: "tchaweuc@gmail.com",
    button: "Dites Bonjour !",
  },

  about: {
    paragraph1: "Étudiante en génie informatique à l'École Nationale Supérieure Polytechnique de Yaoundé (ENSPY), je suis passionnée par l'utilisation des technologies innovantes pour résoudre des problèmes réels et contribuer au progrès technologique.",
    paragraph2: "Mon parcours mêle développement web & mobile (React Native, Next.js, Spring Boot), tests logiciels et leadership associatif. J'ai eu l'opportunité de développer une application mobile d'analyse d'images chez ENEO Douala, et je m'engage activement dans des associations étudiantes comme l'AFENSPY.",
  },

  experience: {
    'icorp': {
      title: "Stagiaire — Support Informatique",
      company: "ENEO Douala",
      description: "Développement d'une application mobile d'analyse d'images pour la lecture automatique de compteurs électriques, en combinant vision par ordinateur et traitement d'images."
    },
    'cenadi': {
      title: "Stagiaire — Introduction aux Tests Logiciels",
      company: "Formation pratique",
      description: "Apprentissage des techniques de tests automatisés et manuels avec Selenium et Cucumber. Mise en place de pipelines de tests et rédaction de scénarios BDD."
    },
    'decatechs': {
      title: "",
      company: "",
      description: ""
    }
  },

  metadata: {
    title: "Charline Brenda Yamenjeu — Génie Informatique",
    description: "Portfolio de Yamenjeu Tchaweu Charline Brenda, étudiante ingénieure à l'ENSPY spécialisée en développement web, mobile et IA.",
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },

  hero: {
    title: "YAMENJEU TCHAWEU CHARLINE BRENDA",
    subtitle_1: "Étudiante en Génie Informatique & Développement Web/Mobile",
    tagline: "Passionnée par l'utilisation des technologies innovantes pour résoudre des problèmes réels. Je conçois des solutions alliant développement web, mobile et intelligence artificielle.",
    download_cv: "Télécharger le CV",
    project_link: "Découvrir mes projets",
  },

  sectionTitles: {
    about: "À Propos de Moi",
    skills: "Compétences Techniques",
    projects: "Projets Phares",
    leadership: "Leadership & Engagement",
    education: "Formation",
    certifications: "Certifications",
    contact: "Me Contacter",
    experience: "Expériences",
  },

  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "IA & Data",
    databases: "Bases de Données",
    tools_methods: "Outils & Méthodes",
  },

  leadership: {
    'club-gi': {
      role: "Vice-Présidente",
      organization: "AFENSPY (Association des Filles de l'ENSPY)",
      descriptionPoints: [
        "Contribution à la coordination des activités de l'association et participation à la définition des orientations stratégiques.",
        "Secrétaire Générale (2024–2025) : gestion de projets et facilitation de la communication au sein de l'équipe.",
        "Coordinatrice de Projets à l'ASPY (2024–2025) : résolution de problèmes et mise en œuvre de solutions innovantes.",
      ],
    },
  },

  education: {
    'engineering-degree': {
      degree: "Génie Informatique",
      institution: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
      details: "Mathématiques & Physique · Université de Yaoundé I",
      status: "En cours · 2022 – 2027",
    },
    'bachelor-maths': {
      degree: "GCE Advanced Level",
      institution: "GBHS Nkol-Eton",
      details: "Résultats : 5A / 5A",
      status: "Obtenu · 2021 – 2022",
    },
  },

  certifications: {
    'java-epfl': {
      title: "Certification en Leadership John C. Maxwell",
      institution: "Beyond Success · Equip Cameroon — Novembre 2024",
    },
    'web-dev-ucdavis': {
      title: "Introduction aux Tests Logiciels",
      institution: "Stage pratique — Fév – Juin 2025",
    },
    'c-dartmouth': {
      title: "Support Informatique & Analyse d'Images",
      institution: "ENEO Douala — Juil – Août 2025",
    },
  },

  projects: {
    'pynfi': {
      title: "Harmony Gloves",
      shortDescription: "Gants intelligents pour la communication des personnes sourdes et muettes.",
      problem: "Absence d'outils accessibles de communication en temps réel pour les personnes sourdes et muettes.",
      role: "Conceptrice et Développeuse.",
      solution: "Gants électroniques intelligents qui traduisent les gestes des mains en parole ou en texte en temps réel.",
      features: ["Reconnaissance de gestes", "Synthèse vocale", "Traitement temps réel", "Dispositif portable"],
      architecture: "Système embarqué combiné à une application mobile.",
      challenges: "Atteindre une reconnaissance fiable des gestes en temps réel avec une faible latence.",
      results: "Prototype fonctionnel démontré.",
      perspectives: "Enrichir le vocabulaire gestuel et améliorer la précision avec le deep learning."
    },
    'ima-platform': {
      title: "Système de Recommandation par Émotions",
      shortDescription: "Analyse les sentiments pour fournir des suggestions personnalisées.",
      problem: "Recommandations génériques qui ne s'adaptent pas à l'état émotionnel de l'utilisateur.",
      role: "Conceptrice et Développeuse.",
      solution: "Système qui détecte les émotions de l'utilisateur et recommande films, produits ou musique en conséquence.",
      features: ["Analyse de sentiments", "Recommandations personnalisées", "Multi-catégories"],
      architecture: "Backend Python ML avec interface web.",
      challenges: "Détection précise des émotions à partir de signaux d'entrée limités.",
      results: "Prototype fonctionnel avec plusieurs catégories de recommandations.",
      perspectives: "Intégration de la reconnaissance faciale pour une détection plus riche."
    },
    'transens': {
      title: "App Lecture Compteurs ENEO",
      shortDescription: "Application mobile de lecture automatique de compteurs électriques.",
      problem: "Processus manuel et source d'erreurs pour la lecture des compteurs à grande échelle.",
      role: "Développeuse Stagiaire chez ENEO Douala.",
      solution: "Application mobile utilisant la vision par ordinateur pour lire automatiquement les compteurs électriques.",
      features: ["Capture d'image", "OCR / vision par ordinateur", "Validation des résultats", "Mobile-first"],
      architecture: "Frontend React Native avec backend de traitement d'images.",
      challenges: "Gérer les variations de luminosité et les différents formats de compteurs.",
      results: "Livré lors du stage chez ENEO Douala.",
      perspectives: "Déploiement à grande échelle sur le réseau ENEO."
    },
    'ai-tax-assistant': {
      title: "UM2Code",
      shortDescription: "Génère automatiquement du code source à partir de diagrammes UML.",
      problem: "Traduction manuelle répétitive et chronophage des diagrammes UML en code.",
      solution: "Application qui analyse les diagrammes UML et génère le code source correspondant automatiquement.",
      features: ["Analyse UML", "Génération de code", "Support multi-langages"]
    },
    'blog-website': {
      title: "Portfolio v1",
      shortDescription: "Première version de mon portfolio personnel.",
      solution: "Vitrine web présentant mes compétences et projets."
    },
    'learn-laravel': {
      title: "",
      shortDescription: "",
      solution: ""
    },
    'snake-game': {
      title: "",
      shortDescription: "",
      solution: ""
    },
    'portfolio-v2': {
      title: "Portfolio v2.0",
      shortDescription: "Ce site : ma vitrine ingénieure.",
      solution: "Architecture modulaire avec support multilingue."
    },
    'portfolio-v1': {
      title: "",
      shortDescription: "",
      solution: ""
    }
  },
};
