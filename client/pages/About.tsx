import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar.jpg?width=80&height=80",
    social: {
      linkedin: "#",
      twitter: "#", 
      dribbble: "#"
    }
  },
  {
    id: 2,
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar.jpg?width=80&height=80",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  },
  {
    id: 3,
    name: "Full name", 
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar.jpg?width=80&height=80",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  },
  {
    id: 4,
    name: "Full name",
    jobTitle: "Job title", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar.jpg?width=80&height=80",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  },
  {
    id: 5,
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar.jpg?width=80&height=80",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  },
  {
    id: 6,
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar.jpg?width=80&height=80",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  },
  {
    id: 7,
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar.jpg?width=80&height=80",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  },
  {
    id: 8,
    name: "Full name",
    jobTitle: "Job title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/placeholder-avatar.jpg?width=80&height=80",
    social: {
      linkedin: "#", 
      twitter: "#",
      dribbble: "#"
    }
  }
];

// Social media icons
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z" fill="#0C0801"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z" fill="#0C0801"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.03145 3 3 7.03145 3 12C3 16.9686 7.03145 21 12 21C16.9588 21 21 16.9686 21 12C21 7.03145 16.9588 3 12 3ZM17.9447 7.14859C19.0184 8.45662 19.6627 10.1258 19.6822 11.9317C19.4284 11.8829 16.8904 11.3655 14.333 11.6876C14.2744 11.5607 14.2256 11.4241 14.167 11.2874C14.0108 10.9165 13.8352 10.5358 13.6594 10.1746C16.4902 9.0228 17.7787 7.36334 17.9447 7.14859ZM12 4.32755C13.9523 4.32755 15.7386 5.05966 17.0955 6.26031C16.9588 6.45553 15.7972 8.00759 13.064 9.03253C11.8048 6.71909 10.4089 4.82538 10.1942 4.53254C10.77 4.39588 11.3753 4.32755 12 4.32755ZM8.72996 5.04989C8.93494 5.32321 10.3015 7.22668 11.5803 9.49131C7.98807 10.448 4.81562 10.4284 4.47397 10.4284C4.9718 8.04664 6.58243 6.06507 8.72996 5.04989ZM4.30803 12.0098C4.30803 11.9317 4.30803 11.8536 4.30803 11.7755C4.63991 11.7852 8.36876 11.8341 12.205 10.6822C12.4295 11.1117 12.6345 11.551 12.8297 11.9902C12.7321 12.0195 12.6247 12.0488 12.5271 12.0781C8.56399 13.3568 6.45553 16.8514 6.27983 17.1442C5.05965 15.7874 4.30803 13.9816 4.30803 12.0098ZM12 19.692C10.2234 19.692 8.58352 19.0868 7.28525 18.0716C7.42191 17.7885 8.98371 14.782 13.3178 13.269C13.3373 13.2592 13.3471 13.2592 13.3666 13.2495C14.4501 16.051 14.8894 18.4034 15.0065 19.077C14.0792 19.4772 13.064 19.692 12 19.692ZM16.2852 18.3742C16.2072 17.9056 15.7972 15.6605 14.7917 12.898C17.2028 12.5173 19.3113 13.1421 19.5749 13.23C19.243 15.3677 18.013 17.2126 16.2852 18.3742Z" fill="#0C0801"/>
  </svg>
);

const EnterpriseIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.9165 51.8691C41.6943 51.8691 43.1943 51.2719 44.4165 50.0775C45.6388 48.883 46.2499 47.3969 46.2499 45.6191C46.2499 43.8414 45.6388 42.3552 44.4165 41.1608C43.1943 39.9663 41.7082 39.3691 39.9582 39.3691C38.2082 39.3691 36.736 39.9816 35.5415 41.2066C34.3471 42.4311 33.7499 43.9033 33.7499 45.6233C33.7499 47.3427 34.3538 48.8136 35.5615 50.0358C36.7693 51.258 38.221 51.8691 39.9165 51.8691ZM11.8457 70.9983C10.3124 70.9983 8.98294 70.4352 7.85738 69.3091C6.73127 68.1836 6.16821 66.8541 6.16821 65.3208V25.9183C6.16821 24.3794 6.73127 23.0452 7.85738 21.9158C8.98294 20.7858 10.3124 20.2208 11.8457 20.2208H26.2082V11.8875C26.2082 10.368 26.7713 9.0419 27.8974 7.90912C29.0229 6.77635 30.3524 6.20996 31.8857 6.20996H48.114C49.6474 6.20996 50.9768 6.77635 52.1024 7.90912C53.2285 9.0419 53.7915 10.368 53.7915 11.8875V20.2208H68.154C69.6929 20.2208 71.0271 20.7858 72.1565 21.9158C73.2865 23.0452 73.8515 24.3794 73.8515 25.9183V65.3208C73.8515 66.8541 73.2865 68.1836 72.1565 69.3091C71.0271 70.4352 69.6929 70.9983 68.154 70.9983H11.8457ZM11.8457 65.3208H68.154V25.9183H11.8457V65.3208ZM31.8857 20.2208H48.114V11.8875H31.8857V20.2208Z" fill="#0C0801"/>
</svg>
);

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white px-4 py-16 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col items-center gap-20">
          <div className="max-w-[768px] flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex items-center w-full">
                <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                  Innovate
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 w-full">
                <h1 className="w-full text-[#0C0801] font-alata text-[44px] md:text-[72px] font-normal leading-[120%] tracking-[-0.44px] md:tracking-[-0.72px]">
                  Empowering Digital Futures
                </h1>
                <p className="w-full text-[#0C0801] font-montserrat text-base md:text-lg font-normal leading-[150%]">
                  At TecNext, we harness technology to drive transformation and create lasting business value for our clients.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 flex-wrap">
              <Link
                to="/p/discover"
                className="flex justify-center items-center gap-2 rounded-full border border-[#3B82F6] bg-[#3B82F6] px-3 py-[6px] font-montserrat text-base font-medium text-white hover:opacity-90"
              >
                Discover
              </Link>
              <Link
                to="/p/connect"
                className="flex justify-center items-center gap-2 rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-base font-medium text-[#0C0801] hover:bg-gray-50"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white px-4 py-16 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[640px]">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex items-center">
                <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                  Empower
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="w-full text-[#0C0801] font-alata text-[32px] md:text-[52px] font-normal leading-[120%] tracking-[-0.32px] md:tracking-[-0.52px]">
                  Our Vision: Transforming Businesses for Tomorrow
                </h2>
                <p className="w-full text-[#0C0801] font-montserrat text-base md:text-lg font-normal leading-[150%]">
                  At TecNext, we envision a future where digital transformation drives sustainable growth and innovation. Our commitment to excellence empowers businesses to navigate the complexities of the digital landscape.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                to="/p/learn"
                className="flex justify-center items-center gap-2 rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-base font-medium text-[#0C0801] hover:bg-gray-50"
              >
                Learn
              </Link>
              <Link
                to="/p/join"
                className="flex justify-center items-center gap-2 rounded-full font-montserrat text-base font-medium text-[#0C0801] hover:opacity-80"
              >
                Join
                <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="flex-1 h-[640px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6912118f6ec88d787fb325f0058b3512ad42204b?width=1200"
              alt="Vision illustration"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Partnership Philosophy Section */}
      <section className="bg-[#173462] px-4 py-16 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 h-[640px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F35cce0e684ef4d7ca1d58e211f96f69e?format=webp&width=1200"
              alt="Hands stacked in unity"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="w-full text-white font-alata text-[32px] md:text-[44px] font-normal leading-[120%] tracking-[-0.32px] md:tracking-[-0.44px]">
                Our Collaborative Partnership Philosophy: Empowering Success Through Teamwork and Trust
              </h2>
              <p className="w-full text-white font-montserrat text-base md:text-lg font-normal leading-[150%]">
                At TecNext, we believe that collaboration is the cornerstone of success. By working closely with our clients, we tailor solutions that meet their unique challenges and goals.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex py-2 items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-4 flex-1">
                  <h3 className="w-full text-white font-alata text-[18px] md:text-[22px] font-normal leading-[140%] tracking-[-0.18px] md:tracking-[-0.22px]">
                    Client-Centric
                  </h3>
                  <p className="w-full text-white font-montserrat text-sm md:text-base font-normal leading-[150%]">
                    Your objectives guide our strategies, ensuring alignment and shared success throughout our partnership.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 flex-1">
                  <h3 className="w-full text-white font-alata text-[18px] md:text-[22px] font-normal leading-[140%] tracking-[-0.18px] md:tracking-[-0.22px]">
                    Collaborative Spirit
                  </h3>
                  <p className="w-full text-white font-montserrat text-sm md:text-base font-normal leading-[150%]">
                    Together, we innovate and adapt, fostering a culture of continuous improvement and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Services Section */}
      <section className="bg-white px-4 py-16 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <EnterpriseIcon />
              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="w-full text-[#0C0801] font-alata text-[32px] md:text-[52px] font-normal leading-[120%] tracking-[-0.32px] md:tracking-[-0.52px]">
                  Our Expertise in Digital Transformation Services
                </h2>
                <p className="w-full text-[#0C0801] font-montserrat text-base md:text-lg font-normal leading-[150%]">
                  At TecNext, our team excels in guiding enterprise clients through their digital transformation journeys. We leverage our expertise in strategic transformation, project assurance, eCommerce excellence, data analytics, customer experience, and information risk management to drive impactful results.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                to="/p/learn-more"
                className="flex justify-center items-center gap-2 rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-base font-medium text-[#0C0801] hover:bg-gray-50"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="flex justify-center items-center gap-2 rounded-full font-montserrat text-base font-medium text-[#0C0801] hover:opacity-80"
              >
                Contact
                <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="flex-1 h-[640px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d09c40aa1e568b993e93fb7a9719fd2e9e800eea?width=1200"
              alt="Digital transformation illustration"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white px-4 py-16 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col items-start gap-20">
          <div className="max-w-[768px] flex flex-col items-start gap-4 w-full">
            <div className="flex items-center w-full">
              <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                Careers
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="w-full text-[#0C0801] font-alata text-[32px] md:text-[52px] font-normal leading-[120%] tracking-[-0.32px] md:tracking-[-0.52px]">
                Our team
              </h2>
              <p className="w-full text-[#0C0801] font-montserrat text-base md:text-lg font-normal leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-16 w-full">
            {/* First row of team members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {teamMembers.slice(0, 4).map((member) => (
                <div key={member.id} className="flex flex-col items-start gap-6">
                  <div
                    className="w-20 h-20 rounded-full bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.avatar})` }}
                  />
                  <div className="flex flex-col items-center gap-4 w-full">
                    <div className="flex flex-col items-center w-full">
                      <h3 className="w-full text-center text-[#0C0801] font-montserrat text-[18px] md:text-[22px] font-semibold leading-[150%]">
                        {member.name}
                      </h3>
                      <p className="w-full text-center text-[#0C0801] font-montserrat text-base md:text-lg font-normal leading-[150%]">
                        {member.jobTitle}
                      </p>
                    </div>
                    <p className="w-full text-center text-[#0C0801] font-montserrat text-sm md:text-base font-normal leading-[150%]">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex items-start gap-[14px]">
                    <Link to={member.social.linkedin} className="text-[#0C0801] hover:opacity-80">
                      <LinkedInIcon />
                    </Link>
                    <Link to={member.social.twitter} className="text-[#0C0801] hover:opacity-80">
                      <TwitterIcon />
                    </Link>
                    <Link to={member.social.dribbble} className="text-[#0C0801] hover:opacity-80">
                      <DribbbleIcon />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Second row of team members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {teamMembers.slice(4, 8).map((member) => (
                <div key={member.id} className="flex flex-col items-start gap-6">
                  <div
                    className="w-20 h-20 rounded-full bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.avatar})` }}
                  />
                  <div className="flex flex-col items-center gap-4 w-full">
                    <div className="flex flex-col items-center w-full">
                      <h3 className="w-full text-center text-[#0C0801] font-montserrat text-[18px] md:text-[22px] font-semibold leading-[150%]">
                        {member.name}
                      </h3>
                      <p className="w-full text-center text-[#0C0801] font-montserrat text-base md:text-lg font-normal leading-[150%]">
                        {member.jobTitle}
                      </p>
                    </div>
                    <p className="w-full text-center text-[#0C0801] font-montserrat text-sm md:text-base font-normal leading-[150%]">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex items-start gap-[14px]">
                    <Link to={member.social.linkedin} className="text-[#0C0801] hover:opacity-80">
                      <LinkedInIcon />
                    </Link>
                    <Link to={member.social.twitter} className="text-[#0C0801] hover:opacity-80">
                      <TwitterIcon />
                    </Link>
                    <Link to={member.social.dribbble} className="text-[#0C0801] hover:opacity-80">
                      <DribbbleIcon />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* We're hiring section */}
          <div className="max-w-[768px] flex flex-col items-start gap-6 w-full">
            <div className="w-[768px] flex flex-col items-center gap-4">
              <h2 className="w-full text-center text-[#0C0801] font-alata text-[28px] md:text-[36px] font-normal leading-[130%] tracking-[-0.28px] md:tracking-[-0.36px]">
                We're hiring!
              </h2>
              <p className="w-full text-center text-[#0C0801] font-montserrat text-base md:text-lg font-normal leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-[155px] flex flex-col items-start gap-4">
              <Link
                to="/p/open-positions"
                className="flex justify-center items-center gap-2 rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-base font-medium text-[#0C0801] hover:bg-gray-50"
              >
                Open positions
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
