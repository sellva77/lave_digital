import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
  dark = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden",
        glass
          ? "glass-dark"
          : "bg-[#080d12] border border-white/10 text-white",
        hover && "card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
