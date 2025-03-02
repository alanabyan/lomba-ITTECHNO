// data.ts

export type Project = {
  title: string;
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Fast",
    description: "AI can write and fix code quickly.",
    link: "https://fastapi.com",
  },
  {
    title: "Saving Time",
    description: "With AI we can save time in the development process.",
    link: "https://netflix.com",
  },
  {
    title: "Troubleshoot",
    description:
      "AI can detect and identify problems quickly through log data analysis and real-time system monitoring.",
    link: "/",
  },
  {
    title: "SEO Optimization",
    description: "AI improves content for better SEO performance.",
    link: "/",
  },
  {
    title: "Security",
    description:
      "AI can detect and identify security vulnerabilities quickly through log data analysis and real-time system monitoring.",
    link: "/",
  },
  {
    title: "Data Analysis",
    description:
      "AI can analyze data quickly through log data analysis and real-time system monitoring.",
    link: "/",
  },
];

export const respond: Project[] = [
  {
    title: "Adaptation",
    description:
      "Adaptation is key in the AI ​​era where collaboration between artificial intelligence and humans is the greatest strength.",
    link: "/",
  },
  {
    title: "Back to Fundamentals",
    description: "Make AI a tool, not a replacement.",
    link: "/",
  },
  {
    title: "AI as a Friend",
    description: "AI as an ally enriches our experience in creating a program.",
    link: "/",
  },
];
