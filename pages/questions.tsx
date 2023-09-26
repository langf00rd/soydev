import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ArrowRight, ListTodo } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/Button";
import QUESTIONS from "~/questions";
import ROUTES from "~/routes";

export default function Questions(): JSX.Element {
  const { isLoaded, userId } = useAuth();
  const { push, replace } = useRouter();
  const [answers, setAnswers] = useState<
    { questionNumber: number; answer: number | string }[]
  >([]);

  const onSelectOption = (questionNumber: number, answer: number | string) => {
    const filteredAnswers = answers.filter((a) => a.questionNumber !== questionNumber);
    setAnswers([...filteredAnswers, { questionNumber, answer }]);
  };

  const isAnswered = (questionNumber: number, answer: number) => {
    return answers?.filter((a) => {
      return a.questionNumber === questionNumber && answer === a.answer;
    }).length;
  };

  const seeResults = () => {
    push(ROUTES.results);
  };

  useEffect(() => {
    if (isLoaded && !userId) replace(ROUTES.signIn);
  }, [isLoaded, replace, userId]);

  if (isLoaded)
    return (
      <>
        <div className="fixed bottom-0 left-0 border-t w-screen bg-background p-3 flex items-center justify-between z-10">
          <Link href={ROUTES.checklist} className="flex gap-2 hover:text-primary">
            <Button className="rounded-full gap-2" variant="link">
              <ListTodo />
              <p>Use checklist</p>
            </Button>
          </Link>
          <h2 className="text-xl">
            you&apos;ve answered {answers.length} out of {QUESTIONS.length}
          </h2>
          <Button
            className="rounded-full gap-2"
            onClick={seeResults}
            disabled={answers.length !== QUESTIONS.length}
          >
            See results
            <ArrowRight color="#FFF" />
          </Button>
        </div>
        <div className="w-screen flex items-center justify-center">
          <ul className="grid gap-20 py-32">
            {QUESTIONS.map((a, i: number) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={i}
                className="grid gap-5 w-full max-w-xl mx-auto child"
              >
                <h2 className="text-2xl">{a.q}</h2>
                {a.options ? (
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
                ) : (
                  <textarea
                    onChange={(e) => onSelectOption(i, e.target.value)}
                    className="h-[150px] resize-none shadow-sm rounded-xl p-2 px-3"
                  ></textarea>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </>
    );

  return <></>;
}
