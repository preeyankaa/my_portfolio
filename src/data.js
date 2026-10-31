
export const personalInfo = {
  name: "Priyanka",
  role: "AI & Data Science Engineer",
  description:
    "I build practical AI-powered applications using machine learning, LLMs, RAG and modern web technologies.",
  email: "pnsbhandari@gmail.com",
  github: "https://github.com/preeyankaa",
  linkedin: "https://linkedin.com/in/priyanka--bhandari/",
  youtube: "https://www.youtube.com/@yourusername",
  blog: "#",
  resume: "/resume.pdf",
};

export const experiences = [
  {
    company:
      "Society for Applied Microwave Electronics Engineering & Research (SAMEER)",
    role: "Internship — MRI Image Processing",
    period: "Aug 2025 — Feb 2026",
    description: [
      "Analyzed 150+ DICOM MRI scans using Python to assess image quality and characterize noise patterns.",
      "Developed ML models to detect noise type and estimate noise level, achieving 80% classification accuracy.",
      "Built Python and OpenCV noise-reduction pipelines that preserve importantn diagnostic details.",
    ],
    techStack: [
      "Python",
      "OpenCV",
      "Machine Learning",
      "Statistics",
      "DICOM",
      "Image Processing",
    ],
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
    institution:
      "Vidyavardhini's College of Engineering & Technology",
    degree: "B.E. — Artificial Intelligence & Data Science",
    period: "2022 — 2026",
    website: "https://vcet.edu.in/",
    image: "/vcet.png",
  },
  {
    institution: "Shri T. P. Bhatia College of Science",
    degree:
      "Higher Secondary Certificate (HSC) — Information Technology",
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
    "SQLite",
    "PostgreSQL",
  ],

  "AI & Generative AI": [
    "Machine Learning",
    "Generative AI",
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
    title: "GovMate - Unified Chatbot System",
    description:
      "A retrieval-augmented conversational platform that unifies 6 government service chatbots into one intelligent assistant, delivering context-aware answers over 5,000+ structured service records.",
    technologies: ["Python", "RAG", "Pinecone", "REST APIs", "React"],
    image: "/govemate.png",
    github: "https://github.com/preeyankaa/GovMate",
    demo: "#",
  },

  {
    title: "SignWave - Sign Language Recognition",
    description:
      "A real-time gesture recognition system that captures live video, classifies sign language gestures with ~80% accuracy, and converts them into text to bridge communication gaps.",
    technologies: ["Python", "CNN", "OpenCV", "Flask"],
    image: "/signwave.png",
    github:
      "https://github.com/preeyankaa/Smart-Hindi-Sign-Language-Recognization",
    demo: "#",
  },

  {
    title: "ArtGAN - Artwork Restoration",
    description:
      "A generative AI application for automated restoration of damaged artworks, reconstructing missing and degraded regions while preserving original texture and fine detail. Also published as an IEEE research paper.",
    technologies: ["Python", "Stable Diffusion", "React"],
    image: "/artgan.png",
    // Replace this with the actual ArtGAN repository URL.
    github: "#",
    demo: "#",
    paper: "https://ieeexplore.ieee.org/document/11467493",

  },
]; 