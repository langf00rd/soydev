import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/Button";
import {
  FRONTEND_CHECKLIST,
  FULLSTACK_CHECKLIST,
  UI_UX_CHECKLIST,
} from "~/lib/data/checklist";
import { Checklist } from "~/interface";
import Header from "~/components/Header";
import { JOB_TYPES } from "~/lib/data";
import JobTypeButton from "~/components/JobTypeButton";
import CheckListForm from "~/components/CheckListForm";

export default function ChecklistPage(): JSX.Element {
  const [selectedRole, setSelectedRole] = useState("");
  const [checklistToShow, setChecklistToShow] = useState<Checklist[]>([]);

  const onProceed = () => {
    switch (selectedRole) {
      case JOB_TYPES[0].title:
        setChecklistToShow(FRONTEND_CHECKLIST);
        break;
      case JOB_TYPES[1].title:
        setChecklistToShow(FULLSTACK_CHECKLIST);
        break;
      case JOB_TYPES[2].title:
        setChecklistToShow(UI_UX_CHECKLIST);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center px-5">
        <main className="max-w-4xl w-full py-10 mx-auto space-y-10">
          <div>
            <h1 className="text-2xl md:text-3xl">
              {checklistToShow.length > 0
                ? `${selectedRole} checklist`
                : "what is your current role?"}
            </h1>
            <p>
              {checklistToShow.length > 0
                ? "choose from below the skills that apply"
                : "select your current role from the options below"}
            </p>
          </div>
          {checklistToShow.length > 0 ? (
            <CheckListForm
              checklistToShow={checklistToShow}
              selectedRole={selectedRole}
            />
          ) : (
            <div className="space-y-10">
              <ul className="gap-3 grid grid-cols-2 w-full">
                {JOB_TYPES.map((jobType) => (
                  <JobTypeButton
                    key={jobType.id}
                    id={jobType.id}
                    title={jobType.title}
                    selectedRole={selectedRole}
                    icon={jobType.icon}
                    isComingSoon={jobType.isComingSoon}
                    onSelect={() => setSelectedRole(jobType.title)}
                  />
                ))}
              </ul>
              <div className="flex items-center space-x-10 justify-end">
                <Button
                  variant="ghost"
                  className="text-md scale-[1.2]"
                  onClick={() => window.history.back()}
                >
                  cancel
                </Button>
                <Button
                  onClick={onProceed}
                  disabled={!selectedRole}
                  className="text-md scale-[1.2] bg-black rounded-full"
                >
                  continue
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
