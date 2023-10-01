import { Form, Formik } from "formik";
import { CheckListItem } from "../CheckListItem";
import { Checklist } from "~/interface";
import ProgressFooter from "../ProgressFooter";
import useProgress from "~/hooks/useProgress";
import { useState } from "react";

export default function CheckListForm(props: {
  checklistToShow: Checklist[];
  selectedRole: string;
}): JSX.Element {
  const { onProgressUpdate, percentage, progressColor } = useProgress();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  return (
    <Formik
      onSubmit={async (values: { checked: string[] }) => {
        onProgressUpdate(values.checked, props.checklistToShow.length);
        setCheckedItems(values.checked);
      }}
      initialValues={{
        checked: [],
      }}
    >
      {({ submitForm }) => (
        <>
          <Form
            role="group"
            aria-labelledby="checkbox-group"
            className="flex flex-col gap-5 pb-[6rem]"
          >
            {props.checklistToShow.map((item, index: number) => (
              <CheckListItem submitForm={submitForm} listItem={item} key={index} />
            ))}
          </Form>
          <ProgressFooter
            selectedRole={props.selectedRole}
            checkedItems={checkedItems}
            percentage={percentage}
            progressColor={progressColor}
          />
        </>
      )}
    </Formik>
  );
}
