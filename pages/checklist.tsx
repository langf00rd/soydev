import { useAuth, useUser } from "@clerk/nextjs";
import { Field, Form, Formik } from "formik";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/Button";
import { Progress } from "~/components/ui/Progress";
import ROUTES from "~/routes";
import axios from "axios";
import toast from "react-hot-toast";

const FRONTEND_CHECKLIST = [
  "Proficiency in HTML/CSS",
  "Strong JavaScript skills, including ES6+ features",
  "Experience with front-end frameworks and libraries (e.g., React, Angular, Vue.js)",
  "Responsive web design and mobile-first development",
  "Knowledge of web accessibility standards (e.g., WCAG)",
  "Familiarity with CSS preprocessors (e.g., SASS, LESS)",
  "Understanding of browser developer tools for debugging",
  "Knowledge of asynchronous programming and AJAX",
  "Cross-browser compatibility testing",
  "Experience with RESTful API integration",
  "Frontend build tools (e.g., Webpack, Babel)",
  "Version control (e.g., Git)",
];

const BACKEND_CHECKLIST = [
  "Proficiency in server-side programming languages (e.g., Node.js, Python, Ruby, Java, C#)",
  "Knowledge of web application frameworks (e.g., Express.js, Django, Ruby on Rails)",
  "Database management skills (e.g., SQL, NoSQL databases like MongoDB)",
  "RESTful API design and development",
  "Authentication and authorization mechanisms",
  "Understanding of server deployment and hosting (e.g., AWS, Heroku)",
  "Caching mechanisms and performance optimization",
  "Knowledge of security best practices (e.g., OWASP Top Ten)",
  "Handling of asynchronous operations",
  "Version control (e.g., Git)",
  "Familiarity with containerization (e.g., Docker) and orchestration (e.g., Kubernetes)",
];

const FULLSTACK_CHECKLIST = [
  "Proficiency in both frontend and backend technologies",
  "Ability to design and develop complete web applications",
  "Strong communication skills for collaborating with cross-functional teams",
  "Knowledge of the entire web development stack, from UI to databases",
  "Experience with integrating frontend and backend components",
  "Understanding of software architecture and system design",
  "Ability to work on both client-facing and server-side code",
  "Troubleshooting and debugging skills for the entire application stack",
  "Agile development and project management skills",
  "Continuous integration and continuous delivery (CI/CD) knowledge",
];

const JOB_TYPES = [
  "frontend developer",
  "software engineer",
  "backend developer",
  "fullstack developer",
  "UI & UX designer",
];

export default function Checklist(): JSX.Element {
  const { replace } = useRouter();
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const [selectedRole, setSelectedRole] = useState("");
  const [showChecklist, setShowChecklist] = useState(false);
  const [checklistToShow, setChecklistToShow] = useState<string[]>([]);
  const [progressColor, setProgressColor] = useState("#FFF");
  const [percentageChecked, setPercentageChecked] = useState(0);
  const [emoji, setEmoji] = useState("");

  const onProceed = () => {
    setShowChecklist(true);
    if (selectedRole === JOB_TYPES[0]) setChecklistToShow(FRONTEND_CHECKLIST);
    if (selectedRole === JOB_TYPES[2]) setChecklistToShow(BACKEND_CHECKLIST);
    if (selectedRole === JOB_TYPES[3]) setChecklistToShow(FULLSTACK_CHECKLIST);
  };

  const getProgressValue = (checked: string[]) => {
    const percentage = Number(
      ((checked.length / checklistToShow.length) * 100).toFixed(0)
    );
    setPercentageChecked(percentage);
    if (percentage <= 40) {
      setEmoji("🤨💩");
      setProgressColor("#ff5e5e");
    } else if (percentage >= 40 && percentage <= 70) {
      setProgressColor("#FFEB3B");
      setEmoji("🙂✨");
    } else if (percentage >= 70) {
      setProgressColor("#8fff8f");
      setEmoji("😎💪");
    }
    // updateDB(percentage);
  };

  async function updateDB(percentage: number) {
    await axios
      .post("/api/save-result", {
        percentage: percentage,
        role: selectedRole,
        uid: userId,
        createdAt: Date.now().toString(),
        fullName: user?.fullName,
        photo: user?.imageUrl,
      })
      .then(() => {})
      .catch((error) => toast.error(error.message));
  }

  useEffect(() => {
    if (isLoaded && !userId) replace(ROUTES.signIn);
  }, [isLoaded, replace, userId]);

  if (isLoaded)
    return (
      <>
        <div className="w-screen flex items-center justify-center flex-col">
          <main className="grid gap-10 py-10">
            <div>
              <h1 className="text-3xl">
                {showChecklist ? `${selectedRole} checklist` : "what are you?"}
              </h1>
              <p>
                {!showChecklist
                  ? "Select your current role from the options below"
                  : "Choose from below the skills that apply"}
              </p>
            </div>
            {!showChecklist ? (
              <div className="grid gap-5">
                <ul className="grid grid-cols-2 gap-5">
                  {JOB_TYPES.map((jobType, index: number) => (
                    <li key={index}>
                      <Button
                        onClick={() => setSelectedRole(jobType)}
                        className={`py-20 px-10 font-[600] text-xl ${
                          selectedRole === jobType && "bg-[#000] text-white"
                        }`}
                        variant="outline"
                      >
                        {jobType}
                      </Button>
                    </li>
                  ))}
                </ul>
                <Button
                  className="rounded-full gap-2 py-7 w-max"
                  onClick={onProceed}
                  disabled={!selectedRole}
                >
                  let&apos;s do this
                  <ArrowRight color="#FFF" />
                </Button>
              </div>
            ) : (
              <div>
                <Formik
                  initialValues={{
                    checked: [],
                  }}
                  onSubmit={(values: { checked: string[] }) =>
                    getProgressValue(values.checked)
                  }
                >
                  {({ values, submitForm, setFieldValue }) => (
                    <Form className="space-y-10">
                      <div
                        role="group"
                        aria-labelledby="checkbox-group"
                        className="flex flex-col gap-5"
                      >
                        {checklistToShow.map((item, index: number) => (
                          <label
                            className="flex gap-2 items-center cursor-pointer select-none"
                            key={index}
                          >
                            <Field
                              className="w-5 h-5 cursor-pointer"
                              type="checkbox"
                              name="checked"
                              value={item}
                              onClick={submitForm}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                      <div className="space-y-5">
                        <Progress color={progressColor} value={percentageChecked} />
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl">
                            {percentageChecked}% <span className="ml-3">{emoji}</span>
                          </h3>
                          <Button
                            className="rounded-full"
                            type="submit"
                            onClick={() => updateDB(percentageChecked)}
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </main>
        </div>
      </>
    );

  return <></>;
}
