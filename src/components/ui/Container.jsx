import { cn } from "@/lib/utils";

export default function Container({ children, className, as: Tag = "div", ...props }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)} {...props}>
      {children}
    </Tag>
  );
}
