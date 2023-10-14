import { Progress } from "~/components/ui/Progress";
import { Button } from "../ui/Button";
import { useState } from "react";
import Loader from "../Loader";
import { ProgressFooterProps } from "~/interface";
import axios from "axios";
import { toast } from "sonner";

export default function ProgressFooter(props: ProgressFooterProps): JSX.Element {
  const [loading, setLoading] = useState(false);

  async function saveResultInDB(
    percentage: number,
    data: {
      selectedRole: string;
      checkedItems: string[];
    }
  ) {
    try {
      await axios.post("/api/save-entry", {
        percentage: percentage,
        role: data.selectedRole,
        checklist: data.checkedItems,
        createdAt: Date.now().toString(),
      });
      toast.success("updated!");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className="fixed bottom-0 left-0 bg-white flex items-center justify-between p-5 w-screen border-t">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between space-x-5">
        {props.percentage > 0 && (
          <Progress color={props.progressColor} value={props.percentage} />
        )}
        <h2 className="text-xl">{props.percentage}%</h2>
        <Button
          disabled={props.percentage <= 0}
          onClick={async () => {
            setLoading(true);
            await saveResultInDB(props.percentage, {
              selectedRole: props.selectedRole,
              checkedItems: props.checkedItems,
            });
            setLoading(false);
          }}
        >
          {loading ? <Loader /> : "Save"}
        </Button>
      </div>
    </div>
  );
}
