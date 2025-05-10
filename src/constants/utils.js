import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const mc = (...inputs) => {
  return twMerge(clsx(inputs));
};


