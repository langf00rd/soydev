import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import cn from "~/utils/cn.util";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, color, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className="relative h-2 w-full overflow-hidden rounded-full bg-[#F1F1F1]"
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-primary transition-all progress-bg",
        className
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)`, background: color }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
