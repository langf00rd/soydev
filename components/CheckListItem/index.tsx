import { motion } from "framer-motion";
import { Field } from "formik";
import { useState } from "react";
import { Checklist } from "~/interface";

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
            <div className="ml-2 space-y-5 mt-3 border-l border-dashed pl-5">
              <p className="md:text-xl opacity-50">{props.listItem.childrenLabel}</p>
              <motion.ul className="space-y-5">
                {props.listItem.children?.map((child, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index / 20 }}
                  >
                    <label className={styles.listItem} onClick={props.submitForm}>
                      <Field
                        type="checkbox"
                        className={styles.checkbox}
                        name="checked"
                        value={child}
                      />
                      <p className={styles.listItemLabel}>{child}</p>
                    </label>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  listItem: "flex items-center cursor-pointer hover:opacity-50 transition-all space-x-2 select-none",
  checkbox: "h-4 w-4",
  listItemLabel: "text-md md:text-xl text-[#000]",
};
