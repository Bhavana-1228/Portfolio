// Portfolio Data Configuration
// You can change any text, link, or image path in this file to update the portfolio instantly!

const portfolioData = {
  // Personal Details
  personal: {
    name: "Chinnaobaiahgari Bhavana Reddy",
    title: "Bhavana Reddy",
    eyebrow: "HELLO, I'M",
    subtitle: "Frontend Developer & Python Enthusiast",
    description: "I am a passionate frontend developer and Python programmer. I specialize in building responsive, modern, and interactive web applications while continuously strengthening my knowledge in Full-Stack Development and Data Analytics.",
    profileImage: "assets/profile.jpeg",
    resumeLink: "#", // Add google drive link or local resume path here if desired
    email: "bhavanareddy2328@gmail.com",
    github: "https://github.com/Bhavana-1228",
    linkedin: "https://www.linkedin.com/in/bhavana-reddy-chinnaobaiahgari-b45190299/"
  },

  // About Me Section
  about: {
    tagline: "Building modern web experiences with curiosity and consistency",
    bioParagraph1: "I regularly practice programming to strengthen my fundamentals and problem-solving abilities. My current focus is developing robust and responsive client-side experiences while expanding my capabilities in backend technologies and data visualization.",
    bioParagraph2: "I am actively seeking opportunities to start my professional journey in the IT industry, where I can apply my analytical thinking and technical skills to build meaningful software solutions."
  },

  // Skills Section
  skills: [
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      category: "Backend & Languages",
      items: ["Python", "Java", "REST APIs", "SQL"]
    },
    {
      category: "Tools & Analytics",
      items: ["Git & GitHub", "Power BI", "Data Analytics", "Cloud Technologies"]
    }
  ],

  // Career Goals
  goals: [
    "🚀 Start my career in the IT industry as a software professional",
    "📊 Become a skilled Data Analyst, turning raw data into actionable insights",
    "🐍 Grow as a professional Python Developer building scalable backends",
    "🤖 Build expertise in Artificial Intelligence & Machine Learning",
    "💻 Develop real-world software applications that solve user problems",
    "🌱 Continuously learn, adapt, and improve my technical skills"
  ],

  // Strengths
  strengths: [
    "🔍 Problem Solving",
    "📚 Quick Learning",
    "💻 Programming",
    "📊 Analytical Thinking",
    "🤝 Team Collaboration",
    "🚀 Adaptability",
    "🌱 Continuous Learning"
  ],

  // Projects Section
  projects: [
    {
      title: "Password Generator",
      description: "A secure and customizable password generator utility featuring options for letters, numbers, symbols, length adjustment, and clipboard copying. Built with clean JavaScript, HTML, and CSS.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com/Bhavana-1228/password_generator",
      liveLink: "https://github.com/Bhavana-1228/password_generator" // Can be updated if deployed
    },
    {
      title: "Python Practice Repository",
      description: "A collection of Python notebooks and scripts covering object-oriented programming (OOP), data structures, list comprehensions, multithreading, exception handling, and regular expressions.",
      tech: ["Python", "Jupyter Notebook"],
      githubLink: "https://github.com/Bhavana-1228/Python",
      liveLink: ""
    },
    {
      title: "Personal Portfolio",
      description: "A premium, fully responsive space-themed developer portfolio website. Features particle background canvas, clean dark mode glassmorphic cards, contact forms, and centralized JavaScript configurations.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com/Bhavana-1228/Bhavana-1228",
      liveLink: "https://manoj054.github.io/portfolio/" // Fallback or template reference
    }
  ]
};

// Export data for script.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
