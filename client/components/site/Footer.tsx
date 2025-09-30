import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-white px-6 md:px-16 py-12 md:py-20">
      <div className="mx-auto max-w-[1280px] space-y-12 md:space-y-20">
        {/* Newsletter Section */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="max-w-[560px] flex-1">
            <h3 className="font-montserrat text-lg font-semibold text-[#0C0801]">
              Subscribe to updates
            </h3>
            <p className="font-montserrat text-base font-normal text-[#0C0801]">
              Stay informed about our latest services and insights.
            </p>
          </div>
          <div className="w-full md:w-[400px] space-y-3">
            <div className="flex gap-4">
              <div className="flex-1 border-b border-[rgba(12,8,1,0.15)] py-2">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="w-full bg-transparent font-montserrat text-base text-[#0C0801] placeholder:text-[rgba(12,8,1,0.6)] focus:outline-none"
                />
              </div>
              <button className="rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-base font-medium text-[#0C0801] hover:bg-gray-50">
                Subscribe
              </button>
            </div>
            <div className="flex gap-1">
              <span className="font-montserrat text-xs text-[#0C0801]">
                By subscribing you agree to our
              </span>
              <Link
                to="/p/privacy"
                className="font-roboto text-xs text-[#0C0801] underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[rgba(12,8,1,0.15)]"></div>

        {/* Links Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Quick Links
            </h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link
                  to="/"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Home
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/services"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Services
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/digital-strategy"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Digital Strategy
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/digital-transmissions"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Digital Transmissions
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/ecommerce"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  E‑Commerce Suite
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/analytics"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Data Analytics
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/customer-experience"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Customer Experience
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/cybersecurity"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Cybersecurity Solutions
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/project-success"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Project Success
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Resources
            </h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link
                  to="/p/blog"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Blog Posts
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/case-studies"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Case Studies
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/webinars"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Webinars
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/white-papers"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  White Papers
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/faqs"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Contact Us
            </h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link
                  to="/contact"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/support"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Support
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/careers"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Careers
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/privacy"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/terms"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Legal
            </h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link
                  to="/p/cookie-policy"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Cookie Policy
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/accessibility"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Accessibility Statement
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/user-agreement"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  User Agreement
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/copyright"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Copyright Notice
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/trademark"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Trademark Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Company Info
            </h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link
                  to="/p/about"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  About Us
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/team"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Our Team
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/values"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Our Values
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/vision"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Our Vision
                </Link>
              </div>
              <div className="py-2">
                <Link
                  to="/p/contact-info"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Contact Info
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-8">
          {/* Divider */}
          <div className="h-px w-full bg-[rgba(12,8,1,0.15)]"></div>

          {/* Logo and Credits */}
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <Link to="/" aria-label="TecNext home" className="flex items-center">
              <BrandLogo className="shrink-0" />
            </Link>
            <div className="flex items-center gap-6">
              <span className="font-montserrat text-sm text-[#0C0801]">
                © 2025 TecNext. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
