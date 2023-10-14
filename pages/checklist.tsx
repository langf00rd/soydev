import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/Button";
import {
  FRONTEND_CHECKLIST,
  FULLSTACK_CHECKLIST,
  UI_UX_CHECKLIST,
} from "~/lib/constants/checklist";
import { Checklist, Entry } from "~/interface";
import Header from "~/components/Header";
import { JOB_TYPES } from "~/lib/constants";
import JobTypeButton from "~/components/JobTypeButton";
import CheckListForm from "~/components/CheckListForm";
import axios from "axios";
import  { toast } from "sonner";

export default function ChecklistPage(): JSX.Element {
  const [selectedRole, setSelectedRole] = useState("");
  const [checklistToShow, setChecklistToShow] = useState<Checklist[]>([]);
  const [checked, setChecked] = useState<string[]>([]);

  async function getUserEntryFromDB(): Promise<Entry | undefined> {
    try {
      const result = await axios.post("/api/get-user-entry");
      return result.data.data as Entry;
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    (async () => {
      const entry = await getUserEntryFromDB();
      if (!entry) return;
      console.log(entry);
      setSelectedRole(entry.role);
      setChecked(entry.checklist);
    })();
  }, []);

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
              checked={checked}
              checklistToShow={checklistToShow}
              selectedRole={selectedRole}
            />
          ) : (
            <div className="space-y-10">
              <ul className="gap-3 grid md:grid-cols-2 w-full">
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
                <Button variant="ghost" onClick={() => window.history.back()}>
                  cancel
                </Button>
                <Button onClick={onProceed} disabled={!selectedRole}>
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
