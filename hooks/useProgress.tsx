import { useState } from "react";

export default function useProgress(): {
  onProgressUpdate: (checked: string[], ttotalLength: number) => void;
  percentage: number;
  progressColor: string;
} {
  const [percentage, setpercentage] = useState(0);
  const [progressColor, setProgressColor] = useState("#FFF");

  const onProgressUpdate = (checked: string[], totalLength: number) => {
    const percentage = Number(((checked.length / totalLength) * 100).toFixed(0));
    setpercentage(percentage);
    if (percentage <= 40) {
      setProgressColor("#ff5e5e");
    } else if (percentage >= 40 && percentage <= 70) {
      setProgressColor("#FFEB3B");
    } else if (percentage >= 70) {
      setProgressColor("#8fff8f");
    }
  };

  return { onProgressUpdate, percentage, progressColor };
}
