import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/** merge class names */
export default function cn(...classNamesInput: ClassValue[]): string {
  return twMerge(clsx(classNamesInput));
}
