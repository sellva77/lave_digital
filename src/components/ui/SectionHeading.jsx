import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  highlightedWord,
  description,
  align = "center",
  dark = false,
  className,
}) {
  const alignments = {
    center: "text-center mx-auto",
    left: "text-left",
  };

  // If highlightedWord is provided, replace it in the title with a gradient span
  const renderTitle = () => {
    if (!highlightedWord) return title;
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlightedWord}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <div className={cn("max-w-3xl mb-14", alignments[align], className)}>
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-sm font-semibold tracking-widest uppercase mb-4",
            dark ? "text-primary" : "text-primary"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight",
          dark ? "text-white" : "text-text-primary"
        )}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-text-on-dark-secondary" : "text-text-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
