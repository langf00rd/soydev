import { Checklist } from "~/interface";

export const FRONTEND_CHECKLIST: Checklist[] = [
  {
    label: "Version control (e.g., Git)",
    hasChildren: true,
    childrenLabel: "So how many times?",
    children: ["Are you sure?", "Yes i am", "No you are not"],
  },
  {
    label: "Proficiency in both frontend and backend technologies",
    hasChildren: false,
  },
  {
    label: "Agile development and project management skills",
    hasChildren: false,
  },
  {
    label: "Troubleshooting and debugging skills for the entire application stack",
    hasChildren: true,
    childrenLabel: "Incase of an emergency?",
    children: ["Are you sure?", "Yes i am", "No you are not"],
  },
  {
    label: "Strong communication skills for collaborating with cross-functional teams",
    hasChildren: false,
  },
  {
    label: "Experience with integrating frontend and backend components",
    hasChildren: true,
    childrenLabel: "Are you sure?",
    children: ["Are you sure?", "Yes i am", "No you are not"],
  },
];

export const BACKEND_CHECKLIST: Checklist[] = [
  {
    label: "Version control (e.g., Git)",
    hasChildren: true,
    childrenLabel: "So how many times?",
    children: ["Are you sure?", "Yes i am", "No you are not"],
  },
  {
    label: "Proficiency in both frontend and backend technologies",
    hasChildren: false,
  },
  {
    label: "Agile development and project management skills",
    hasChildren: false,
  },
  {
    label: "Troubleshooting and debugging skills for the entire application stack",
    hasChildren: true,
    childrenLabel: "Incase of an emergency?",
    children: ["Are you sure?", "Yes i am", "No you are not"],
  },
  {
    label: "Strong communication skills for collaborating with cross-functional teams",
    hasChildren: false,
  },
  {
    label: "Experience with integrating frontend and backend components",
    hasChildren: true,
    childrenLabel: "Are you sure?",
    children: ["Are you sure?", "Yes i am", "No you are not"],
  },
];

export const FULLSTACK_CHECKLIST: Checklist[] = [
  {
    label: "HTML/CSS fundamentals",
    hasChildren: false,
  },
  {
    label: "JavaScript, including ES6+ features",
    hasChildren: false,
  },
  {
    label: "Frontend frameworks/libraries (e.g., React, Angular, or Vue.js)",
    hasChildren: false,
  },
  {
    label:
      "State management in frontend application using libraries like Zustand, Redux or Mobx",
    hasChildren: false,
  },
  {
    label: "Cross-browser compatibility",
    hasChildren: false,
  },
  { label: "CSS pre-processors (e.g., SASS or LESS)", hasChildren: false },
  {
    label: "Understand and work with RESTful APIs to fetch and display data",
    hasChildren: false,
  },
  {
    label: "Implement user authentication and authorization on the frontend",
    hasChildren: false,
  },
  {
    label: "Utilize browser developer tools for debugging and troubleshooting",
    hasChildren: false,
  },
  { label: "Webpack or other build tools", hasChildren: false },
  {
    label: "Server-side scripting languages (e.g., Node.js, Python, Ruby)",
    hasChildren: false,
  },
  {
    label: "Backend frameworks (e.g., Express.js, Ruby on Rails, Django)",
    hasChildren: false,
  },
  { label: "Database management (SQL and NoSQL databases)", hasChildren: false },
  { label: "API development and integration", hasChildren: false },
  { label: "Authentication and authorization", hasChildren: false },
  { label: "Server deployment and hosting", hasChildren: false },
  { label: "Web server management (e.g., Apache, Nginx)", hasChildren: false },
  { label: "Relational database concepts", hasChildren: false },
  { label: "SQL queries and database design", hasChildren: false },
  { label: "NoSQL database systems (e.g., MongoDB, Firebase)", hasChildren: false },
  { label: "Database indexing and optimization", hasChildren: false },
  {
    label: "Database indexing and optimization",
    hasChildren: true,
    children: [
      "Git fundamentals",
      "Branching and merging strategies",
      "Collaborative development using Git",
    ],
  },
  { label: "Continuous Integration/Continuous Deployment (CI/CD)", hasChildren: false },
  { label: "Containerization (e.g., Docker)", hasChildren: false },
  { label: "Cloud platforms (e.g., AWS, Azure, or Google Cloud)", hasChildren: false },
  { label: "Serverless computing (e.g., AWS Lambda)", hasChildren: false },
  { label: "Web application security best practices", hasChildren: false },
  { label: "Authentication mechanisms (e.g., JWT, OAuth)", hasChildren: false },
  { label: "Secure coding practices", hasChildren: false },
  {
    label: "Testing",
    hasChildren: true,
    children: [
      "Unit testing",
      "Integration testing",
      "End-to-end testing",
      "Test-driven development (TDD)",
      "Jest, Mocha, Jasmine, or other testing frameworks",
    ],
  },
  { label: "Website performance optimization techniques", hasChildren: false },
  { label: "Caching strategies", hasChildren: false },
  { label: "Load balancing and scaling", hasChildren: false },
  { label: "Agile development methodologies (e.g., Scrum, Kanban)", hasChildren: false },
  { label: "Collaboration tools (e.g., JIRA, Trello)", hasChildren: false },
  {
    label: "API development",
    hasChildren: true,
    children: ["RESTful API design principles", "GraphQL (Optional)"],
  },
  {
    label: "Build tools",
    hasChildren: true,
    children: ["NPM/Yarn package management", "Babel for transpilation"],
  },
  { label: "Error handling strategies", hasChildren: false },
  { label: "Logging best practices", hasChildren: false },
  { label: "Code style guides (e.g., ESLint, Prettier)", hasChildren: false },
  { label: "OWASP top 10 security vulnerabilities", hasChildren: false },
  { label: "Real-time communication using Websockets", hasChildren: false },
  { label: "Kubernetes (optional)", hasChildren: false },
  { label: "Nginx or Apache server configuration", hasChildren: false },
];
