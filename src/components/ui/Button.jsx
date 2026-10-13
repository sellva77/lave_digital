import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  icon,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-[#e60000] hover:bg-[#ff1a1a] text-white font-bold shadow-lg shadow-[#e60000]/25 hover:scale-[1.03] active:scale-[0.98]",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white hover:scale-[1.03] active:scale-[0.98] border border-white/10",
    white:
      "bg-white hover:bg-neutral-100 text-black font-extrabold shadow-md hover:scale-[1.03] active:scale-[0.98]",
    outline:
      "border border-white/20 text-white hover:border-[#e60000] hover:text-[#e60000] active:scale-[0.98]",
    "outline-light":
      "border border-white/30 text-white hover:bg-white hover:text-black active:scale-[0.98]",
    "outline-dark":
      "border border-neutral-300 text-neutral-700 hover:border-[#e60000] hover:text-[#e60000] active:scale-[0.98]",
    ghost:
      "text-white hover:bg-white/10 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    default: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
}
