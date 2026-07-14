// src/dictionaries/en.ts

export const en = {
  common: {
    topbar: "Computer Engineering Student · ENSPY Yaoundé",
  },
  contact: {
    invitation: "Open to internship opportunities, collaboration on innovative projects, or any exchange around web, mobile development and AI. Feel free to reach out!",
    email: "tchaweuc@gmail.com",
    button: "Say Hello!",
  },

  about: {
    paragraph1: "Computer engineering student at the National Advanced School of Engineering of Yaoundé (ENSPY), I am passionate about using innovative technologies to solve real problems and contribute to technological progress.",
    paragraph2: "My background combines web & mobile development (React Native, Next.js, Spring Boot), software testing and student leadership. I had the opportunity to develop a mobile image analysis application at ENEO Douala, and I am actively engaged in student associations such as AFENSPY.",
  },

  experience: {
    'icorp': {
      title: "Intern — IT Support",
      company: "ENEO Douala",
      description: "Development of a mobile application for image analysis to automatically read electric meters, combining computer vision and image processing."
    },
    'cenadi': {
      title: "Intern — Introduction to Software Testing",
      company: "Practical Training",
      description: "Learning automated and manual testing techniques using Selenium and Cucumber. Setting up test pipelines and writing BDD scenarios."
    },
    'decatechs': {
      title: "",
      company: "",
      description: ""
    }
  },

  metadata: {
    title: "Charline Brenda Yamenjeu — Computer Engineering",
    description: "Portfolio of Yamenjeu Tchaweu Charline Brenda, engineering student at ENSPY specializing in web, mobile development and AI.",
  },

  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },

  hero: {
    title: "YAMENJEU TCHAWEU CHARLINE BRENDA",
    subtitle_1: "Computer Engineering Student & Web/Mobile Development",
    tagline: "Passionate about using innovative technologies to solve real problems. I build solutions combining web, mobile development and artificial intelligence.",
    download_cv: "Download CV",
    project_link: "Discover my projects",
  },

  sectionTitles: {
    about: "About Me",
    skills: "Technical Skills",
    projects: "Featured Projects",
    leadership: "Leadership & Engagement",
    education: "Education",
    certifications: "Certifications",
    contact: "Get in Touch",
    experience: "Experience",
  },

  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "AI & Data",
    databases: "Databases",
    tools_methods: "Tools & Methods",
  },

  leadership: {
    'club-gi': {
      role: "Vice-President",
      organization: "AFENSPY (Association of Girls at ENSPY)",
      descriptionPoints: [
        "Coordinating association activities and contributing to the definition of strategic orientations.",
        "Secretary General (2024–2025): project management and facilitation of team communication.",
        "Project Coordinator at ASPY (2024–2025): problem solving and implementation of innovative solutions.",
      ],
    },
  },

  education: {
    'engineering-degree': {
      degree: "Computer Engineering Degree",
      institution: "National Advanced School of Engineering of Yaoundé (ENSPY)",
      details: "Mathematics & Physics · University of Yaoundé I",
      status: "In progress · 2022 – 2027",
    },
    'bachelor-maths': {
      degree: "GCE Advanced Level",
      institution: "GBHS Nkol-Eton",
      details: "Results: 5A / 5A",
      status: "Obtained · 2021 – 2022",
    },
  },

  certifications: {
    'java-epfl': {
      title: "John C. Maxwell Leadership Certification",
      institution: "Beyond Success · Equip Cameroon — November 2024",
    },
    'web-dev-ucdavis': {
      title: "Introduction to Software Testing",
      institution: "Practical Training — Feb – Jun 2025",
    },
    'c-dartmouth': {
      title: "IT Support & Image Analysis",
      institution: "ENEO Douala — Jul – Aug 2025",
    },
  },

  projects: {
    'pynfi': {
      title: "Harmony Gloves",
      shortDescription: "Smart electronic gloves for deaf-mute communication.",
      problem: "Lack of accessible real-time communication tools for deaf and mute people.",
      role: "Designer and Developer.",
      solution: "Smart electronic gloves that translate hand gestures into speech or text in real time.",
      features: ["Gesture recognition", "Text-to-speech", "Real-time processing", "Wearable device"],
      architecture: "Embedded system combined with mobile application.",
      challenges: "Achieving reliable real-time gesture recognition with low latency.",
      results: "Functional prototype demonstrated.",
      perspectives: "Expand gesture vocabulary and improve accuracy with deep learning."
    },
    'ima-platform': {
      title: "Emotion-Based Recommendation System",
      shortDescription: "Analyzes user sentiment to provide personalized suggestions.",
      problem: "Generic recommendations that do not adapt to the user's current emotional state.",
      role: "Designer and Developer.",
      solution: "System that detects user emotions and recommends movies, products or music accordingly.",
      features: ["Sentiment analysis", "Personalized recommendations", "Multi-category support"],
      architecture: "Python ML backend with web interface.",
      challenges: "Accurate emotion detection from limited input signals.",
      results: "Working prototype with multiple recommendation categories.",
      perspectives: "Integration of facial recognition for richer emotion detection."
    },
    'transens': {
      title: "ENEO Meter Reading App",
      shortDescription: "Mobile app for automatic electric meter reading via image analysis.",
      problem: "Manual and error-prone process for reading electric meters at scale.",
      role: "Intern Developer at ENEO Douala.",
      solution: "Mobile application using computer vision to automatically read electric meters from photos.",
      features: ["Image capture", "OCR / computer vision", "Result validation", "Mobile-first"],
      architecture: "React Native frontend with image processing backend.",
      challenges: "Handling varied lighting conditions and meter formats.",
      results: "Delivered during internship at ENEO Douala.",
      perspectives: "Deploy at scale across ENEO's network."
    },
    'ai-tax-assistant': {
      title: "UM2Code",
      shortDescription: "Automatically generates source code from UML diagrams.",
      problem: "Repetitive and time-consuming manual translation of UML diagrams into code.",
      solution: "Application that parses UML diagrams and generates the corresponding source code automatically.",
      features: ["UML parsing", "Code generation", "Multiple languages support"]
    },
    'blog-website': {
      title: "Portfolio v1",
      shortDescription: "First version of my personal portfolio.",
      solution: "Web showcase presenting my skills and projects."
    },
    'learn-laravel': { title: "", shortDescription: "", solution: "" },
    'snake-game': { title: "", shortDescription: "", solution: "" },
    'portfolio-v2': {
      title: "Portfolio v2.0",
      shortDescription: "This site: my engineering showcase.",
      solution: "Modular architecture with multilingual support."
    },
    'portfolio-v1': { title: "", shortDescription: "", solution: "" }
  },
};
