import { Question } from "./interface";

const QUESTIONS: Question[] = [
  {
    q: "How many years of experience do you have?",
    isMultiChoice: true,
    options: ["over 3 years", "over 5 years", "over 10 years", "under 2 years"],
  },
  {
    q: "do you even javascript?",
    isMultiChoice: true,
    options: ["yes", "nein", "i'm a gigachad"],
  },
  {
    q: "Have you shipped/contributed to any live software projects?",
    isMultiChoice: true,
    options: ["yes", "no"],
  },
  {
    q: "Do you have experience with database management systems",
    isMultiChoice: true,
    options: ["yes", "no"],
  },
  {
    q: "Have you worked with version control systems (e.g., Git)?",
    isMultiChoice: true,
    options: ["yes", "no"],
  },
  {
    q: "How comfortable are you with data structures and algorithms?",
    isMultiChoice: true,
    options: ["proficient", "nah i don't do dsa"],
  },
  {
    q: "Have you ever designed and developed a complete software application from scratch?",
    isMultiChoice: true,
    options: ["yes", "no"],
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
];

export default QUESTIONS;
