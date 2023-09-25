import { Question } from "./interface";

const QUESTIONS: Question[] = [
  {
    q: "How many years of programming experience do you have?",
    isMultiChoice: true,
    options: ["over 3 years", "over 5 years", "over 10 years", "under 2 years"],
  },
  {
    q: "Which programming languages are you proficient in?",
    isMultiChoice: false,
  },
  {
    q: "Have you worked on web development projects?",
    isMultiChoice: true,
    options: ["yes", "no"],
  },
  {
    q: "Do you have experience with database management systems?",
    isMultiChoice: true,
    options: ["yes", "no"],
  },
  {
    q: "Have you worked with version control systems (e.g., Git)?",
    isMultiChoice: true,
    options: ["yes", "no"],
  },
  {
    q: "Have you contributed to open-source projects or collaborated on team projects?",
    isMultiChoice: true,
    options: ["yes", "nah"],
  },
  {
    q: "Describe a challenging coding problem you've solved recently.",
    isMultiChoice: false,
  },
  {
    q: "How comfortable are you with data structures and algorithms?",
    isMultiChoice: true,
    options: ["proficient", "nah, idk dsa"],
  },
  {
    q: "Have you ever designed and developed a complete software application from scratch?",
    isMultiChoice: true,
    options: ["yes", "nah"],
  },
  {
    q: "How do you stay updated with the latest industry trends and technologies?",
    isMultiChoice: false,
  },
  {
    q: "Have you ever had to communicate complex technical concepts to non-technical team members or stakeholders?",
    isMultiChoice: true,
    options: ["yes", "no"],
  },
  {
    q: "How do you handle debugging and troubleshooting issues in your code?",
    isMultiChoice: false,
  },
  {
    q: "Describe a situation where you had to work under tight deadlines and how you managed the pressure.",
    isMultiChoice: false,
  },
  {
    q: "Can you provide an example of a time you had to refactor code to improve its maintainability?",
    isMultiChoice: false,
  },
  {
    q: "What coding standards and best practices do you follow in your projects?",
    isMultiChoice: false,
  },
  {
    q: "Explain the architecture of a recent project you worked on.",
    isMultiChoice: false,
  },
  {
    q: "How do you handle code reviews and feedback from peers?",
    isMultiChoice: false,
  },
];

export default QUESTIONS;
