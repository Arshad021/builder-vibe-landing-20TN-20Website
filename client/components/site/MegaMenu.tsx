import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Briefcase, HelpCircle, Newspaper, Phone, Sparkles, Users, Wrench } from "lucide-react";

interface Item {
  icon: React.ElementType;
  title: string;
  description: string;
  to: string;
}

const items: Item[] = [
  { icon: Users, title: "About", description: "Learn about our mission and team", to: "/p/about" },
  { icon: Newspaper, title: "Blog", description: "Insights, tutorials, and news", to: "/p/blog" },
  { icon: Briefcase, title: "Careers", description: "Join us and build the future", to: "/p/careers" },
  { icon: Phone, title: "Contact", description: "Get in touch with our team", to: "/p/contact" },
  { icon: BookOpen, title: "Docs", description: "Developer guides and API", to: "/p/docs" },
  { icon: Wrench, title: "Changelog", description: "What shipped recently", to: "/p/changelog" },
  { icon: HelpCircle, title: "Help Center", description: "FAQs and support articles", to: "/p/help" },
  { icon: Sparkles, title: "Status", description: "Live service health dashboard", to: "/p/status" },
];

export default function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, onClose]);

  return (
    <div
      className={`absolute left-1/2 top-full z-40 w-[min(96vw,1050px)] -translate-x-1/2 pt-4 ${open ? "block" : "hidden"}`}
      aria-hidden={!open}
    >
      <div
        ref={panelRef}
        className="rounded-xl border bg-card shadow-2xl ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-card/80"
      >
        <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description, to }) => (
            <Link
              key={title}
              to={to}
              className="group rounded-lg p-4 transition hover:bg-accent focus:bg-accent focus:outline-none"
              onClick={onClose}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary/15">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="mt-3 font-semibold text-foreground group-hover:text-foreground">{title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
        <div className="border-t p-4 text-xs text-muted-foreground sm:flex sm:items-center sm:justify-between">
          <p>Looking for something else? Explore our full sitemap.</p>
          <Link to="/p/sitemap" className="mt-2 inline-flex text-primary hover:underline sm:mt-0" onClick={onClose}>
            View sitemap →
          </Link>
        </div>
      </div>
    </div>
  );
}
