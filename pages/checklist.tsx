import { useAuth, useUser } from "@clerk/nextjs";
import { Field, Form, Formik } from "formik";
import {
  ArrowRight,
  Asterisk,
  Cable,
  Laptop2,
  MousePointerSquare,
  TrainTrack,
} from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/Button";
import { Progress } from "~/components/ui/Progress";
import ROUTES from "~/routes";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "~/components/Loader";
import {
  FRONTEND_CHECKLIST,
  BACKEND_CHECKLIST,
  FULLSTACK_CHECKLIST,
  UI_UX_CHECKLIST,
} from "~/data/checklist";
import { Checklist, JobType } from "~/interface";
import Header from "~/components/Header";

const JOB_TYPES: JobType[] = [
  {
    id: 0.1,
    title: "frontend developer",
    icon: <Asterisk />,
  },
  {
    id: 0.2,
    title: "software engineer",
    icon: <TrainTrack />,
  },
  {
    id: 0.3,
    title: "backend developer",
    icon: <Cable />,
  },
  {
    id: 0.4,
    title: "fullstack developer",
    icon: <Laptop2 />,
  },
  {
    id: 0.5,
    title: "UI & UX designer",
    icon: <MousePointerSquare />,
  },
];

export default function ChecklistPage(): JSX.Element {
  const { replace } = useRouter();
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [showChecklist, setShowChecklist] = useState(false);
  const [checklistToShow, setChecklistToShow] = useState<Checklist[]>([]);
  const [progressColor, setProgressColor] = useState("#FFF");
  const [percentageChecked, setPercentageChecked] = useState(0);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [emoji, setEmoji] = useState("");

  const onProceed = () => {
    setShowChecklist(true);
    if (selectedRole === JOB_TYPES[0].title) setChecklistToShow(FRONTEND_CHECKLIST);
    if (selectedRole === JOB_TYPES[2].title) setChecklistToShow(BACKEND_CHECKLIST);
    if (selectedRole === JOB_TYPES[3].title) setChecklistToShow(FULLSTACK_CHECKLIST);
    if (selectedRole === JOB_TYPES[4].title) setChecklistToShow(UI_UX_CHECKLIST);
  };

  const updateProgress = (checked: string[]) => {
    const percentage = Number(
      ((checked.length / checklistToShow.length) * 100).toFixed(0)
    );
    setPercentageChecked(percentage);
    if (percentage <= 40) {
      setEmoji("💩");
      setProgressColor("#ff5e5e");
    } else if (percentage >= 40 && percentage <= 70) {
      setProgressColor("#FFEB3B");
      setEmoji("✨");
    } else if (percentage >= 70) {
      setProgressColor("#8fff8f");
      setEmoji("🔥");
    }
  };

  async function updateDB(percentage: number) {
    setLoading(true);
    await axios
      .post("/api/save", {
        percentage: percentage,
        role: selectedRole,
        uid: user?.id,
        checklist: checkedItems,
        createdAt: Date.now().toString(),
        fullName: user?.fullName,
        photo: user?.imageUrl,
      })
      .then(() => toast.success("updated!"))
      .catch((error) => toast.error(error.message));
    setLoading(false);
  }

  useEffect(() => {
    if (isLoaded && !userId) replace(ROUTES.signIn);
  }, [isLoaded, replace, userId]);

  if (isLoaded)
    return (
      <>
        <Header />
        <div className="flex items-center justify-center px-5">
          <main className="max-w-4xl w-full py-10 mx-auto space-y-10">
            <div>
              <h1 className="text-2xl md:text-3xl">
                {showChecklist
                  ? `${selectedRole} checklist`
                  : "what is your current role?"}
              </h1>
              <p>
                {!showChecklist
                  ? "select your current role from the options below"
                  : "choose from below the skills that apply"}
              </p>
            </div>
            {!showChecklist ? (
              <div className="space-y-10">
                <ul className="gap-3 grid grid-cols-2 w-full">
                  {JOB_TYPES.map((jobType) => (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: jobType.id }}
                      key={jobType.id}
                    >
                      <Button
                        onClick={() => setSelectedRole(jobType.title)}
                        className={`font-[600] text-xl w-full py-10 space-x-2 ${
                          selectedRole === jobType.title &&
                          "border-2 border-primary bg-primary text-white"
                        }`}
                        variant="outline"
                      >
                        <div>{jobType.icon}</div>
                        <p>{jobType.title}</p>
                      </Button>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  onClick={onProceed}
                  disabled={!selectedRole}
                  variant="ghost"
                  className="text-xl gap-2 -ml-4"
                >
                  continue
                  <ArrowRight />
                </Button>
              </div>
            ) : (
              <Formik
                onSubmit={async (values: { checked: string[] }) => {
                  updateProgress(values.checked);
                  setCheckedItems(values.checked);
                }}
                initialValues={{
                  checked: [],
                }}
              >
                {({ submitForm }) => (
                  <>
                    <Form>
                      <div
                        role="group"
                        aria-labelledby="checkbox-group"
                        className="flex flex-col gap-5 mb-44"
                      >
                        {checklistToShow.map((listItem, index: number) => {
                          return (
                            <CheckListItem
                              submitForm={submitForm}
                              listItem={listItem}
                              key={index}
                            />
                          );
                        })}
                      </div>
                    </Form>
                    <div className="fixed bottom-0 left-0 bg-white flex items-center justify-between p-5 w-screen border-t">
                      <div className="max-w-4xl mx-auto w-full flex items-center justify-between space-x-5">
                        {percentageChecked > 0 && (
                          <Progress color={progressColor} value={percentageChecked} />
                        )}
                        <h2 className="text-xl">{percentageChecked}%</h2>
                        <Button
                          disabled={percentageChecked <= 0}
                          onClick={() => updateDB(percentageChecked)}
                          className="bg-[#000] text-[#FFF]"
                          variant="outline"
                        >
                          {loading ? <Loader /> : "Save"}
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Formik>
            )}
          </main>
        </div>
      </>
    );

  return <></>;
}

export function CheckListItem(props: {
  listItem: Checklist;
  submitForm: () => void;
}): JSX.Element {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div className="pb-3">
      {!props.listItem.hasChildren ? (
        <label className={styles.listItem} onClick={props.submitForm}>
          <Field
            type="checkbox"
            className={styles.checkbox}
            name="checked"
            value={props.listItem.label}
          />
          <p className={styles.listItemLabel}>{props.listItem.label}</p>
        </label>
      ) : (
        <>
          <div
            className={styles.listItem}
            onClick={() => {
              setShowChildren(!showChildren);
              props.submitForm();
            }}
          >
            <input
              onChange={() => {}}
              checked={showChildren}
              type="checkbox"
              className={styles.checkbox}
            />
            <p className={styles.listItemLabel}>{props.listItem.label}</p>
          </div>
          {showChildren && (
            <motion.div
              className="ml-2 space-y-5 mt-3 border-l border-dashed pl-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="md:text-xl opacity-50">{props.listItem.childrenLabel}</p>
              <motion.ul className="space-y-5">
                {props.listItem.children?.map((child, index: number) => (
                  <li key={index}>
                    <label className={styles.listItem} onClick={props.submitForm}>
                      <Field
                        type="checkbox"
                        className={styles.checkbox}
                        name="checked"
                        value={child}
                      />
                      <p className={styles.listItemLabel}>{child}</p>
                    </label>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  listItem: "flex items-center space-x-2 select-none",
  checkbox: "h-4 w-4",
  listItemLabel: "text-md md:text-xl text-[#000]",
};
