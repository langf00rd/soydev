import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "~/components/ui/Button";
import QUESTIONS from "~/questions";

export default function Questions(): JSX.Element {
  const [answers, setAnswers] = useState<{ questionNumber: number; answer: number }[]>(
    []
  );

  const onSelectOption = (questionNumber: number, answer: number) => {
    const filteredAnswers = answers.filter((a) => a.questionNumber !== questionNumber);
    setAnswers([...filteredAnswers, { questionNumber, answer }]);
  };

  const isAnswered = (questionNumber: number, answer: number) => {
    return answers?.filter((a) => {
      return a.questionNumber === questionNumber && answer === a.answer;
    }).length;
  };

  return (
    <>
      <div className="fixed bottom-4 left-4">
        <h2 className="text-2xl">
          you answered {answers.length}/{QUESTIONS.length}
        </h2>
      </div>
      <div className="w-screen flex items-center justify-center">
        <ul className="grid gap-20 py-20">
          {QUESTIONS.map((a, i: number) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={i}
              className="grid gap-5 w-full max-w-xl mx-auto child"
            >
              <h1 className="text-3xl">{a.q}</h1>
              <ul className="grid gap-5">
                {a.options.map((option: string, j: number) => (
                  <li key={j}>
                    <Button
                      variant="outline"
                      className={`w-full py-6 rounded-full ${
                        isAnswered(i, j) !== 0 ? "bg-[#000] text-[#FFF]" : "bg-[#FFF]"
                      }`}
                      onClick={() => onSelectOption(i, j)}
                    >
                      {option}
                    </Button>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
