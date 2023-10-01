import { ClassValue } from "class-variance-authority/types";
import cn from "~/lib/utils/cn.util";

export default function Loader(props: { className?: ClassValue }): JSX.Element {
  return (
    <main className="w-full h-full py-20 flex items-center justify-center">
      <span className={cn("loader", props.className)}></span>
    </main>
  );
}
