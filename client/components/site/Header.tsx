import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import { Menu, X, ChevronDown } from "lucide-react";
import BrandLogo from "./BrandLogo";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 text-base font-normal font-montserrat transition-colors ${
    isActive ? "text-[#0C0801]" : "text-[#0C0801] hover:text-[#0C0801]/80"
  }`;

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
      fill="#0C0801"
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
    <div className="flex flex-col items-center self-stretch bg-[#EBF2FE] relative">
      <div className="flex h-[72px] px-16 justify-between items-center self-stretch">
        <div className="flex justify-between items-center flex-1">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <BrandLogo />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" className={navLinkClass} end>
                Home Page
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Our Services
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
              <div className="relative">
                <button
                  className="flex justify-center items-center gap-1 text-[#0C0801] font-montserrat text-base font-normal leading-[150%] focus-visible:outline-none hover:text-[#0C0801]/80 transition-colors"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpen((v) => !v)}
                >
                  More Links
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3977 15.6634C12.178 15.8831 11.8219 15.8831 11.6022 15.6634L5.86739 9.92853C5.64772 9.70886 5.64772 9.35276 5.86739 9.13308L6.13256 8.86788C6.35222 8.64821 6.70838 8.64821 6.92805 8.86788L12 13.9398L17.0719 8.86788C17.2916 8.64821 17.6477 8.64821 17.8674 8.86788L18.1326 9.13308C18.3522 9.35276 18.3522 9.70886 18.1326 9.92853L12.3977 15.6634Z"
                      fill="#0C0801"
                    />
                  </svg>
                </button>
                <MegaMenu open={open} onClose={() => setOpen(false)} />
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center gap-4">
            <Link
              to="/contact"
              className="flex px-[10px] py-1 justify-center items-center gap-2 rounded-full border border-[rgba(12,8,1,0.15)] text-[#0C0801] font-montserrat text-base font-normal leading-[150%] hover:bg-gray-50"
            >
              Contact
            </Link>
            <Link
              to="/p/explore"
              className="flex px-[10px] py-1 justify-center items-center gap-2 rounded-full border border-[#3B82F6] bg-[#3B82F6] text-white font-montserrat text-base font-normal leading-[150%] hover:opacity-90"
            >
              Explore
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0C0801] md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-[#EBF2FE]"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#EBF2FE] md:hidden">
          <div className="flex h-16 items-center justify-between px-5 border-b border-[rgba(12,8,1,0.15)]">
            <Link to="/" className="flex items-center">
              <BrandLogo />
            </Link>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-md text-[#0C0801]"
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
                className="py-3 text-base font-normal font-montserrat text-[#0C0801]"
                onClick={() => setMobileOpen(false)}
                end
              >
                Home Page
              </NavLink>
              <NavLink
                to="/services"
                className="py-3 text-base font-normal font-montserrat text-[#0C0801]"
                onClick={() => setMobileOpen(false)}
              >
                Our Services
              </NavLink>
              <NavLink
                to="/about"
                className="py-3 text-base font-normal font-montserrat text-[#0C0801]"
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </NavLink>

              <div className="flex flex-col">
                <button
                  className="flex items-center justify-between py-3 text-base font-normal font-montserrat text-[#0C0801]"
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
                        <div className="text-xs font-bold font-montserrat text-[#0C0801] leading-[150%]">
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
                                <div className="text-xs font-bold font-montserrat text-[#0C0801] leading-[150%]">
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

            <div className="mt-auto space-y-4 bg-[#EBF2FE] px-6 py-6 -mx-5">
              <div className="flex flex-col gap-4">
                <div className="text-xs font-normal font-montserrat text-[#0C0801] leading-[150%]">
                  Ready to elevate your business?
                </div>
                <Link
                  to="/p/signup"
                  className="text-xs font-normal font-montserrat text-[#0C0801] leading-[150%] underline"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign up for free
                </Link>
              </div>

              <div className="flex flex-col items-center gap-6">
                <Link
                  to="/p/learn"
                  className="flex w-full items-center justify-center gap-2 rounded-full px-2 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  <CubeIcon />
                  <span className="text-xs font-medium font-montserrat text-[#0C0801] leading-[150%]">
                    Learn
                  </span>
                </Link>
                <Link
                  to="/p/join"
                  className="flex w-full items-center justify-center gap-2 rounded-full px-2 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  <CubeIcon />
                  <span className="text-xs font-medium font-montserrat text-[#0C0801] leading-[150%]">
                    Join
                  </span>
                </Link>
              </div>
            </div>

            <div className="space-y-4 px-0 pt-6 pb-20">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center rounded-full border border-[rgba(12,8,1,0.15)] px-[10px] py-1 text-xs font-medium font-montserrat text-[#0C0801]"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/p/explore"
                className="flex w-full items-center justify-center rounded-full bg-[#3B82F6] border border-[#3B82F6] px-[10px] py-1 text-xs font-medium font-montserrat text-white"
                onClick={() => setMobileOpen(false)}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
