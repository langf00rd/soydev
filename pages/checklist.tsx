import { Field, Form, Formik } from "formik";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/Button";
import { Progress } from "~/components/ui/Progress";

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

  const getProgressValue = (checked: string[]): number => {
    const percentage = Number(
      ((checked.length / checklistToShow.length) * 100).toFixed(0)
    );

    setPercentageChecked(percentage);
    if (percentage < 40) {
      setEmoji("🤨💩");
      setProgressColor("#ff5e5e");
    } else if (percentage > 40 && percentage < 70) {
      setProgressColor("#FFEB3B");
      setEmoji("🙂✨");
    } else if (percentage > 70) {
      setProgressColor("#8fff8f");
      setEmoji("😎💪");
    }
    return percentage;
  };

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
            <>
              <Formik
                initialValues={{
                  checked: [],
                }}
                onSubmit={(values: { checked: string[] }) => console.log(values)}
              >
                {({ values }) => (
                  <Form className="space-y-10">
                    <div
                      role="group"
                      aria-labelledby="checkbox-group"
                      className="flex flex-col gap-5"
                    >
                      {checklistToShow.map((item, index: number) => (
                        <label
                          key={index}
                          className="flex gap-2 items-center cursor-pointer select-none"
                        >
                          <Field
                            className="w-5 h-5 cursor-pointer"
                            type="checkbox"
                            name="checked"
                            value={item}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                    <div className="space-y-5">
                      <Progress
                        //   className={`bg-${progressColor}`}
                        color={progressColor}
                        // style={{ background: progressColor }}
                        value={getProgressValue(values.checked)}
                      />
                      {percentageChecked > 0 && (
                        <h3 className="text-4xl">
                          {percentageChecked}% <span className="ml-3">{emoji}</span>
                        </h3>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </main>
      </div>
    </>
  );
}
