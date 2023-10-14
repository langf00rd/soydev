import { Form, Formik } from "formik";
import { CheckListItem } from "../CheckListItem";
import { Checklist } from "~/interface";
import ProgressFooter from "../ProgressFooter";
import useProgress from "~/hooks/useProgress";
import { useEffect, useState } from "react";

export default function CheckListForm(props: {
  checklistToShow: Checklist[];
  checked: string[];
  selectedRole: string;
}): JSX.Element {
  const { onProgressUpdate, percentage, progressColor } = useProgress();
  const [checkedItems, setCheckedItems] = useState<string[]>(props.checked);

  useEffect(() => {
    onProgressUpdate(checkedItems, props.checklistToShow.length);
  }, [checkedItems, onProgressUpdate, props.checklistToShow.length]);

  return (
    <Formik
      initialValues={{
        checked: checkedItems,
      }}
      onSubmit={async (values: { checked: string[] }) => {
        onProgressUpdate(values.checked, props.checklistToShow.length);
        setCheckedItems(values.checked);
        // console.log(values.checked, props.checklistToShow);

        for (let a = 0; a < values.checked.length; a++) {
          const element = values.checked[a];
          const x = props.checklistToShow.filter((item) => item.label === element);
          console.log(element);
        }

        // localStorage.setItem("__soydev_entry__", JSON.stringify(values.checked));
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
