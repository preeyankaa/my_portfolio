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
    role: "Internship — MRI Image Processing",
    period: "Aug 2025 — Feb 2026",
    description: [
      "Worked on MRI image processing, noise analysis, detection and reduction using original DICOM images.",
      "Applied Rician and NC-χ noise models for single-coil and multi-coil MRI noise analysis.",
      "Built Python and OpenCV image-processing pipelines while preserving important diagnostic details."
    ],
    techStack: ["Python", "OpenCV", "Machine Learning", "Statistics", "DICOM", "Image Processing"],
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
    degree: "B.E. — Artificial Intelligence & Data Science",
    period: "2022 — 2026",
    website: "https://vcet.edu.in/",
    image: "/vcet.png",
  },

  {
    institution: "Shri T. P. Bhatia College of Science",
    degree: "Higher Secondary Certificate (HSC) — Information Technology",
    period: "2020 — 2022",
    website: "https://tpbhatiacollege.com/",
    image: "/tpbhatia.jpeg",
  },
];


export const skills = {

"Programming & Databases": [
  "Python",
  "JavaScript",
  "SQL",
  "MongoDB",
  "SQLite",
  "PostgreSQL",
],


  "AI & Generative AI": [
    "Machine Learning",
    "Generative AI",
    "LLMs",
    "RAG",
    "Prompt Engineering",
  ],

  "Frameworks & Libraries": [
    "FastAPI",
    "Flask",
    "React",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "OpenCV",
  ],

  "Tools & Cloud": [
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