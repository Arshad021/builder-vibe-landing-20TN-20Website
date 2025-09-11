import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white px-16 py-20">
      <div className="mx-auto max-w-[1280px] space-y-20">
        {/* Newsletter Section */}
        <div className="flex items-start justify-between">
          <div className="max-w-[560px] flex-1">
            <h3 className="font-montserrat text-lg font-semibold text-[#0C0801]">
              Subscribe to updates
            </h3>
            <p className="font-montserrat text-base font-normal text-[#0C0801]">
              Stay informed about our latest services and insights.
            </p>
          </div>
          <div className="w-[400px] space-y-3">
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
              <span className="font-montserrat text-xs text-[#0C0801]">By subscribing you agree to our</span>
              <Link to="/p/privacy" className="font-roboto text-xs text-[#0C0801] underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[rgba(12,8,1,0.15)]"></div>

        {/* Links Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-6">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">Quick Links</h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link to="/p/service-one" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Service One
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/service-two" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Service Two
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/service-three" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Service Three
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/service-four" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Service Four
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/service-five" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Service Five
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">Resources</h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link to="/p/blog" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Blog Posts
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/case-studies" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Case Studies
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/webinars" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Webinars
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/white-papers" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  White Papers
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/faqs" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">Contact Us</h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link to="/p/contact" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Get in Touch
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/support" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Support
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/careers" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Careers
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/privacy" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Privacy Policy
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/terms" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">Follow Us</h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link to="/p/linkedin" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  LinkedIn Profile
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/twitter" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Twitter Account
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/facebook" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Facebook Page
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/instagram" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Instagram Handle
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/youtube" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  YouTube Channel
                </Link>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">Legal</h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link to="/p/cookie-policy" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Cookie Policy
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/accessibility" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Accessibility Statement
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/user-agreement" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  User Agreement
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/copyright" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Copyright Notice
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/trademark" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Trademark Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-base font-semibold text-[#0C0801]">Company Info</h4>
            <div className="space-y-0">
              <div className="py-2">
                <Link to="/p/about" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  About Us
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/team" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Our Team
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/values" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Our Values
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/vision" className="font-montserrat text-sm text-[#0C0801] hover:underline">
                  Our Vision
                </Link>
              </div>
              <div className="py-2">
                <Link to="/p/contact-info" className="font-montserrat text-sm text-[#0C0801] hover:underline">
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
          <div className="flex items-center justify-between">
            <Link to="/" className="flex h-9 w-[84px] items-center justify-center">
              <svg width="70" height="36" viewBox="0 0 71 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9234_500)">
                  <path d="M67.3145 17.5753L67.2774 17.6125C67.5376 16.9063 68.0579 16.6461 68.5039 16.6461C69.1358 16.6461 69.6933 17.1293 69.6933 17.8355C69.6933 17.9842 69.6933 18.17 69.619 18.393C68.3181 21.7382 65.5676 23.4479 62.8915 23.7081C61.665 25.7895 59.6579 27.3134 56.7959 27.3134C52.7074 27.3134 50.8862 24.0798 50.8862 20.5488C50.8862 16.2001 53.6367 11.3682 58.2455 11.3682C59.249 11.3682 60.1039 11.5913 60.8101 11.8886C62.8915 12.6691 64.2296 15.3824 64.2296 18.2815C64.2296 19.2107 64.1552 20.1399 63.9322 21.032C65.3075 20.5488 66.6083 19.4337 67.3145 17.5753ZM59.5464 14.416V14.3789C58.7287 14.3789 58.2455 15.4567 58.2455 16.7576C58.2455 18.6532 59.2862 20.4001 60.9216 21.032C61.1818 20.2143 61.2933 19.2851 61.2933 18.2072C61.2933 16.1258 60.6614 14.416 59.5464 14.416ZM56.8331 24.6001C57.8738 24.6001 58.9145 24.1541 59.7322 23.2249C57.3163 22.147 55.7924 19.6196 55.7924 17.2036C55.7924 16.3859 55.9411 15.5311 56.1641 14.7877C54.6774 16.0143 53.8225 18.4302 53.8225 20.5488C53.8225 23.2992 55.1234 24.6001 56.8331 24.6001Z" fill="#0C0801"/>
                  <path d="M51.4601 17.5755L51.4229 17.6127C51.6831 16.9065 52.1291 16.6092 52.5751 16.6092C53.207 16.6092 53.8388 17.1667 53.8388 17.8729C53.8388 18.0587 53.8017 18.2074 53.7273 18.3932C52.2778 21.9242 50.122 26.0499 46.6654 28.4658L46.5911 29.2092C46.1822 33.6694 43.915 36.4941 41.053 36.4941C38.8972 36.4941 37.6335 35.0074 37.6335 33.2605C37.6335 30.1012 40.8671 28.949 43.8778 27.0163C43.9521 26.2357 43.9893 25.3437 44.0264 24.3401C42.5397 25.9755 40.9415 26.6446 39.5291 26.6446C36.7043 26.6446 34.3999 24.3401 34.3999 20.8092C34.3999 15.3826 37.968 11.8145 41.945 11.8145H41.9822C44.6955 11.8145 47.5946 13.264 47.5946 15.8658C47.5946 16.7207 47.2229 21.3667 46.9256 24.972C48.9326 23.0764 50.6052 19.9915 51.4601 17.5755ZM39.9379 23.9685C41.3132 23.9685 43.1716 23.1136 44.3238 18.9136C44.5096 17.9844 44.6211 17.1667 44.584 16.2003C44.361 15.1968 43.5061 14.6021 42.2795 14.6021C39.7521 14.6021 37.3362 17.018 37.3362 20.6977C37.3362 22.9278 38.3769 23.9685 39.9379 23.9685ZM41.3503 33.7809H41.3875C42.168 33.7809 43.0229 33.2605 43.5804 29.9154C41.945 30.8817 40.4211 31.8481 40.4211 33.0003C40.4211 33.4835 40.7928 33.7809 41.3503 33.7809Z" fill="#0C0801"/>
                  <path d="M35.0518 17.5753L35.0147 17.6125C35.2748 16.9063 35.7952 16.6461 36.2412 16.6461C36.8731 16.6461 37.4306 17.1293 37.4306 17.8355C37.4306 17.9842 37.4306 18.17 37.3563 18.393C36.0554 21.7382 33.3049 23.4479 30.6288 23.7081C29.4023 25.7895 27.3952 27.3134 24.5332 27.3134C20.4447 27.3134 18.6235 24.0798 18.6235 20.5488C18.6235 16.2001 21.3739 11.3682 25.9828 11.3682C26.9863 11.3682 27.8412 11.5913 28.5474 11.8886C30.6288 12.6691 31.9669 15.3824 31.9669 18.2815C31.9669 19.2107 31.8925 20.1399 31.6695 21.032C33.0448 20.5488 34.3456 19.4337 35.0518 17.5753ZM27.2837 14.416V14.3789C26.466 14.3789 25.9828 15.4567 25.9828 16.7576C25.9828 18.6532 27.0235 20.4001 28.6589 21.032C28.9191 20.2143 29.0306 19.2851 29.0306 18.2072C29.0306 16.1258 28.3987 14.416 27.2837 14.416ZM24.5704 24.6001C25.6111 24.6001 26.6518 24.1541 27.4695 23.2249C25.0536 22.147 23.5297 19.6196 23.5297 17.2036C23.5297 16.3859 23.6784 15.5311 23.9014 14.7877C22.4147 16.0143 21.5598 18.4302 21.5598 20.5488C21.5598 23.2992 22.8607 24.6001 24.5704 24.6001Z" fill="#0C0801"/>
                  <path d="M20.5127 16.4027C19.9923 16.4027 19.5463 16.6629 19.2489 17.3691C18.2826 19.8222 16.2754 23.985 14.2311 23.985C12.9439 23.985 11.9478 23.6939 10.9412 23.3997C9.9133 23.0993 8.87449 22.7956 7.5036 22.7956C7.0204 22.7956 6.35136 22.87 5.71949 22.9815C7.62307 20.3857 8.33421 17.2421 9.02329 11.2998C7.72583 11.2172 6.67042 10.9775 5.90114 10.7354C5.07949 18.2719 4.14643 21.1454 0.738861 23.985C0.292834 24.3567 0.0698242 24.8771 0.0698242 25.3975C0.0698242 26.2153 0.776036 26.9214 1.66809 26.9214C1.96544 26.9214 2.29995 26.8099 2.63447 26.6613C4.53009 25.8063 5.68232 25.5834 7.09474 25.5834C7.99291 25.5834 9.06765 25.8403 10.2183 26.1151C11.5437 26.4319 12.9698 26.7727 14.3427 26.7727C17.3533 26.7727 19.3233 23.8364 21.5162 18.1495C21.6278 17.9637 21.6649 17.7407 21.6649 17.5548C21.6649 16.8486 21.1074 16.4027 20.5127 16.4027Z" fill="#0C0801"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.08949 9.19701C6.76258 9.43198 7.8134 9.70554 9.17583 9.78647L9.39884 9.78636C13.5989 9.78636 16.3495 7.18454 16.3495 4.06235C16.3495 2.05523 14.7883 0.494141 12.5953 0.494141C9.65902 0.494141 7.61474 2.50126 6.57401 6.47833C5.2731 5.77212 4.38105 4.50838 3.93502 2.91012C3.712 2.12957 3.22881 1.64637 2.55976 1.64637C1.74205 1.64637 1.22168 2.27825 1.22168 3.13313C1.22168 5.66062 3.19164 8.07659 6.09081 9.19166L6.08949 9.19701ZM9.62185 7.07303C10.1793 4.50838 11.0714 3.28181 12.2608 3.28181C12.8927 3.28181 13.3015 3.6535 13.3015 4.32254C13.3015 5.54911 12.0006 6.99869 9.62185 7.07303Z" fill="#0C0801"/>
                </g>
                <defs>
                  <clipPath id="clip0_9234_500">
                    <rect width="70" height="36" fill="white" transform="translate(0.0698242 0.494141)"/>
                  </clipPath>
                </defs>
              </svg>
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
