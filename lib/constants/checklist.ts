import { Checklist } from "~/interface";

export const FRONTEND_CHECKLIST: Checklist[] = [
  {
    label: "HTML (HyperText Markup Language)",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in HTML",
    children: [
      "Properly structure HTML documents using headings, paragraphs, lists, and other elements.",
      "Create forms with input fields, labels, and form validation.",
      "Embed multimedia content, such as images, audio, and video.",
      "Understand semantic HTML to improve accessibility and SEO.",
      "Use HTML5 features like local storage and web workers for offline capabilities.",
    ],
  },
  {
    label: "CSS (Cascading Style Sheets)",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in CSS",
    children: [
      "Apply CSS styles to HTML elements for layout and presentation.",
      "Understand the box model and manage element dimensions and spacing.",
      "Work with CSS selectors to target specific elements.",
      "Use Flexbox and CSS Grid for responsive layouts.",
      "Implement animations and transitions with CSS.",
    ],
  },
  {
    label: "JavaScript",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in JavaScript",
    children: [
      "Write JavaScript code to handle user interactions and dynamic content.",
      "Manipulate the Document Object Model (DOM) to update web page content.",
      "Work with asynchronous operations, such as fetching data from APIs.",
      "Implement client-side form validation.",
      "Debug and troubleshoot JavaScript code effectively.",
    ],
  },
  {
    label: "Responsive Web Design",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Responsive Web Design",
    children: [
      "Create responsive web designs that adapt to different screen sizes.",
      "Use media queries to apply styles based on device characteristics.",
      "Optimize images and assets for various devices and resolutions.",
    ],
  },
  {
    label: "Version Control/Git",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Version Control/Git",
    children: [
      "Use Git for version control to track changes in code.",
      "Collaborate with other developers using Git repositories.",
    ],
  },
  {
    label: "Web Performance Optimization",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Web Performance Optimization",
    children: [
      "Optimize web assets for faster loading times.",
      "Minify and compress CSS, JavaScript, and images.",
      "Leverage browser caching and lazy loading techniques.",
    ],
  },
  {
    label: "Cross-Browser Compatibility",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Cross-Browser Compatibility",
    children: [
      "Ensure web applications work consistently across different web browsers.",
      "Identify and address browser-specific issues and quirks.",
    ],
  },
  {
    label: "Accessibility (a11y)",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Accessibility",
    children: [
      "Create accessible web content by following WAI-ARIA guidelines.",
      "Use semantic HTML and provide alternative text for images.",
      "Implement keyboard navigation and focus management.",
    ],
  },
  {
    label: "Build Tools and Task Runners",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Build Tools and Task Runners",
    children: [
      "Set up and configure build tools like Webpack or Gulp.",
      "Automate repetitive tasks, such as code minification and bundling.",
    ],
  },
  {
    label: "Frameworks and Libraries",
    hasChildren: true,
    childrenLabel: "Frontend Developer Familiarity with Frameworks and Libraries",
    children: [
      "Familiarity with popular frontend libraries/frameworks like React, Vue.js, or Angular.",
      "Understand component-based architecture.",
    ],
  },
  {
    label: "Testing",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Testing",
    children: [
      "Write unit tests and perform integration testing using tools like Jest or Cypress.",
    ],
  },
  {
    label: "Package Managers",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Package Managers",
    children: ["Use package managers like npm or Yarn to manage project dependencies."],
  },
  {
    label: "Security",
    hasChildren: true,
    childrenLabel: "Frontend Developer Awareness of Security",
    children: [
      "Be aware of common web security vulnerabilities, such as Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).",
    ],
  },
  {
    label: "Browser Developer Tools",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Browser Developer Tools",
    children: [
      "Proficiently use browser developer tools for debugging and performance analysis.",
    ],
  },
  {
    label: "Progressive Web Apps (PWAs)",
    hasChildren: true,
    childrenLabel: "Frontend Developer Proficiency in Progressive Web Apps (PWAs)",
    children: [
      "Develop Progressive Web Apps that offer offline functionality and can be installed on devices.",
    ],
  },
  {
    label: "Web APIs",
    hasChildren: true,
    childrenLabel: "Frontend Developer Utilization of Web APIs",
    children: [
      "Utilize browser APIs for features like geolocation, push notifications, and service workers.",
    ],
  },
  {
    label: "Code Quality and Best Practices",
    hasChildren: true,
    childrenLabel: "Frontend Developer Adherence to Code Quality and Best Practices",
    children: [
      "Follow coding conventions and best practices for maintainable and scalable code.",
      "Conduct code reviews and collaborate effectively with other team members.",
    ],
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

export const UI_UX_CHECKLIST = [
  {
    label: "Proficiency in UI/UX design principles and best practices",
    hasChildren: false,
  },
  {
    label: "User-Centered Design",
    hasChildren: true,
    childrenLabel: "Demonstrate user-centered design in your work",
    children: ["Always", "Mostly", "Sometimes", "Rarely"],
  },
  {
    label: "Wireframing and Prototyping",
    hasChildren: true,
    childrenLabel: "Level of expertise in wireframing and prototyping",
    children: ["Expert", "Proficient", "Competent", "Basic"],
  },
  {
    label: "Visual Design Skills",
    hasChildren: true,
    childrenLabel: "Mastery of visual design, typography, and color theory",
    children: ["Mastery", "Proficient", "Competent", "Basic"],
  },
  {
    label: "Design Tools Proficiency",
    hasChildren: true,
    childrenLabel: "Proficiency with design tools (e.g., Figma, Sketch)",
    children: ["Figma", "Sketch", "Adobe XD", "Photoshop", "Illustrator", "Other"],
  },
  {
    label: "User Research and Testing",
    hasChildren: true,
    childrenLabel: "Engagement in user research and usability testing",
    children: ["Frequent", "Occasional", "Rare", "None"],
  },
  {
    label: "Information Architecture",
    hasChildren: true,
    childrenLabel: "Knowledge and application of information architecture",
    children: ["Strong", "Adequate", "Limited", "None"],
  },
  {
    label: "Interaction Design",
    hasChildren: true,
    childrenLabel: "Proficiency in interaction design and microinteractions",
    children: ["Expert", "Proficient", "Competent", "Basic"],
  },
  {
    label: "Responsive Design",
    hasChildren: true,
    childrenLabel: "Ability to create responsive and mobile-first designs",
    children: ["Expert", "Proficient", "Competent", "Basic"],
  },
  {
    label: "Accessibility (a11y) Design",
    hasChildren: true,
    childrenLabel: "Consideration of accessibility in design",
    children: ["Highly Considerate", "Considerate", "Limited", "None"],
  },
  {
    label: "Collaboration with Developers",
    hasChildren: true,
    childrenLabel: "Efficient collaboration with development teams",
    children: ["Efficient", "Moderate", "Limited", "None"],
  },
  {
    label: "Design Portfolio",
    hasChildren: true,
    childrenLabel: "Availability of a design portfolio",
    children: ["Available", "Not Available"],
  },
  {
    label: "Communication and Collaboration Skills",
    hasChildren: false,
  },
  {
    label: "Design System Usage",
    hasChildren: false,
  },
  {
    label: "User Personas and Journeys",
    hasChildren: false,
  },
  {
    label: "Design Consistency",
    hasChildren: false,
  },
  {
    label: "Design Thinking and Problem-Solving",
    hasChildren: false,
  },
  {
    label: "Animation and Motion Design",
    hasChildren: false,
  },
];
