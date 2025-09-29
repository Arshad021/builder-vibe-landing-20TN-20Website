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
      { icon: CubeIcon, title: "Digital Transmission Strategy", href: "/digital-transmissions" },
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
    <div className="flex flex-col items-center self-stretch bg-[#EBF2FE] relative">
      {/* Header */}
      <div className="flex h-[72px] px-16 justify-between items-center self-stretch">
        <div className="flex justify-between items-center flex-1">
          <div className="flex items-center gap-6">
            {/* Company Logo */}
            <Link to="/" className="flex w-[84px] h-9 px-[7px] justify-center items-center">
              <svg width="70" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9315_389)">
                  <path d="M67.9112 17.0811L67.8741 17.1183C68.1343 16.4121 68.6546 16.1519 69.1006 16.1519C69.7325 16.1519 70.29 16.6351 70.29 17.3413C70.29 17.49 70.29 17.6758 70.2157 17.8988C68.9148 21.244 66.1643 22.9537 63.4882 23.2139C62.2617 25.2953 60.2546 26.8192 57.3926 26.8192C53.3041 26.8192 51.4829 23.5856 51.4829 20.0546C51.4829 15.7059 54.2334 10.874 58.8422 10.874C59.8457 10.874 60.7006 11.0971 61.4068 11.3944C63.4882 12.1749 64.8263 14.8882 64.8263 17.7873C64.8263 18.7165 64.7519 19.6457 64.5289 20.5378C65.9042 20.0546 67.205 18.9395 67.9112 17.0811ZM60.1431 13.9218V13.8847C59.3254 13.8847 58.8422 14.9625 58.8422 16.2634C58.8422 18.159 59.8829 19.9059 61.5183 20.5378C61.7785 19.7201 61.89 18.7909 61.89 17.713C61.89 15.6316 61.2581 13.9218 60.1431 13.9218ZM57.4298 24.1059C58.4705 24.1059 59.5112 23.6599 60.3289 22.7307C57.913 21.6528 56.3891 19.1254 56.3891 16.7094C56.3891 15.8917 56.5378 15.0369 56.7608 14.2935C55.2741 15.5201 54.4192 17.936 54.4192 20.0546C54.4192 22.805 55.7201 24.1059 57.4298 24.1059Z" fill="#0C0801"/>
                  <path d="M52.0568 17.0813L52.0196 17.1185C52.2798 16.4123 52.7258 16.115 53.1718 16.115C53.8037 16.115 54.4355 16.6725 54.4355 17.3787C54.4355 17.5645 54.3984 17.7132 54.324 17.899C52.8745 21.43 50.7187 25.5557 47.2621 27.9716L47.1878 28.715C46.7789 33.1752 44.5117 35.9999 41.6497 35.9999C39.4939 35.9999 38.2302 34.5132 38.2302 32.7663C38.2302 29.607 41.4638 28.4548 44.4745 26.5221C44.5488 25.7415 44.586 24.8495 44.6231 23.8459C43.1364 25.4813 41.5382 26.1504 40.1258 26.1504C37.301 26.1504 34.9966 23.8459 34.9966 20.315C34.9966 14.8884 38.5647 11.3203 42.5417 11.3203H42.5789C45.2922 11.3203 48.1913 12.7698 48.1913 15.3716C48.1913 16.2265 47.8196 20.8725 47.5223 24.4778C49.5293 22.5822 51.2019 19.4973 52.0568 17.0813ZM40.5346 23.4743C41.9099 23.4743 43.7683 22.6194 44.9205 18.4194C45.1063 17.4902 45.2178 16.6725 45.1807 15.7061C44.9577 14.7026 44.1028 14.1079 42.8762 14.1079C40.3488 14.1079 37.9329 16.5238 37.9329 20.2035C37.9329 22.4336 38.9736 23.4743 40.5346 23.4743ZM41.947 33.2867H41.9842C42.7647 33.2867 43.6196 32.7663 44.1771 29.4212C42.5417 30.3875 41.0178 31.3539 41.0178 32.5061C41.0178 32.9893 41.3895 33.2867 41.947 33.2867Z" fill="#0C0801"/>
                  <path d="M35.6485 17.0811L35.6114 17.1183C35.8715 16.4121 36.3919 16.1519 36.8379 16.1519C37.4698 16.1519 38.0273 16.6351 38.0273 17.3413C38.0273 17.49 38.0273 17.6758 37.953 17.8988C36.6521 21.244 33.9016 22.9537 31.2255 23.2139C29.999 25.2953 27.9919 26.8192 25.1299 26.8192C21.0414 26.8192 19.2202 23.5856 19.2202 20.0546C19.2202 15.7059 21.9706 10.874 26.5795 10.874C27.583 10.874 28.4379 11.0971 29.1441 11.3944C31.2255 12.1749 32.5636 14.8882 32.5636 17.7873C32.5636 18.7165 32.4892 19.6457 32.2662 20.5378C33.6415 20.0546 34.9423 18.9395 35.6485 17.0811ZM27.8804 13.9218V13.8847C27.0627 13.8847 26.5795 14.9625 26.5795 16.2634C26.5795 18.159 27.6202 19.9059 29.2556 20.5378C29.5158 19.7201 29.6273 18.7909 29.6273 17.713C29.6273 15.6316 28.9954 13.9218 27.8804 13.9218ZM25.1671 24.1059C26.2078 24.1059 27.2485 23.6599 28.0662 22.7307C25.6503 21.6528 24.1264 19.1254 24.1264 16.7094C24.1264 15.8917 24.2751 15.0369 24.4981 14.2935C23.0114 15.5201 22.1565 17.936 22.1565 20.0546C22.1565 22.805 23.4574 24.1059 25.1671 24.1059Z" fill="#0C0801"/>
                  <path d="M21.1094 15.9085C20.589 15.9085 20.143 16.1687 19.8456 16.8749C18.8793 19.328 16.8721 23.4909 14.8278 23.4909C13.5406 23.4909 12.5445 23.1998 11.5379 22.9056C10.51 22.6052 9.47117 22.3015 8.10028 22.3015C7.61708 22.3015 6.94804 22.3759 6.31617 22.4874C8.21975 19.8916 8.93089 16.7479 9.61997 10.8056C8.32251 10.723 7.2671 10.4833 6.49782 10.2412C5.67617 17.7777 4.74311 20.6513 1.33554 23.4909C0.889514 23.8626 0.666504 24.383 0.666504 24.9034C0.666504 25.7211 1.37272 26.4273 2.26477 26.4273C2.56212 26.4273 2.89663 26.3158 3.23115 26.1671C5.12677 25.3122 6.279 25.0892 7.69142 25.0892C8.58959 25.0892 9.66433 25.3461 10.815 25.621C12.1404 25.9378 13.5665 26.2786 14.9394 26.2786C17.95 26.2786 19.92 23.3423 22.1129 17.6554C22.2245 17.4696 22.2616 17.2466 22.2616 17.0607C22.2616 16.3545 21.7041 15.9085 21.1094 15.9085Z" fill="#0C0801"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.68617 8.70287C7.35926 8.93784 8.41008 9.2114 9.77251 9.29233L9.99552 9.29222C14.1956 9.29222 16.9461 6.6904 16.9461 3.56821C16.9461 1.56109 15.385 0 13.192 0C10.2557 0 8.21142 2.00712 7.17069 5.98419C5.86978 5.27798 4.97773 4.01424 4.5317 2.41598C4.30868 1.63543 3.82549 1.15223 3.15644 1.15223C2.33873 1.15223 1.81836 1.78411 1.81836 2.63899C1.81836 5.16648 3.78832 7.58245 6.68749 8.69752L6.68617 8.70287ZM10.2185 6.57889C10.776 4.01424 11.6681 2.78767 12.8575 2.78767C13.4894 2.78767 13.8982 3.15936 13.8982 3.8284C13.8982 5.05497 12.5973 6.50455 10.2185 6.57889Z" fill="#0C0801"/>
                </g>
                <defs>
                  <clipPath id="clip0_9315_389">
                    <rect width="70" height="36" fill="white" transform="translate(0.666504)"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]" end>
                Home Page
              </NavLink>
              <NavLink to="/services" className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                Our Services
              </NavLink>
              <NavLink to="/about" className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                About Us
              </NavLink>
              <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button
                  className="flex justify-center items-center gap-1 text-[#0C0801] font-montserrat text-base font-normal leading-[150%] focus-visible:outline-none"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpen((v) => !v)}
                >
                  More Links
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.3977 15.6634C12.178 15.8831 11.8219 15.8831 11.6022 15.6634L5.86739 9.92853C5.64772 9.70886 5.64772 9.35276 5.86739 9.13308L6.13256 8.86788C6.35222 8.64821 6.70838 8.64821 6.92805 8.86788L12 13.9398L17.0719 8.86788C17.2916 8.64821 17.6477 8.64821 17.8674 8.86788L18.1326 9.13308C18.3522 9.35276 18.3522 9.70886 18.1326 9.92853L12.3977 15.6634Z" fill="#0C0801"/>
                  </svg>
                </button>
                <MegaMenu open={open} onClose={() => setOpen(false)} />
              </div>
            </div>
          </div>

          {/* Actions */}
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

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0C0801] md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Backdrop to cover page when mega menu is open (desktop) */}
      {open && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-[#EBF2FE]"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile menu - New Figma Design */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#EBF2FE] md:hidden">
          {/* Mobile navbar */}
          <div className="flex h-16 items-center justify-between px-5 border-b border-[rgba(12,8,1,0.15)]">
            <Link to="/" className="flex h-9 w-[84px] items-center justify-center">
              <svg width="70" height="36" viewBox="0 0 71 37" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </div>
  );
}
