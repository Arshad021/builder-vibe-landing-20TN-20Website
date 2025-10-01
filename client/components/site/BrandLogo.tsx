import { cn } from "@/lib/utils";

type BrandLogoSize = "sm" | "md" | "lg";

type BrandLogoProps = {
  className?: string;
  size?: BrandLogoSize;
};

const sizeClasses: Record<BrandLogoSize, string> = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

const LOGO_SRC =
  "https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F747cd8ae2913419bb0c028ef6da1c73f?format=webp&width=800";

function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="TecNext"
      className={cn("block w-auto object-contain", sizeClasses[size], className)}
      decoding="async"
      loading="lazy"
    />
  );
}

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;
