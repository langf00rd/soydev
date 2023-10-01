import { motion } from "framer-motion";
import { JobTypeButtonProps } from "~/interface";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export default function JobTypeButton(props: JobTypeButtonProps): JSX.Element {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: props.id }}
    >
      <Button
        disabled={props.isComingSoon}
        onClick={() => props.onSelect(props.title)}
        className={`font-[600] text-xl w-full py-14 space-x-2 border-2 relative ${
          props.selectedRole === props.title && "border-primary bg-primary text-white"
        }`}
        variant="outline"
      >
        <div>{props.icon}</div>
        <p>{props.title}</p>
        {props.isComingSoon && (
          <Badge className="absolute bottom-2 right-2">coming soon</Badge>
        )}
      </Button>
    </motion.li>
  );
}
