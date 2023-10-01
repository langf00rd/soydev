import { Progress } from "~/components/ui/Progress";
import { Button } from "../ui/Button";
import { useState } from "react";
import { saveResultInDB } from "~/services/saveResultsToDB";
import Loader from "../Loader";
import { ProgressFooterProps } from "~/interface";

export default function ProgressFooter(props: ProgressFooterProps): JSX.Element {
  const [loading, setLoading] = useState(false);
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
          className="bg-[#000] text-[#FFF]"
          variant="outline"
        >
          {loading ? <Loader /> : "Save"}
        </Button>
      </div>
    </div>
  );
}
