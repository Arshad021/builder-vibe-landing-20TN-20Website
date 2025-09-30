import { cn } from "@/lib/utils";

type BrandLogoSize = "sm" | "md" | "lg";

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  size?: BrandLogoSize;
  showText?: boolean;
  tone?: "dark" | "light";
};

const iconSizes: Record<BrandLogoSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

const textSizes: Record<BrandLogoSize, string> = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
};

function BrandLogo({
  className,
  iconClassName,
  textClassName,
  size = "md",
  showText = true,
  tone = "dark",
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex items-center justify-center rounded-2xl font-semibold uppercase tracking-[0.18em] text-white",
          "bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] shadow-[0_8px_22px_rgba(59,130,246,0.35)]",
          iconSizes[size],
          iconClassName,
        )}
      >
        TN
      </span>
      {showText ? (
        <span
          className={cn(
            "flex items-baseline gap-1 font-montserrat font-semibold tracking-[0.03em]",
            tone === "dark" ? "text-[#0C0801]" : "text-white",
            textSizes[size],
            textClassName,
          )}
        >
          <span>Tec</span>
          <span className="bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
            Next
          </span>
        </span>
      ) : null}
    </span>
  );
}

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;
