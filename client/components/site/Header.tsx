import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import { Menu, X } from "lucide-react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary/70" />
          <span className="font-extrabold tracking-tight">TecNext</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/p/solutions" className={navLinkClass}>
            Solutions
          </NavLink>
          <NavLink to="/p/pricing" className={navLinkClass}>
            Pricing
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
            >
              More
            </button>
            <MegaMenu open={open} onClose={() => setOpen(false)} />
          </div>
          <Link
            to="/p/contact"
            className="ml-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
          >
            Get started
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto space-y-1 py-3">
            <NavLink to="/" className={navLinkClass} end onClick={() => setMobileOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/p/solutions" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Solutions
            </NavLink>
            <NavLink to="/p/pricing" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Pricing
            </NavLink>
            <details className="group">
              <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">
                More
              </summary>
              <div className="grid grid-cols-1 gap-2 px-3 pb-3">
                {[
                  ["About", "/p/about"],
                  ["Blog", "/p/blog"],
                  ["Careers", "/p/careers"],
                  ["Contact", "/p/contact"],
                  ["Docs", "/p/docs"],
                  ["Changelog", "/p/changelog"],
                  ["Help Center", "/p/help"],
                  ["Status", "/p/status"],
                ].map(([label, to]) => (
                  <Link key={to} to={to} onClick={() => setMobileOpen(false)} className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
                    {label}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              to="/p/contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow"
              onClick={() => setMobileOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
