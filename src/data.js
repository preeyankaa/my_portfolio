
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
      "Worked on MRI image processing, noise analysis, detection and reduction using original DICOM images.",
      "Applied Rician and NC-χ noise models for single-coil and multi-coil MRI noise analysis.",
      "Built Python and OpenCV image-processing pipelines while preserving important diagnostic details.",
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
    title: "GovMate",
    description:
      "Built an end-to-end RAG application that extracts and structures 5,000+ government service records, then unifies 6 chatbot modules into a single AI assistant through REST APIs and a React frontend.",
    technologies: ["Python", "RAG", "REST APIs", "React"],
    image: "/govemate.png",
    github: "https://github.com/GautamC09/GovMate",
    demo: "#",
  },

  {
    title: "SignWave",
    description:
      "Developed a CNN-based sign language recognition model with ~80% accuracy and integrated it into a Flask backend with OpenCV for real-time gesture detection and classification.",
    technologies: ["Python", "CNN", "OpenCV", "Flask"],
    image: "/signwave.png",
    github:
      "https://github.com/preeyankaa/Smart-Hindi-Sign-Language-Recognization",
    demo: "#",
  },

  {
    title: "ArtGAN",
    description:
      "Developed an AI-powered artwork restoration system using Stable Diffusion, with a React interface for image upload and a Python backend that runs inference to restore damaged artworks.",
    technologies: ["Python", "Stable Diffusion", "React"],
    image: "/artgan.png",
    // Replace this with the actual ArtGAN repository URL.
    github: "#",
    demo: "#",
  },
];
