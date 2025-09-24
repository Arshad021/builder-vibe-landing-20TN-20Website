import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 text-base font-normal font-montserrat transition-colors ${
    isActive ? "text-[#0C0801]" : "text-[#0C0801] hover:text-[#0C0801]/80"
  }`;

// Mobile menu icons
const CubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M21.1333 7.24555L20.9933 6.99555C20.8127 6.69324 20.558 6.44198 20.2533 6.26555L13.5433 2.39555C13.2395 2.2193 12.8946 2.12617 12.5433 2.12555H12.2533C11.902 2.12617 11.5571 2.2193 11.2533 2.39555L4.54332 6.27555C4.24029 6.45081 3.98858 6.70252 3.81332 7.00555L3.67332 7.25555C3.49707 7.55939 3.40394 7.90429 3.40332 8.25555V16.0055C3.40394 16.3568 3.49707 16.7017 3.67332 17.0055L3.81332 17.2555C3.99311 17.555 4.24381 17.8057 4.54332 17.9855L11.2633 21.8555C11.5656 22.0354 11.9115 22.1288 12.2633 22.1255H12.5433C12.8946 22.1249 13.2395 22.0318 13.5433 21.8555L20.2533 17.9755C20.5593 17.8042 20.812 17.5515 20.9833 17.2455L21.1333 16.9955C21.3074 16.6908 21.4004 16.3465 21.4033 15.9955V8.24555C21.4027 7.89429 21.3096 7.54939 21.1333 7.24555ZM12.2533 4.12555H12.5433L18.4033 7.50555L12.4033 10.9655L6.40332 7.50555L12.2533 4.12555ZM13.4033 19.6255L19.2533 16.2455L19.4033 15.9955V9.23555L13.4033 12.7055V19.6255Z" fill="#0C0801"/>
  </svg>
);

// Mobile menu data structure
const mobileMenuSections = [
  {
    title: "Explore Our Services",
    items: [
      { icon: CubeIcon, title: "Digital Strategy", href: "/p/digital-strategy" },
      { icon: CubeIcon, title: "eCommerce Suite", href: "/p/ecommerce" },
      { icon: CubeIcon, title: "Data Analytics", href: "/p/analytics" },
      { icon: CubeIcon, title: "Customer Experience", href: "/p/customer-experience" }
    ]
  },
  {
    title: "Additional Resources", 
    items: [
      { icon: CubeIcon, title: "Cybersecurity Solutions", href: "/p/cybersecurity" },
      { icon: CubeIcon, title: "Project Success", href: "/p/project-success" },
      { icon: CubeIcon, title: "Contact Us", href: "/contact" },
      { icon: CubeIcon, title: "Careers", href: "/p/careers" }
    ]
  },
  {
    title: "More Information",
    items: [
      { icon: CubeIcon, title: "About Us", href: "/about" },
      { icon: CubeIcon, title: "Blog", href: "/p/blog" },
      { icon: CubeIcon, title: "Testimonials", href: "/p/testimonials" },
      { icon: CubeIcon, title: "FAQs", href: "/p/faqs" },
      { icon: CubeIcon, title: "Events", href: "/p/events" }
    ]
  },
  {
    title: "Connect With Us",
    items: [
      { icon: CubeIcon, title: "Social Media", href: "/p/social" },
      { icon: CubeIcon, title: "Newsletter", href: "/p/newsletter" },
      { icon: CubeIcon, title: "Support", href: "/p/support" },
      { icon: CubeIcon, title: "Resources", href: "/p/resources" }
    ]
  }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreLinksOpen, setMobileMoreLinksOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [mobileOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    const root = document.documentElement;
    if (mobileOpen) {
      root.classList.add("overflow-hidden");
    } else {
      root.classList.remove("overflow-hidden");
      setMobileMoreLinksOpen(false); // Close more links when mobile menu closes
    }
    return () => root.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  // Prevent background scroll when desktop mega menu is open
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
    <header className="w-full bg-[#EBF2FE] relative z-50">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 md:px-16">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex h-9 w-[84px] items-center justify-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fd33705d7954348df87f7339d5356a49a?format=webp&width=800" alt="TecNext logo" className="h-9 w-auto" />
            <svg className="hidden" width="70" height="36" viewBox="0 0 71 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_9234_1679)">
                <path d="M67.3145 17.2071L67.2774 17.2443C67.5376 16.5381 68.0579 16.2779 68.5039 16.2779C69.1358 16.2779 69.6933 16.7611 69.6933 17.4673C69.6933 17.616 69.6933 17.8018 69.619 18.0248C68.3181 21.37 65.5676 23.0797 62.8915 23.3399C61.665 25.4213 59.6579 26.9452 56.7959 26.9452C52.7074 26.9452 50.8862 23.7116 50.8862 20.1806C50.8862 15.8319 53.6367 11 58.2455 11C59.249 11 60.1039 11.2231 60.8101 11.5204C62.8915 12.3009 64.2296 15.0142 64.2296 17.9133C64.2296 18.8425 64.1552 19.7717 63.9322 20.6638C65.3075 20.1806 66.6083 19.0655 67.3145 17.2071ZM59.5464 14.0478V14.0107C58.7287 14.0107 58.2455 15.0885 58.2455 16.3894C58.2455 18.285 59.2862 20.0319 60.9216 20.6638C61.1818 19.8461 61.2933 18.9169 61.2933 17.839C61.2933 15.7576 60.6614 14.0478 59.5464 14.0478ZM56.8331 24.2319C57.8738 24.2319 58.9145 23.7859 59.7322 22.8567C57.3163 21.7788 55.7924 19.2514 55.7924 16.8354C55.7924 16.0177 55.9411 15.1629 56.1641 14.4195C54.6774 15.6461 53.8225 18.062 53.8225 20.1806C53.8225 22.931 55.1234 24.2319 56.8331 24.2319Z" fill="#0C0801"/>
                <path d="M51.4601 17.2071L51.4229 17.2443C51.6831 16.5381 52.1291 16.2408 52.5751 16.2408C53.207 16.2408 53.8388 16.7983 53.8388 17.5045C53.8388 17.6903 53.8017 17.839 53.7273 18.0248C52.2778 21.5558 50.122 25.6815 46.6654 28.0974L46.5911 28.8408C46.1822 33.301 43.915 36.1257 41.053 36.1257C38.8972 36.1257 37.6335 34.639 37.6335 32.8921C37.6335 29.7328 40.8671 28.5806 43.8778 26.6479C43.9521 25.8673 43.9893 24.9753 44.0264 23.9717C42.5397 25.6071 40.9415 26.2762 39.5291 26.2762C36.7043 26.2762 34.3999 23.9717 34.3999 20.4408C34.3999 15.0142 37.968 11.4461 41.945 11.4461H41.9822C44.6955 11.4461 47.5946 12.8956 47.5946 15.4974C47.5946 16.3523 47.2229 20.9983 46.9256 24.6036C48.9326 22.708 50.6052 19.6231 51.4601 17.2071ZM39.9379 23.6001C41.3132 23.6001 43.1716 22.7452 44.3238 18.5452C44.5096 17.616 44.6211 16.7983 44.584 15.8319C44.361 14.8284 43.5061 14.2337 42.2795 14.2337C39.7521 14.2337 37.3362 16.6496 37.3362 20.3293C37.3362 22.5594 38.3769 23.6001 39.9379 23.6001ZM41.3503 33.4125H41.3875C42.168 33.4125 43.0229 32.8921 43.5804 29.547C41.945 30.5133 40.4211 31.4797 40.4211 32.6319C40.4211 33.1151 40.7928 33.4125 41.3503 33.4125Z" fill="#0C0801"/>
                <path d="M35.0518 17.2071L35.0147 17.2443C35.2748 16.5381 35.7952 16.2779 36.2412 16.2779C36.8731 16.2779 37.4306 16.7611 37.4306 17.4673C37.4306 17.616 37.4306 17.8018 37.3563 18.0248C36.0554 21.37 33.3049 23.0797 30.6288 23.3399C29.4023 25.4213 27.3952 26.9452 24.5332 26.9452C20.4447 26.9452 18.6235 23.7116 18.6235 20.1806C18.6235 15.8319 21.3739 11 25.9828 11C26.9863 11 27.8412 11.2231 28.5474 11.5204C30.6288 12.3009 31.9669 15.0142 31.9669 17.9133C31.9669 18.8425 31.8925 19.7717 31.6695 20.6638C33.0448 20.1806 34.3456 19.0655 35.0518 17.2071ZM27.2837 14.0478V14.0107C26.466 14.0107 25.9828 15.0885 25.9828 16.3894C25.9828 18.285 27.0235 20.0319 28.6589 20.6638C28.9191 19.8461 29.0306 18.9169 29.0306 17.839C29.0306 15.7576 28.3987 14.0478 27.2837 14.0478ZM24.5704 24.2319C25.6111 24.2319 26.6518 24.1541 27.4695 22.8567C25.0536 21.7788 23.5297 19.2514 23.5297 16.8354C23.5297 16.0177 23.6784 15.1629 23.9014 14.4195C22.4147 15.6461 21.5598 18.062 21.5598 20.1806C21.5598 22.931 22.8607 24.2319 24.5704 24.2319Z" fill="#0C0801"/>
                <path d="M20.5127 16.0338C19.9923 16.0338 19.5463 16.294 19.2489 17.0002C18.2826 19.4533 16.2754 23.6162 14.2311 23.6162C12.9439 23.6162 11.9478 23.3251 10.9412 23.0309C9.9133 22.7305 8.87449 22.4268 7.5036 22.4268C7.0204 22.4268 6.35136 22.5012 5.71949 22.6127C7.62307 20.0169 8.33421 16.8732 9.02329 10.9309C7.72583 10.8483 6.67042 10.6086 5.90114 10.3665C5.07949 17.903 4.14643 20.7766 0.738861 23.6162C0.292834 23.9879 0.0698242 24.5083 0.0698242 25.0287C0.0698242 25.8464 0.776036 26.5526 1.66809 26.5526C1.96544 26.5526 2.29995 26.4411 2.63447 26.2924C4.53009 25.4375 5.68232 25.2145 7.09474 25.2145C7.99291 25.2145 9.06765 25.4714 10.2183 25.7463C11.5437 26.0631 12.9698 26.4039 14.3427 26.4039C17.3533 26.4039 19.3233 23.4676 21.5162 17.7807C21.6278 17.5949 21.6649 17.3719 21.6649 17.186C21.6649 16.4798 21.1074 16.0338 20.5127 16.0338Z" fill="#0C0801"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.08949 8.82842C6.76258 9.06339 7.8134 9.33695 9.17583 9.41788L9.39884 9.41777C13.5989 9.41777 16.3495 6.81595 16.3495 3.69376C16.3495 1.68664 14.7883 0.125549 12.5953 0.125549C9.65902 0.125549 7.61474 2.13267 6.57401 6.10974C5.2731 5.40353 4.38105 4.13979 3.93502 2.54153C3.712 1.76098 3.22881 1.27778 2.55976 1.27778C1.74205 1.27778 1.22168 1.90966 1.22168 2.76454C1.22168 5.29203 3.19164 7.708 6.09081 8.82307L6.08949 8.82842ZM9.62185 6.70444C10.1793 4.13979 11.0714 2.91322 12.2608 2.91322C12.8927 2.91322 13.3015 3.28491 13.3015 3.95395C13.3015 5.18052 12.0006 6.6301 9.62185 6.70444Z" fill="#0C0801"/>
              </g>
              <defs>
                <clipPath id="clip0_9234_1679">
                  <rect width="70" height="36" fill="white" transform="translate(0.0698242 0.125549)"/>
                </clipPath>
              </defs>
            </svg>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={navLinkClass} end>
              Home Page
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Our Services
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-base font-normal font-montserrat text-[#0C0801] hover:text-[#0C0801]/80 focus-visible:outline-none"
                aria-expanded={open}
                aria-haspopup="true"
                onClick={() => setOpen((v) => !v)}
              >
                More Links
                <ChevronDown className="h-6 w-6" />
              </button>
              <MegaMenu open={open} onClose={() => setOpen(false)} />
            </div>
          </nav>
        </div>

        {/* Backdrop to cover page when mega menu is open (desktop) */}
        {open && (
          <div
            className="fixed inset-0 top-[72px] z-40 bg-[#EBF2FE]"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/contact"
            className="rounded-full border border-[rgba(12,8,1,0.15)] px-[10px] py-1 text-base font-normal font-montserrat text-[#0C0801] hover:bg-gray-50"
          >
            Contact
          </Link>
          <Link
            to="/p/explore"
            className="rounded-full bg-[#3B82F6] border border-[#3B82F6] px-[10px] py-1 text-base font-normal font-montserrat text-white hover:opacity-90"
          >
            Explore
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-[#0C0801] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu - New Figma Design */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#EBF2FE] md:hidden">
          {/* Mobile navbar */}
          <div className="flex h-16 items-center justify-between px-5 border-b border-[rgba(12,8,1,0.15)]">
            <Link to="/" className="flex h-9 w-[84px] items-center justify-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fd33705d7954348df87f7339d5356a49a?format=webp&width=800" alt="TecNext logo" className="h-9 w-auto" />
              <svg className="hidden" width="70" height="36" viewBox="0 0 71 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9229_1312)">
                  <path d="M67.3145 17.2071L67.2774 17.2443C67.5376 16.5381 68.0579 16.2779 68.5039 16.2779C69.1358 16.2779 69.6933 16.7611 69.6933 17.4673C69.6933 17.616 69.6933 17.8018 69.619 18.0248C68.3181 21.37 65.5676 23.0797 62.8915 23.3399C61.665 25.4213 59.6579 26.9452 56.7959 26.9452C52.7074 26.9452 50.8862 23.7116 50.8862 20.1806C50.8862 15.8319 53.6367 11 58.2455 11C59.249 11 60.1039 11.2231 60.8101 11.5204C62.8915 12.3009 64.2296 15.0142 64.2296 17.9133C64.2296 18.8425 64.1552 19.7717 63.9322 20.6638C65.3075 20.1806 66.6083 19.0655 67.3145 17.2071ZM59.5464 14.0478V14.0107C58.7287 14.0107 58.2455 15.0885 58.2455 16.3894C58.2455 18.285 59.2862 20.0319 60.9216 20.6638C61.1818 19.8461 61.2933 18.9169 61.2933 17.839C61.2933 15.7576 60.6614 14.0478 59.5464 14.0478ZM56.8331 24.2319C57.8738 24.2319 58.9145 23.7859 59.7322 22.8567C57.3163 21.7788 55.7924 19.2514 55.7924 16.8354C55.7924 16.0177 55.9411 15.1629 56.1641 14.4195C54.6774 15.6461 53.8225 18.062 53.8225 20.1806C53.8225 22.931 55.1234 24.2319 56.8331 24.2319Z" fill="#0C0801"/>
                  <path d="M51.4601 17.2071L51.4229 17.2443C51.6831 16.5381 52.1291 16.2408 52.5751 16.2408C53.207 16.2408 53.8388 16.7983 53.8388 17.5045C53.8388 17.6903 53.8017 17.839 53.7273 18.0248C52.2778 21.5558 50.122 25.6815 46.6654 28.0974L46.5911 28.8408C46.1822 33.301 43.915 36.1257 41.053 36.1257C38.8972 36.1257 37.6335 34.639 37.6335 32.8921C37.6335 29.7328 40.8671 28.5806 43.8778 26.6479C43.9521 25.8673 43.9893 24.9753 44.0264 23.9717C42.5397 25.6071 40.9415 26.2762 39.5291 26.2762C36.7043 26.2762 34.3999 23.9717 34.3999 20.4408C34.3999 15.0142 37.968 11.4461 41.945 11.4461H41.9822C44.6955 11.4461 47.5946 12.8956 47.5946 15.4974C47.5946 16.3523 47.2229 20.9983 46.9256 24.6036C48.9326 22.708 50.6052 19.6231 51.4601 17.2071ZM39.9379 23.6001C41.3132 23.6001 43.1716 22.7452 44.3238 18.5452C44.5096 17.616 44.6211 16.7983 44.584 15.8319C44.361 14.8284 43.5061 14.2337 42.2795 14.2337C39.7521 14.2337 37.3362 16.6496 37.3362 20.3293C37.3362 22.5594 38.3769 23.6001 39.9379 23.6001ZM41.3503 33.4125H41.3875C42.168 33.4125 43.0229 32.8921 43.5804 29.547C41.945 30.5133 40.4211 31.4797 40.4211 32.6319C40.4211 33.1151 40.7928 33.4125 41.3503 33.4125Z" fill="#0C0801"/>
                  <path d="M35.0518 17.2071L35.0147 17.2443C35.2748 16.5381 35.7952 16.2779 36.2412 16.2779C36.8731 16.2779 37.4306 16.7611 37.4306 17.4673C37.4306 17.616 37.4306 17.8018 37.3563 18.0248C36.0554 21.37 33.3049 23.0797 30.6288 23.3399C29.4023 25.4213 27.3952 26.9452 24.5332 26.9452C20.4447 26.9452 18.6235 23.7116 18.6235 20.1806C18.6235 15.8319 21.3739 11 25.9828 11C26.9863 11 27.8412 11.2231 28.5474 11.5204C30.6288 12.3009 31.9669 15.0142 31.9669 17.9133C31.9669 18.8425 31.8925 19.7717 31.6695 20.6638C33.0448 20.1806 34.3456 19.0655 35.0518 17.2071ZM27.2837 14.0478V14.0107C26.466 14.0107 25.9828 15.0885 25.9828 16.3894C25.9828 18.285 27.0235 20.0319 28.6589 20.6638C28.9191 19.8461 29.0306 18.9169 29.0306 17.839C29.0306 15.7576 28.3987 14.0478 27.2837 14.0478ZM24.5704 24.2319C25.6111 24.2319 26.6518 23.7859 27.4695 22.8567C25.0536 21.7788 23.5297 19.2514 23.5297 16.8354C23.5297 16.0177 23.6784 15.1629 23.9014 14.4195C22.4147 15.6461 21.5598 18.062 21.5598 20.1806C21.5598 22.931 22.8607 24.2319 24.5704 24.2319Z" fill="#0C0801"/>
                  <path d="M20.5127 16.0338C19.9923 16.0338 19.5463 16.294 19.2489 17.0002C18.2826 19.4533 16.2754 23.6162 14.2311 23.6162C12.9439 23.6162 11.9478 23.3251 10.9412 23.0309C9.9133 22.7305 8.87449 22.4268 7.5036 22.4268C7.0204 22.4268 6.35136 22.5012 5.71949 22.6127C7.62307 20.0169 8.33421 16.8732 9.02329 10.9309C7.72583 10.8483 6.67042 10.6086 5.90114 10.3665C5.07949 17.903 4.14643 20.7766 0.738861 23.6162C0.292834 23.9879 0.0698242 24.5083 0.0698242 25.0287C0.0698242 25.8464 0.776036 26.5526 1.66809 26.5526C1.96544 26.5526 2.29995 26.4411 2.63447 26.2924C4.53009 25.4375 5.68232 25.2145 7.09474 25.2145C7.99291 25.2145 9.06765 25.4714 10.2183 25.7463C11.5437 26.0631 12.9698 26.4039 14.3427 26.4039C17.3533 26.4039 19.3233 23.4676 21.5162 17.7807C21.6278 17.5949 21.6649 17.3719 21.6649 17.186C21.6649 16.4798 21.1074 16.0338 20.5127 16.0338Z" fill="#0C0801"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.08949 8.82842C6.76258 9.06339 7.8134 9.33695 9.17583 9.41788L9.39884 9.41777C13.5989 9.41777 16.3495 6.81595 16.3495 3.69376C16.3495 1.68664 14.7883 0.125549 12.5953 0.125549C9.65902 0.125549 7.61474 2.13267 6.57401 6.10974C5.2731 5.40353 4.38105 4.13979 3.93502 2.54153C3.712 1.76098 3.22881 1.27778 2.55976 1.27778C1.74205 1.27778 1.22168 1.90966 1.22168 2.76454C1.22168 5.29203 3.19164 7.708 6.09081 8.82307L6.08949 8.82842ZM9.62185 6.70444C10.1793 4.13979 11.0714 2.91322 12.2608 2.91322C12.8927 2.91322 13.3015 3.28491 13.3015 3.95395C13.3015 5.18052 12.0006 6.6301 9.62185 6.70444Z" fill="#0C0801"/>
                </g>
                <defs>
                  <clipPath id="clip0_9229_1312">
                    <rect width="70" height="36" fill="white" transform="translate(0.0698242 0.125549)"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-md text-[#0C0801]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="flex flex-col px-5 py-4 pb-20 h-[calc(100vh-64px)] overflow-y-auto">
            {/* Main navigation links */}
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

              {/* More Links Dropdown */}
              <div className="flex flex-col">
                <button
                  className="flex items-center justify-between py-3 text-base font-normal font-montserrat text-[#0C0801]"
                  onClick={() => setMobileMoreLinksOpen(!mobileMoreLinksOpen)}
                  aria-expanded={mobileMoreLinksOpen}
                >
                  More Links
                  <ChevronDown className={`h-6 w-6 transition-transform ${mobileMoreLinksOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu Content */}
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

            {/* Call to action section */}
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

            {/* Bottom buttons */}
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
    </header>
  );
}
