import { ReactNode } from "react";

interface ResponsiveHeroProps {
  title: string;
  description?: string;
  backgroundImage: string;
  imageAlt: string;
  eyebrow?: string;
  align?: "left" | "center";
  actions?: ReactNode;
}

export function ResponsiveHero({
  title,
  description,
  backgroundImage,
  imageAlt,
  eyebrow,
  align = "left",
  actions,
}: ResponsiveHeroProps) {
  const isCenterAligned = align === "center";

  return (
    <section className="relative flex min-h-[420px] flex-col justify-center overflow-hidden">
      <img
        src={backgroundImage}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
        <div
          className={`mx-auto flex w-full max-w-[1280px] ${
            isCenterAligned ? "justify-center" : "justify-start"
          }`}
        >
          <div
            className={`flex w-full max-w-[768px] flex-col gap-4 sm:gap-6 rounded-2xl bg-black/40 p-4 sm:p-6 md:p-8 backdrop-blur-sm ${
              isCenterAligned
                ? "items-center text-center"
                : "items-start text-left"
            }`}
          >
            {eyebrow ? (
              <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="font-alata text-4xl font-normal leading-[120%] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {title}
            </h1>
            {description ? (
              <p className="font-montserrat text-base font-normal leading-[150%] text-white sm:text-lg">
                {description}
              </p>
            ) : null}
            {actions ? (
              <div className="mt-2 flex flex-wrap items-center gap-4">
                {actions}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
