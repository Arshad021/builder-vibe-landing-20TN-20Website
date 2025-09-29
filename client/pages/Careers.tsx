import { Link } from "react-router-dom";
import { useState } from "react";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";

const StarRating = () => (
  <div className="flex items-start gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-white text-white" />
    ))}
  </div>
);

const TestimonialCard = ({
  name,
  role,
  quote,
  company,
}: {
  name: string;
  role: string;
  quote: string;
  company: string;
}) => (
  <div className="flex flex-col items-start gap-8 flex-1">
    <StarRating />
    <div className="self-stretch text-white font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
      "{quote}"
    </div>
    <div className="flex flex-col items-start gap-4">
      <div className="w-14 h-14 rounded-full bg-gray-300"></div>
      <div className="flex flex-col items-start">
        <div className="text-white font-montserrat text-base font-semibold leading-[150%]">
          {name}
        </div>
        <div className="text-white font-montserrat text-base font-normal leading-[150%]">
          {role}
        </div>
      </div>
      <div className="w-[120px] h-12 bg-white/20 rounded flex items-center justify-center">
        <span className="text-white font-montserrat text-sm">{company}</span>
      </div>
    </div>
  </div>
);

const JobCard = ({
  title,
  department,
  description,
  location,
  schedule,
  type,
}: {
  title: string;
  department: string;
  description: string;
  location: string;
  schedule: string;
  type: string;
}) => (
  <div className="flex flex-col items-start gap-8 self-stretch py-8 border-t border-[rgba(12,8,1,0.15)]">
    <div className="flex flex-col items-start gap-6 self-stretch">
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex items-center gap-4 self-stretch">
          <div className="text-[#0C0801] font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px]">
            {title}
          </div>
          <div className="flex px-[10px] py-1 items-start rounded-[100px] border border-[rgba(12,8,1,0.15)]">
            <div className="text-[#0C0801] font-montserrat text-sm font-semibold leading-[150%]">
              {department}
            </div>
          </div>
        </div>
        <div className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
          {description}
        </div>
      </div>
      <div className="flex items-start gap-6 self-stretch">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-[#0C0801]" />
          <div className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
            {location}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-[#0C0801]" />
          <div className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
            {schedule} • {type}
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-[117px] flex-col items-start gap-4">
      <button className="flex px-[10px] py-1 justify-center items-center gap-2 rounded-[100px] border border-[rgba(12,8,1,0.15)] hover:bg-gray-50 transition-colors">
        <div className="text-[#0C0801] font-montserrat text-base font-medium leading-[150%]">
          Apply Now
        </div>
      </button>
    </div>
  </div>
);

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex h-[1024px] flex-col items-center self-stretch bg-white relative">
        <img
          className="flex-1 self-stretch object-cover"
          src="https://images.pexels.com/photos/5716031/pexels-photo-5716031.jpeg"
          alt="Diverse professionals collaborating in a modern office"
        />
        <div className="flex py-20 px-16 justify-center items-start gap-20 self-stretch absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
          <div className="flex max-w-[1280px] flex-col items-start gap-20 flex-1">
            <div className="flex items-start gap-20 self-stretch">
              <div className="flex flex-col items-start flex-1">
                <div className="self-stretch text-white font-alata text-[72px] font-normal leading-[120%] tracking-[-0.72px]">
                  Join Our Team and Shape the Future
                </div>
              </div>
              <div className="flex flex-col items-start gap-8 flex-1">
                <div className="self-stretch text-white font-montserrat text-lg font-normal leading-[150%]">
                  We foster a collaborative and innovative work environment at
                  TecNext, where every team member's contribution is valued.
                  Explore our diverse career opportunities and join a journey
                  that drives digital transformation.
                </div>
                <div className="flex items-start gap-4">
                  <Link
                    to="/p/explore"
                    className="flex px-3 py-[6px] justify-center items-center gap-2 rounded-[100px] border border-[#3B82F6] bg-[#3B82F6] hover:opacity-90 transition-opacity"
                  >
                    <div className="text-white font-montserrat text-base font-medium leading-[150%]">
                      Explore
                    </div>
                  </Link>
                  <Link
                    to="/about"
                    className="flex px-3 py-[6px] justify-center items-center gap-2 rounded-[100px] border border-[rgba(255,255,255,0.15)] hover:bg-white/10 transition-colors"
                  >
                    <div className="text-white font-montserrat text-base font-medium leading-[150%]">
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="flex py-28 px-16 flex-col items-center gap-20 self-stretch bg-white">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex h-[640px] items-center gap-20 self-stretch">
            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex items-center">
                  <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                    Empower
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6 self-stretch">
                  <div className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                    Our Commitment to Growth and Innovation
                  </div>
                  <div className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                    We believe that our employees are our greatest asset at
                    TecNext. Our mission is to foster an environment where
                    creativity thrives and professional growth is encouraged.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  to="/p/join"
                  className="flex px-3 py-[6px] justify-center items-center gap-2 rounded-[100px] border border-[rgba(12,8,1,0.15)] hover:bg-gray-50 transition-colors"
                >
                  <div className="text-[#0C0801] font-montserrat text-base font-medium leading-[150%]">
                    Join
                  </div>
                </Link>
                <Link
                  to="/about"
                  className="flex justify-center items-center gap-2 rounded-[100px] group hover:bg-gray-50 px-2 py-[6px] transition-colors"
                >
                  <div className="text-[#0C0801] font-montserrat text-base font-medium leading-[150%]">
                    Explore
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#0C0801] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <img
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover"
              src="https://images.pexels.com/photos/23496705/pexels-photo-23496705.jpeg"
              alt="Team reviewing plans and discussing ideas in a modern office"
            />
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="flex py-28 px-16 flex-col items-center gap-20 self-stretch bg-[#173462]">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex max-w-[768px] flex-col items-start gap-6 self-stretch">
            <div className="self-stretch text-white font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
              Employee Testimonials
            </div>
            <div className="self-stretch text-white font-montserrat text-lg font-normal leading-[150%]">
              Hear from our team about their journeys.
            </div>
          </div>
          <div className="flex flex-col items-start gap-16 self-stretch">
            <div className="flex items-start gap-8 self-stretch">
              <TestimonialCard
                name="John Doe"
                role="Senior Analyst, TecNext"
                quote="Working at TecNext has transformed my career path!"
                company="TecNext"
              />
              <TestimonialCard
                name="Jane Smith"
                role="Project Manager, TecNext"
                quote="The culture here fosters innovation and growth!"
                company="TecNext"
              />
              <TestimonialCard
                name="Emily Johnson"
                role="UX Designer, TecNext"
                quote="I've gained invaluable skills and experiences!"
                company="TecNext"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="flex py-28 px-16 flex-col items-center gap-20 self-stretch bg-white">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex max-w-[768px] flex-col items-start gap-4 self-stretch">
            <div className="flex items-center self-stretch">
              <div className="w-[53px] text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                Careers
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 self-stretch">
              <div className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Open Positions
              </div>
              <div className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                Join our innovative team and help shape the future of digital
                transformation.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch">
            <div className="flex flex-col items-start self-stretch">
              <JobCard
                title="Software Engineer"
                department="Engineering"
                description="Develop and maintain high-quality software solutions for our clients."
                location="Remote"
                schedule="Full Time"
                type="Permanent"
              />
              <JobCard
                title="Data Analyst"
                department="Analytics"
                description="Analyze data trends to drive strategic decision-making for our clients."
                location="Hybrid"
                schedule="Part Time"
                type="Contract"
              />
              <JobCard
                title="Project Manager"
                department="Management"
                description="Lead projects from inception to completion, ensuring client satisfaction and timely delivery."
                location="Onsite"
                schedule="Contract Role"
                type="Full Time"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Talented Team CTA */}
      <section className="flex py-28 px-16 flex-col items-center gap-20 self-stretch bg-[#F2F2F2]">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex items-center gap-20 self-stretch">
            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-6 self-stretch">
                <div className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                  Join Our Talented Team
                </div>
                <div className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                  Explore exciting career opportunities at TecNext and make a
                  meaningful impact in digital transformation.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Link
                  to="/p/apply"
                  className="flex px-3 py-[6px] justify-center items-center gap-2 rounded-[100px] border border-[#3B82F6] bg-[#3B82F6] hover:opacity-90 transition-opacity"
                >
                  <div className="text-white font-montserrat text-base font-medium leading-[150%]">
                    Apply
                  </div>
                </Link>
                <Link
                  to="/about"
                  className="flex px-3 py-[6px] justify-center items-center gap-2 rounded-[100px] border border-[rgba(12,8,1,0.15)] hover:bg-gray-50 transition-colors"
                >
                  <div className="text-[#0C0801] font-montserrat text-base font-medium leading-[150%]">
                    Learn More
                  </div>
                </Link>
              </div>
            </div>
            <img
              className="h-[400px] flex-1 aspect-[3/2] rounded-2xl object-cover"
              src="https://images.pexels.com/photos/8485600/pexels-photo-8485600.jpeg"
              alt="Coworkers collaborating with laptop and materials in an office"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex py-28 px-16 flex-col items-center gap-20 self-stretch bg-[#EBF2FE]">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex items-start gap-20 self-stretch">
            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex items-center self-stretch">
                  <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                    Join
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6 self-stretch">
                  <div className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                    Get in Touch
                  </div>
                  <div className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                    We look forward to hearing from you soon!
                  </div>
                </div>
              </div>
              <div className="flex py-2 flex-col items-start gap-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#0C0801"
                      strokeWidth="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <Link
                    to="mailto:careers@tecnext.com"
                    className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%] underline hover:no-underline"
                  >
                    careers@tecnext.com
                  </Link>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#0C0801"
                      strokeWidth="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <Link
                    to="tel:+15551234567"
                    className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%] underline hover:no-underline"
                  >
                    +1 (555) 123-4567
                  </Link>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0C0801]" />
                  <div className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    456 Innovation Dr, San Francisco CA 94105 US
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start gap-6 flex-1"
            >
              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Name
                </div>
                <div className="flex h-12 py-2 items-center gap-2 self-stretch border-b border-[rgba(12,8,1,0.15)]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-1 bg-transparent outline-none text-[#0C0801] font-montserrat text-base"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Email
                </div>
                <div className="flex h-12 py-2 items-center gap-2 self-stretch border-b border-[rgba(12,8,1,0.15)]">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 bg-transparent outline-none text-[#0C0801] font-montserrat text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Message
                </div>
                <div className="flex h-[180px] py-3 px-0 items-start self-stretch border-b border-[rgba(12,8,1,0.15)]">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="flex-1 h-full bg-transparent outline-none text-[#0C0801] font-montserrat text-base resize-none"
                    placeholder="Share your thoughts..."
                  />
                </div>
              </div>

              <div className="flex pb-4 items-center gap-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="w-[18px] h-[18px] rounded border border-[rgba(12,8,1,0.15)]"
                />
                <div className="text-[#0C0801] font-montserrat text-sm font-normal leading-[150%]">
                  I agree to the Terms
                </div>
              </div>

              <button
                type="submit"
                disabled={!formData.agreeTerms}
                className="flex px-3 py-[6px] justify-center items-center gap-2 rounded-[100px] border border-[#3B82F6] bg-[#3B82F6] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="text-white font-montserrat text-base font-medium leading-[150%]">
                  Submit
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
