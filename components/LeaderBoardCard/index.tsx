import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { Result } from "~/interface";
import { motion } from "framer-motion";

export default function LeaderBoardCard(props: {
  result: Result;
  index: number;
}): JSX.Element {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: props.index / 10 }}
      className="p-5 border-b flex items-center justify-between"
    >
      <h2 className="text-2xl">#{props.result.rank}</h2>
      <div className="flex items-center space-x-2 w-full max-w-[700px]">
        <div className="relative">
          {props.result.percentage >= 80 &&
            props.result.rank &&
            props.result.rank <= 3 && (
              <span className="absolute top-[-12px] left-[-12px] bg-white shadow-xl rounded-full w-[27px] h-[27px] flex items-center justify-center">
                🏆
              </span>
            )}
          <Image
            src={props.result.photo}
            width={40}
            height={40}
            alt={`${props.result.fullName}'s photo`}
            className="rounded-full w-[42px] h-[40px] object-cover bg-gray-100"
          />
        </div>
        <p className="flex w-full justify-between items-center">
          <span className="text-[#000] font-[600]">{props.result.fullName}</span>
          <span className="border p-1 px-2 ml-2 rounded-md text-sm">
            {props.result.role}
          </span>
        </p>
      </div>
      <CircularProgress size="lg" value={props.result.percentage} showValueLabel={true} />
    </motion.li>
  );
}
