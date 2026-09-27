export const personalInfo = {
  name: "Priyanka",

  role: "AI & Data Science Engineer",

  description:
    "I build practical AI-powered applications using machine learning, LLMs, RAG and modern web technologies.",

  email: "your-email@gmail.com",

  github: "https://github.com/yourusername",

  linkedin: "https://www.linkedin.com/in/yourusername/",

  instagram: "https://www.instagram.com/yourusername/",

  youtube: "https://www.youtube.com/@yourusername",

  blog: "#",

  x: "https://x.com/yourusername",

  resume: "/resume.pdf",
};

export const experiences = [
  {
    company: "Society for Applied Microwave Electronics Engineering & Research (SAMEER)",
    role: "Trainee Intern — AI / Image Processing",
    period: "Aug 2025 — Feb 2026",
    description:
      "• Worked on MRI image processing, noise analysis, detection and reduction using original DICOM images.\n• Applied Rician and NC-χ noise models for MRI noise analysis based on single-coil and multi-coil imaging.\n• Developed image-processing pipelines using Python and OpenCV while focusing on preserving important diagnostic information.\n• Techstack: Python, OpenCV, DICOM, Image Processing, MRI.",
    website: "https://sameer.gov.in/",
    image: "/sameer.png",
  },

  // {
  //   company: "Feedspot",
  //   role: "SEO Analyst",
  //   period: "2026 — Present",
  //   description:
  //     "Working on SEO, content and digital growth activities while continuing to build software and AI projects.",
  //   website: "https://www.feedspot.com/",
  //   image: "/feedspot.png",
  // },
];

export const education = [
  {
    institution: "Vidyavardhini's College of Engineering & Technology",
    degree: "Bachelor's in Artificial Intelligence & Data Science",
    period: "2022 — 2026",
    website: "https://vcet.edu.in/",
    image: "/vcet.png",
  },

  {
    institution: "Shri T. P. Bhatia College of Science",
    degree: "Higher Secondary School Certificate (HSC)",
    period: "2020 — 2022",
    website: "https://tpbhatiacollege.com/",
    image: "/tpbhatia.jpeg",
  },
];

export const skills = {
  "AI / Machine Learning": [
    "Python",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Machine Learning",
    "Computer Vision",
  ],

  "Generative AI": [
    "LLMs",
    "RAG",
    "LangChain",
    "Embeddings",
    "Prompt Engineering",
  ],

  Development: [
    "React",
    "FastAPI",
    "REST APIs",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],

  "Database / Tools": [
    "SQL",
    "Git",
    "GitHub",
    "AWS",
  ],
};

export const projects = [
  {
    title: "AI CSV / Data Quality Analyzer",

    description:
      "An AI-powered application that analyzes uploaded CSV datasets and generates a dataset health report by detecting missing values, duplicates, outliers and inconsistent data.",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Pandas",
      "RAG",
      "AWS",
    ],

    github: "https://github.com/yourusername/ai-csv-analyzer",

    demo: "#",

    featured: true,
  },

  {
    title: "GovMate",

    description:
      "A multilingual AI-powered platform that brings multiple chatbot services into one unified application.",

    technologies: [
      "Python",
      "AI",
      "Chatbot",
      "Web",
    ],

    github: "https://github.com/yourusername/govmate",

    demo: "#",

    featured: true,
  },

  {
    title: "MRI Noise Analysis",

    description:
      "An image-processing project focused on MRI noise analysis, detection and reduction while preserving important image information.",

    technologies: [
      "Python",
      "OpenCV",
      "DICOM",
      "Image Processing",
    ],

    github: "#",

    demo: "#",

    featured: false,
  },
];