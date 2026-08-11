// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit freely — the UI reads straight
// from this file, so you never need to touch component code to update
// copy, add a project, or tweak a skill list.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Baibhab Mund",
  role: "MIS & Data Analyst — Android Developer — Front-End Engineer",
  tagline:
    "I turn messy operations, half-built apps, and legacy front ends into systems that run themselves.",
  location: "Ludhiana, Punjab, India",
  email: "baibhab.mund20@gmail.com",
  phone: "+91 89840 20425",
  summary:
    "Versatile technology professional with cross-functional experience spanning MIS & data analysis, Android development & QA, and front-end web development. Proven track record of automating reporting workflows, shipping and testing production Android applications, and modernizing web platforms — backed by a strong foundation in Python, data visualization, and machine learning.",
  socials: [
    { label: "Email", href: "mailto:baibhab.mund20@gmail.com" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export const skillGroups = [
  {
    id: "data",
    title: "Data & Analytics",
    tools: [
      "Advanced Excel",
      "Google Sheets",
      "Apps Script",
      "Power BI",
      "Looker Studio",
      "Tableau",
      "SQL",
      "EDA",
      "Data Visualization",
    ],
  },
  {
    id: "programming",
    title: "Programming",
    tools: ["Java", "Python", "R", "HTML", "CSS", "JavaScript", "Node.js", "React JS"],
  },
  {
    id: "mobile",
    title: "Mobile & QA",
    tools: [
      "Android Studio",
      "Gradle",
      "API & GPT Integration",
      "Manual Testing",
      "Quality Analysis",
    ],
  },
  {
    id: "web",
    title: "Web & CMS",
    tools: ["WordPress", "WooCommerce", "Tutor LMS", "Docker", "PostgreSQL"],
  },
  {
    id: "tools",
    title: "Tools & Design",
    tools: ["Git & GitHub", "Jira", "Confluence", "Figma", "Canva", "Thunder Client"],
  },
];

export const experience = [
  {
    company: "Whizrobo Private Limited",
    role: "MIS & Data Analyst / Android Development & QA / Front-End Development",
    period: "Dec 2025 — Present",
    tracks: [
      {
        label: "MIS & Data Analyst",
        points: [
          "Cleaned and structured operational data into insightful dashboards for ongoing business reference.",
          "Automated the employee management system with task-tracking dashboards; independently owned the company's Google Sheets data ecosystem, including inventory tracking.",
        ],
      },
      {
        label: "Android Development & Quality Analysis",
        points: [
          "Built and tested 6 Android applications for robotic solutions (WhizLMS, WhizNav, WhizAdmission, WhizBot, WhizGreet, WhizConverse) as the sole on-site developer in a 4-person team.",
          "Implemented API/GPT integrations, conducted rigorous manual QA and test case design, and owned final APK release sign-off; tracked work via Jira and Git.",
        ],
      },
      {
        label: "Front-End Development",
        points: [
          "Migrated whizrobo.com's front end to JavaScript, redesigning key pages including Virtual Labs, LMS, and Student/School dashboards.",
          "Redesigned subscription and purchasing flows, led legacy data migration and cleanup, and managed domain/DNS infrastructure via Hostinger and Cloudflare.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "Customer Segmentation Model",
    stack: ["Python", "Matplotlib", "Seaborn", "Power BI", "EDA"],
    description:
      "Clustering-based customer segmentation model with a full data cleaning, EDA, and visualization workflow — turning raw transaction data into actionable customer cohorts.",
    href: "#",
  },
  {
    name: "Pulse — Task Tracker",
    stack: ["React (Vite)", "Express", "PostgreSQL", "JWT", "Docker"],
    description:
      "Full-stack, role-based task tracker with JWT auth, an admin analytics dashboard, and Docker Compose deployment for one-command spin-up.",
    href: "#",
  },
];

export const certifications = [
  {
    name: "Python, Data Science and Machine Learning Integrated",
    issuer: "Cipher Schools",
    date: "Jul 2024",
  },
  {
    name: "Data Analysis with Tableau",
    issuer: "Coursera · Salesforce",
    date: "Nov 2024",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera · Stanford Online",
    date: "Dec 2024",
  },
  {
    name: "Excel Skills for Data Analytics and Visualization",
    issuer: "Coursera · Macquarie University",
    date: "May 2024",
  },
  {
    name: "R Programming",
    issuer: "Coursera · Johns Hopkins University",
    date: "Apr 2024",
  },
];

export const education = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    degree: "B.Tech, Computer Science and Engineering",
    period: "Aug 2022 — Jul 2026",
  },
  {
    school: "Sri Prakash Vidyaniketan",
    location: "Visakhapatnam, Andhra Pradesh",
    degree: "Intermediate — 78.6%",
    period: "Apr 2020 — Mar 2022",
  },
];

export const stats = [
  { value: "6", label: "Android apps shipped" },
  { value: "5", label: "Certifications earned" },
  { value: "3", label: "Domains covered" },
  { value: "1", label: "Person on-site Android team" },
];
