import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import { Menu, X, ChevronDown } from "lucide-react";
import BrandLogo from "./BrandLogo";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 text-sm font-medium font-montserrat transition-colors ${
    isActive
      ? "text-[#1F2A44]"
      : "text-[#55627C] hover:text-[#1F2A44]"
  }`;

const mobileLinkClass = "py-3 text-base font-medium font-montserrat text-[#1F2A44]";

const CubeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.1333 7.24555L20.9933 6.99555C20.8127 6.69324 20.558 6.44198 20.2533 6.26555L13.5433 2.39555C13.2395 2.2193 12.8946 2.12617 12.5433 2.12555H12.2533C11.902 2.12617 11.5571 2.2193 11.2533 2.39555L4.54332 6.27555C4.24029 6.45081 3.98858 6.70252 3.81332 7.00555L3.67332 7.25555C3.49707 7.55939 3.40394 7.90429 3.40332 8.25555V16.0055C3.40394 16.3568 3.49707 16.7017 3.67332 17.0055L3.81332 17.2555C3.99311 17.555 4.24381 17.8057 4.54332 17.9855L11.2633 21.8555C11.5656 22.0354 11.9115 22.1288 12.2633 22.1255H12.5433C12.8946 22.1249 13.2395 22.0318 13.5433 21.8555L20.2533 17.9755C20.5593 17.8042 20.812 17.5515 20.9833 17.2455L21.1333 16.9955C21.3074 16.6908 21.4004 16.3465 21.4033 15.9955V8.24555C21.4027 7.89429 21.3096 7.54939 21.1333 7.24555ZM12.2533 4.12555H12.5433L18.4033 7.50555L12.4033 10.9655L6.40332 7.50555L12.2533 4.12555ZM13.4033 19.6255L19.2533 16.2455L19.4033 15.9955V9.23555L13.4033 12.7055V19.6255Z"
      fill="#1F2A44"
    />
  </svg>
);

const mobileMenuSections = [
  {
    title: "Explore Our Services",
    items: [
      {
        icon: CubeIcon,
        title: "Digital Strategy",
        href: "/p/digital-strategy",
      },
      {
        icon: CubeIcon,
        title: "Digital Transmission Strategy",
        href: "/digital-transmissions",
      },
      { icon: CubeIcon, title: "eCommerce Suite", href: "/p/ecommerce" },
      { icon: CubeIcon, title: "Data Analytics", href: "/p/analytics" },
      {
        icon: CubeIcon,
        title: "Customer Experience",
        href: "/p/customer-experience",
      },
    ],
  },
  {
    title: "Additional Resources",
    items: [
      {
        icon: CubeIcon,
        title: "Cybersecurity Solutions",
        href: "/p/cybersecurity",
      },
      { icon: CubeIcon, title: "Project Success", href: "/p/project-success" },
      { icon: CubeIcon, title: "Contact Us", href: "/contact" },
      { icon: CubeIcon, title: "Careers", href: "/p/careers" },
    ],
  },
  {
    title: "More Information",
    items: [
      { icon: CubeIcon, title: "About Us", href: "/about" },
      { icon: CubeIcon, title: "Blog", href: "/p/blog" },
      { icon: CubeIcon, title: "Testimonials", href: "/p/testimonials" },
      { icon: CubeIcon, title: "FAQs", href: "/p/faqs" },
      { icon: CubeIcon, title: "Events", href: "/p/events" },
    ],
  },
  {
    title: "Connect With Us",
    items: [
      { icon: CubeIcon, title: "Social Media", href: "/p/social" },
      { icon: CubeIcon, title: "Newsletter", href: "/p/newsletter" },
      { icon: CubeIcon, title: "Support", href: "/p/support" },
      { icon: CubeIcon, title: "Resources", href: "/p/resources" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreLinksOpen, setMobileMoreLinksOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [mobileOpen]);

  useEffect(() => {
    const root = document.documentElement;
    if (mobileOpen) {
      root.classList.add("overflow-hidden");
    } else {
      root.classList.remove("overflow-hidden");
      setMobileMoreLinksOpen(false);
    }
    return () => root.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.classList.add("overflow-hidden");
    } else {
      root.classList.remove("overflow-hidden");
    }
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div className="sticky top-0 z-50 flex flex-col items-center self-stretch bg-white shadow-sm">
      <div className="flex h-[72px] w-full max-w-[1440px] px-6 md:px-10 xl:px-16 justify-between items-center">
        <div className="flex justify-between items-center flex-1">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <BrandLogo size="md" className="h-10" />
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <NavLink to="/" className={navLinkClass} end>
                Home Page
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Our Services
              </NavLink>
              <NavLink to="/p/project-success" className={navLinkClass}>
                Projects
              </NavLink>
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-sm font-medium font-montserrat text-[#55627C] transition-colors hover:text-[#1F2A44] focus-visible:outline-none"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpen((v) => !v)}
                >
                  More Links
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <MegaMenu open={open} onClose={() => setOpen(false)} />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link
              to="/contact"
              className="flex px-4 py-2 items-center justify-center rounded-full border border-[#D7DFF3] bg-white text-sm font-montserrat font-medium text-[#1F2A44] transition-colors hover:bg-[#F5F7FD]"
            >
              Contact
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-[#1F2A44] md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-white/80"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex h-16 items-center justify-between px-5 border-b border-[rgba(12,8,1,0.1)]">
            <Link to="/" className="flex items-center">
              <BrandLogo size="sm" className="h-9" />
            </Link>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-md text-[#1F2A44]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col px-5 py-4 pb-20 h-[calc(100vh-64px)] overflow-y-auto">
            <div className="flex flex-col gap-6 mb-6">
              <NavLink
                to="/"
                className={mobileLinkClass}
                onClick={() => setMobileOpen(false)}
                end
              >
                Home Page
              </NavLink>
              <NavLink
                to="/about"
                className={mobileLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className={mobileLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                Our Services
              </NavLink>
              <NavLink
                to="/p/project-success"
                className={mobileLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </NavLink>

              <div className="flex flex-col">
                <button
                  className="flex items-center justify-between py-3 text-base font-medium font-montserrat text-[#1F2A44]"
                  onClick={() => setMobileMoreLinksOpen(!mobileMoreLinksOpen)}
                  aria-expanded={mobileMoreLinksOpen}
                >
                  More Links
                  <ChevronDown
                    className={`h-6 w-6 transition-transform ${
                      mobileMoreLinksOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileMoreLinksOpen && (
                  <div className="mt-4 space-y-6">
                    {mobileMenuSections.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <div className="text-xs font-bold font-montserrat text-[#1F2A44] leading-[150%]">
                          {section.title}
                        </div>
                        <div className="space-y-2">
                          {section.items.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.title}
                                to={item.href}
                                className="flex h-10 items-center gap-3 px-0 py-2"
                                onClick={() => setMobileOpen(false)}
                              >
                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                                  <IconComponent />
                                </div>
                                <div className="text-xs font-bold font-montserrat text-[#1F2A44] leading-[150%]">
                                  {item.title}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto space-y-4 bg-white px-6 py-6 -mx-5">
              <div className="flex flex-col gap-4">
                <div className="text-xs font-normal font-montserrat text-[#55627C] leading-[150%]">
                  Ready to elevate your business?
                </div>
                <Link
                  to="/p/signup"
                  className="text-xs font-medium font-montserrat text-[#3A6FF1] leading-[150%] underline"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign up for free
                </Link>
              </div>

              <div className="flex flex-col items-center gap-6">
                <Link
                  to="/p/learn"
                  className="flex w-full items-center justify-center gap-2 rounded-full px-2 py-1 text-xs font-medium font-montserrat text-[#1F2A44]"
                  onClick={() => setMobileOpen(false)}
                >
                  <CubeIcon />
                  Learn
                </Link>
                <Link
                  to="/p/join"
                  className="flex w-full items-center justify-center gap-2 rounded-full px-2 py-1 text-xs font-semibold font-montserrat text-[#1F2A44]"
                  onClick={() => setMobileOpen(false)}
                >
                  <CubeIcon />
                  Join
                </Link>
              </div>
            </div>

            <div className="space-y-4 px-0 pt-6 pb-20">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center rounded-full border border-[#D7DFF3] px-[10px] py-2 text-xs font-medium font-montserrat text-[#1F2A44]"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
