export const siteConfig = {
  name: "Boran Sac",
  title: "Graduate Software Engineer",
  description: "",
  accentColor: "#1d4ed8",
  social: {
    email: "boransc04@gmail.com",
    linkedin: "https://www.linkedin.com/in/boransac/",
    CV: "/cv.pdf",
    github: "https://github.com/boransc",
  },
  aboutMe:
    "I'm a Computer Science student at the University of Hertfordshire with a strong interest in Full-Stack Development, Data Analysis, and Fintech. I have hands-on experience in developing responsive admin dashboards, integrating payment systems, and visualising data trends. I’m passionate about problem-solving, working with modern web technologies, and contributing to meaningful projects. Outside of tech, I enjoy fitness and helping others grow through tutoring and mentorship.",
  skills: [
    "Python", "JavaScript", "Java", "Dart", "TypeScript", "SQL",
    "React", "Flutter", "SCSS", "HTML", "CSS", "TailwindCSS",
    "Node.js", "Express", "Firebase", "MongoDB", "Git", "GitHub",
    "CI/CD", "Figma"
  ],
  projects: [
    {
      name: "TaskMaster Productivity App",
      description:
        "Designed a gamified mobile task management app in Flutter with Firebase authentication. Featured recurring tasks, reminders, calendar view, and a habit-building game mechanic to boost productivity.",
      link: "https://github.com/boransc/TaskMaster",
      skills: ["Flutter", "Firebase"],
    },
    {
      name: "Safeguard-Me Admin Dashboard",
      description:
        "Built a full-featured system admin dashboard for a safeguarding platform using React, Node.js, MongoDB, SCSS, and Stripe API. Included real-time charts, role-based access control, and credit tracking tools.",
      link: "",
      skills: ["React", "Node.js", "MongoDB", "SCSS", "Stripe API"],
    },
    {
      name: "Health Data Analysis",
      description:
        "Conducted an end-to-end health data analysis project using Python. Applied PCA and SVM models to identify diabetes risk factors, leveraging pandas, scikit-learn, and Matplotlib for data cleaning and visualisation.",
      link: "",
      skills: ["Python", "pandas", "scikit-learn", "Matplotlib"],
    },

    {
      name: "Depot Parcel System",
      description:
        "Developed a Java desktop application simulating a parcel depot with user collections and storage logic. Utilised MVC and Singleton patterns, and built an interactive GUI using Java Swing.",
      link: "https://github.com/boransc/DepotSystem",
      skills: ["Java", "Java Swing", "OOP"],
    },
  ],
  experience: [
    {
      company: "Safeguard-Me",
      title: "Full Stack Developer",
      dateRange: "Jan 2025 – July 2025",
      bullets: [
        "Designed and built responsive admin interfaces using React and SCSS, connected to a MongoDB backend via Express.js.",
        "Integrated Stripe API for secure credit-based transaction tracking and payment management.",
        "Implemented real-time analytics dashboards to visualise credit usage trends and recent user activity.",
        "Developed role-based access control features to manage admin permissions.",
        "Built and consumed RESTful APIs for dashboard functionality and data updates.",
        "Collaborated with frontend and backend teams for feature development, bug resolution, and testing.",
        "Performed UI validation, bug tracking, and functional testing to ensure reliability.",
        "Used Git and GitHub for version control with over 100 commits and multiple conflict resolutions.",
      ],
    },
    {
      company: "University of Hertfordshire",
      title: "SPECS Proctor (Lab Assistant & Student Support)",
      dateRange: "Oct 2023 – Apr 2025",
      bullets: [
        "Provided lab guidance and academic assistance to over 500 students, enhancing their learning experience.",
        "Helped organise Hackathons and Open Days with up to 2000 participants, ensuring smooth event logistics.",
      ],
    },
    {
      company: "Greggs Distribution Centre",
      title: "Warehouse Operative",
      dateRange: "Apr 2023 – Oct 2023",
      bullets: [
        "Maintained over 1000 inventory logs and shipment records, ensuring accurate stock management.",
        "Performed quality control checks on incoming and outgoing stock.",
      ],
    },
  ],
  education: [
    {
      school: "University of Hertfordshire",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Sept 2022 – June 2025",
      achievements: ["GPA: 4.00"],
    },
    {
      school: "Highlands School",
      degree: "A-Levels: Maths, Computer Science, Physics",
      dateRange: "Sept 2020 – July 2022",
      achievements: [
        "Achieved grades A (Maths), A (Computer Science), B (Physics)"
      ],
    },
  ],
};
