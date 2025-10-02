import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[rgba(12,8,1,0.12)]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16 py-12 md:py-16 space-y-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/p/project-success" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/p/digital-strategy"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Strategy &amp; Innovation
                </Link>
              </li>
              <li>
                <Link
                  to="/p/analytics"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/p/ecommerce" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  to="/p/cybersecurity"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  Cyber Risk Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#0C0801]" />
                <a
                  href="mailto:contact@tecnext.net"
                  className="font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  contact@tecnext.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#0C0801]" />
                <a href="tel:+15551234567" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#0C0801]" />
                <p className="font-montserrat text-sm text-[#0C0801]">
                  Office # 8, Cocospace, Plot 3A, Korang Road, Markaz I-0/3, Islamabad, Pakistan
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">
              Follow Us
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-montserrat text-sm text-[#0C0801] hover:underline"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(12,8,1,0.12)] pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link to="/" aria-label="TecNext home" className="flex items-center">
            <BrandLogo className="h-10 w-auto" />
          </Link>
          <p className="font-montserrat text-sm text-[#0C0801]">
            © {new Date().getFullYear()} TecNext. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
