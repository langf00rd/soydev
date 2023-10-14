import { Asterisk, TrainTrack, Cable, Laptop2, MousePointerSquare } from "lucide-react";
import { JobType } from "~/interface";

export const JOB_TYPES: JobType[] = [
  {
    id: 0.1,
    title: "frontend developer",
    icon: <Asterisk />,
  },
  {
    id: 0.2,
    title: "fullstack developer",
    icon: <Laptop2 />,
  },
  {
    id: 0.3,
    title: "UI & UX designer",
    icon: <MousePointerSquare />,
  },
  {
    id: 0.4,
    title: "software engineer",
    icon: <TrainTrack />,
    isComingSoon: true,
  },
  {
    id: 0.5,
    title: "backend developer",
    icon: <Cable />,
    isComingSoon: true,
  },
];
