import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Index() {
  const projectShowcaseRef = useRef<HTMLDivElement>(null);
  const trustedLogosRef = useRef<HTMLDivElement>(null);

  const scrollProjectShowcase = (dir: number) => {
    const el = projectShowcaseRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    let animationId: number;
    let lastTimestamp: number | null = null;

    const animateMarquee = (timestamp: number) => {
      const el = trustedLogosRef.current;

      if (!el) {
        lastTimestamp = null;
        animationId = requestAnimationFrame(animateMarquee);
        return;
      }

      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const maxScroll = el.scrollWidth - el.clientWidth;

      if (maxScroll > 0) {
        const pixelsPerMs = (el.clientWidth * 3.2) / 90;
        let nextScroll = el.scrollLeft + delta * pixelsPerMs;

        while (nextScroll >= maxScroll) {
          nextScroll -= maxScroll;
        }

        el.scrollLeft = nextScroll;
      }

      animationId = requestAnimationFrame(animateMarquee);
    };

    animationId = requestAnimationFrame(animateMarquee);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const trustedLogos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F1ce6655f66ba4b04b169d6bfe402adfd?format=webp&width=800",
      alt: "Zeekr",
      darkBg: false,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F60285e50ee704fe78b5879976f044f1f?format=webp&width=800",
      alt: "Wallan Group",
      darkBg: false,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F536d5fd596384b58b6fbb67c4afe0c6f?format=webp&width=800",
      alt: "Hyundai",
      darkBg: false,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fbf3c41bc70234eed96d2135912de8b63?format=webp&width=800",
      alt: "Lotus",
      darkBg: false,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F67603a9011bd41e0977c676cfe29b0fd?format=webp&width=800",
      alt: "Alektiar",
      darkBg: false,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Ff6c21520ffb64e0fbbbe99851b9f16ba?format=webp&width=800",
      alt: "Geely",
      darkBg: false,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fbd71c2c3fb23411bb7947ca2f93d7833?format=webp&width=800",
      alt: "Renault",
      darkBg: false,
    },
  ];

  const marqueeLogos = [...trustedLogos, ...trustedLogos, ...trustedLogos];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white px-6 sm:px-12 lg:px-20 xl:px-24 pt-16 pb-12 md:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
          <div className="order-2 space-y-6 md:order-1 md:space-y-8">
            <h1 className="font-alata text-[44px] md:text-[68px] font-normal leading-[115%] tracking-[-0.44px] text-[#0C0801] md:max-w-[540px]">
              Empowering Your Digital Transformation Journey
            </h1>
            <p className="font-montserrat text-sm md:text-lg leading-[160%] text-[#1F2A44]/80 md:max-w-[520px]">
              At TecNext, we drive measurable business impact through innovative digital solutions. Join us in redefining excellence in your enterprise.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#3A6FF1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_22px_rgba(58,111,241,0.25)] transition-all hover:-translate-y-[1px] hover:shadow-[0_16px_28px_rgba(58,111,241,0.3)] md:text-base md:w-auto"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#D7DFF3] bg-white px-6 py-3 text-sm font-semibold text-[#1F2A44] transition-colors hover:bg-[#F5F7FD] md:text-base md:w-auto"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex justify-center md:hidden">
              <div className="relative w-full max-w-[280px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F76371dea96934020b9f65c8239e04b08?format=webp&width=800"
                  alt="Hyundai sedan parked at sunset"
                  className="w-full rounded-[26px] object-cover"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fdb1e4561373742b18851d6f9b06c7299?format=webp&width=800"
                  alt="Hyundai Click to Buy mobile interface preview"
                  className="absolute -bottom-10 left-0 w-[55%] max-w-[150px] rounded-[20px] border border-white object-cover"
                />
              </div>
            </div>
            <div className="hidden pb-12 md:flex md:justify-end">
              <div className="relative w-full max-w-[480px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F76371dea96934020b9f65c8239e04b08?format=webp&width=1200"
                  alt="Hyundai sedan parked at sunset"
                  className="w-full rounded-[28px] object-cover"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fdb1e4561373742b18851d6f9b06c7299?format=webp&width=800"
                  alt="Hyundai Click to Buy mobile interface preview"
                  className="absolute -bottom-14 left-0 w-[45%] max-w-[220px] rounded-[24px] border border-white object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 md:px-16 py-20 md:py-28">
  <div className="mx-auto max-w-[1280px] grid md:grid-cols-2 gap-12 md:gap-20 items-center">
    {/* Left side - Features */}
    <div className="space-y-12">
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Feature Item */}
        <div className="space-y-3">
          <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="#0C0801"/>
          </svg>
          <h3 className="font-alata text-lg md:text-xl text-[#0C0801]">
            Transform Your Future
          </h3>
          <p className="font-montserrat text-sm md:text-base text-[#0C0801]">
            Accelerate your decision-making with data-driven insights and real-time analytics.
          </p>
          <a href="/services" className="inline-flex items-center gap-2 font-montserrat text-sm md:text-base text-[#0C0801]">
            Learn More →
          </a>
        </div>

        {/* Repeat feature items */}
        <div className="space-y-3">
          <svg width="48" height="48" viewBox="0 0 49 49" fill="none"><path d="..." fill="#0C0801"/></svg>
          <h3 className="font-alata text-lg md:text-xl text-[#0C0801]">
            Engage Customers Effectively
          </h3>
          <p className="font-montserrat text-sm md:text-base text-[#0C0801]">
            Boost customer interactions through personalized experiences.
          </p>
          <a href="/discover" className="inline-flex items-center gap-2 font-montserrat text-sm md:text-base text-[#0C0801]">
            Discover →
          </a>
        </div>

        <div className="space-y-3">
          <svg width="48" height="48" viewBox="0 0 49 49" fill="none"><path d="..." fill="#0C0801"/></svg>
          <h3 className="font-alata text-lg md:text-xl text-[#0C0801]">
            Achieve Operational Excellence
          </h3>
          <p className="font-montserrat text-sm md:text-base text-[#0C0801]">
            Streamline processes to enhance efficiency and reduce operational costs.
          </p>
          <a href="/explore" className="inline-flex items-center gap-2 font-montserrat text-sm md:text-base text-[#0C0801]">
            Explore →
          </a>
        </div>

        <div className="space-y-3">
          <svg width="48" height="48" viewBox="0 0 49 49" fill="none"><path d="..." fill="#0C0801"/></svg>
          <h3 className="font-alata text-lg md:text-xl text-[#0C0801]">
            Scale for Tomorrow
          </h3>
          <p className="font-montserrat text-sm md:text-base text-[#0C0801]">
            Prepare your business with scalable and adaptable solutions.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 font-montserrat text-sm md:text-base text-[#0C0801]">
            Contact →
          </a>
        </div>
      </div>
    </div>

    {/* Right side - Image */}
    <div className="flex justify-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F8ccc1728d82a486ebe77d9a9c2004e39?format=webp&width=1600"
        alt="TecNext digital platform displayed across multiple devices"
        className="w-full max-w-[700px] md:max-w-[800px] rounded-2xl object-contain"
      />
    </div>
  </div>
</section>


      {/* Trusted by section */}
      <section className="bg-white px-5 md:px-16 py-12 md:py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="font-montserrat text-xs md:text-lg font-bold text-[#0C0801]">
            Trusted by industry leaders worldwide
          </h2>
          <div className="mt-8 flex w-full justify-center">
            <div
              ref={trustedLogosRef}
              className="flex w-full max-w-[960px] gap-8 overflow-x-auto scroll-smooth px-2 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`}
                  className="flex h-14 min-w-[140px] flex-shrink-0 items-center justify-center md:h-16 md:min-w-[180px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Blue */}
      <section className="bg-[#173462] px-5 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] text-center">
          <div className="mx-auto max-w-[768px]">
            <div className="mb-3">
              <span className="font-montserrat text-base font-semibold text-white">Transform</span>
            </div>
            <h2 className="font-alata text-[40px] md:text-[52px] font-normal leading-[120%] tracking-[-0.4px] md:tracking-[-0.52px] text-white">
              Empowering Your Digital Transformation Journey
            </h2>
            <p className="mt-5 font-montserrat text-xs md:text-lg font-normal leading-[150%] text-white">
              At TecNext, we specialize in driving digital transformation across industries. Our six core service pillars ensure that your business achieves measurable impact and sustainable growth.
            </p>
          </div>

          <div className="mt-12 md:mt-20 space-y-12">
            {/* Services Grid - Single column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg"
                  alt="Business professionals discussing data charts in a modern office"
                  loading="lazy"
                  className="h-[198px] md:h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-[24px] md:text-4xl font-normal leading-[130%] tracking-[-0.24px] md:tracking-[-0.36px] text-white">
                    Digital Transformation Strategy
                  </h3>
                  <p className="mt-5 font-montserrat text-xs md:text-base font-normal leading-[150%] text-white">
                    Craft a tailored roadmap to navigate your digital journey.
                  </p>
                  <div className="text-center mt-3">
                    <Link to="/digital-transmissions" className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-white underline decoration-white/50 hover:decoration-transparent">
                      Learn more
                      <ArrowRight className="h-5 w-5 stroke-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/7552326/pexels-photo-7552326.jpeg"
                  alt="Online shopping and eCommerce planning on tablet"
                  loading="lazy"
                  className="h-[198px] md:h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-[24px] md:text-4xl font-normal leading-[130%] tracking-[-0.24px] md:tracking-[-0.36px] text-white">
                    eCommerce Excellence Suite
                  </h3>
                  <p className="mt-5 font-montserrat text-xs md:text-base font-normal leading-[150%] text-white">
                    Elevate your online presence with our comprehensive solutions.
                  </p>
                  <div className="text-center mt-3">
                    <Link to="/p/ecommerce" className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-white underline decoration-white/50 hover:decoration-transparent">
                      Learn more
                      <ArrowRight className="h-5 w-5 stroke-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg"
                  alt="Business analytics report and dashboard on desk"
                  loading="lazy"
                  className="h-[198px] md:h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-[24px] md:text-4xl font-normal leading-[130%] tracking-[-0.24px] md:tracking-[-0.36px] text-white">
                    Data & Analytics Intelligence
                  </h3>
                  <p className="mt-5 font-montserrat text-xs md:text-base font-normal leading-[150%] text-white">
                    Leverage data-driven insights to make informed decisions.
                  </p>
                  <div className="text-center mt-3">
                    <Link to="/p/analytics" className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-white underline decoration-white/50 hover:decoration-transparent">
                      Learn more
                      <ArrowRight className="h-5 w-5 stroke-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/6869043/pexels-photo-6869043.jpeg"
                  alt="Happy service team delivering packages to customers"
                  loading="lazy"
                  className="h-[198px] md:h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-[24px] md:text-4xl font-normal leading-[130%] tracking-[-0.24px] md:tracking-[-0.36px] text-white">
                    Customer Experience Excellence
                  </h3>
                  <p className="mt-5 font-montserrat text-xs md:text-base font-normal leading-[150%] text-white">
                    Enhance customer satisfaction through personalized experiences.
                  </p>
                  <div className="text-center mt-3">
                    <Link to="/p/customer-experience" className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-white underline decoration-white/50 hover:decoration-transparent">
                      Learn more
                      <ArrowRight className="h-5 w-5 stroke-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/30965500/pexels-photo-30965500.jpeg"
                  alt="Tiles spelling SECURITY representing cybersecurity protection"
                  loading="lazy"
                  className="h-[198px] md:h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-[24px] md:text-4xl font-normal leading-[130%] tracking-[-0.24px] md:tracking-[-0.36px] text-white">
                    Technology Risk Management & Cybersecurity
                  </h3>
                  <p className="mt-5 font-montserrat text-xs md:text-base font-normal leading-[150%] text-white">
                    Safeguard your business with robust security measures.
                  </p>
                  <div className="text-center mt-3">
                    <Link to="/p/cybersecurity" className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-white underline decoration-white/50 hover:decoration-transparent">
                      Learn more
                      <ArrowRight className="h-5 w-5 stroke-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
                  alt="Project planning and success roadmap at whiteboard"
                  loading="lazy"
                  className="h-[198px] md:h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-[24px] md:text-4xl font-normal leading-[130%] tracking-[-0.24px] md:tracking-[-0.36px] text-white">
                    Project Success Enablement
                  </h3>
                  <p className="mt-5 font-montserrat text-xs md:text-base font-normal leading-[150%] text-white">
                    Ensure project delivery on time and within budget.
                  </p>
                  <div className="text-center mt-3">
                    <Link to="/p/project-success" className="inline-flex items-center gap-2 font-montserrat text-sm font-medium text-white underline decoration-white/50 hover:decoration-transparent">
                      Learn more
                      <ArrowRight className="h-5 w-5 stroke-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Link
              to="/services"
              className="w-full md:w-auto text-center rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-xs md:text-base font-medium text-[#0C0801] hover:bg-gray-50"
            >
              Learn More
            </Link>
            <Link
              to="/p/get-started"
              className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 font-montserrat text-xs md:text-base font-medium text-white"
            >
              Get Started
              <ArrowRight className="h-6 w-6 stroke-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Potential Section */}
      <section className="bg-white px-5 md:px-16 py-16 md:py-28 border-y-2 border-[#173462]">
        <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F0113bf1eb340433e8e66583852d063b4?format=webp&width=1200"
              alt="Laptop displaying TecNext digital sales platform"
              className="w-full max-w-[520px] object-contain"
            />
          </div>
          <div className="flex-1 max-w-[460px] text-center md:text-left">
            <h2 className="font-alata text-[32px] md:text-[44px] font-normal leading-[120%] tracking-[-0.32px] md:tracking-[-0.44px] text-[#0C0801]">
              Unlock Your Business Potential with TecNext's Transformative Solutions
            </h2>
            <p className="mt-4 font-montserrat text-xs md:text-lg font-normal leading-[150%] text-[#0C0801]">
              At TecNext, we empower businesses to thrive in a digital-first world. Our tailored strategies ensure faster decision-making, enhance customer engagement, and drive operational excellence for future-ready scalability.
            </p>
          </div>
        </div>
      </section>

      {/* AI Section - Dark Blue */}
      <section className="bg-[#173462] px-6 md:px-16 py-16 md:py-28">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          <div className="flex-1 max-w-[500px] text-center text-white md:text-left">
            <h2 className="font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px]">
              Harnessing Agentic AI and Analytics for Transformative Enterprise Solutions
            </h2>
            <p className="mt-4 font-montserrat text-[22px] font-normal leading-[150%] text-white/80">
              In today's digital landscape, Agentic AI and advanced analytics are pivotal for enterprise transformation. They empower organizations to make data-driven decisions, enhancing operational efficiency and customer engagement.
            </p>
            
            <div className="mt-8 grid w-full gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
                    <path d="M20.4838 33.8086C24.1098 33.8086 27.2058 32.5317 29.7718 29.9781C32.3378 27.4247 33.6208 24.3256 33.6208 20.6806C33.6208 17.0636 32.3373 13.9881 29.7703 11.4541C27.2033 8.92008 24.1098 7.65308 20.4898 7.65308C16.8678 7.65308 13.7936 8.92058 11.2673 11.4556C8.74063 13.9906 7.4773 17.0636 7.4773 20.6746C7.4773 24.3236 8.74063 27.4247 11.2673 29.9781C13.7936 32.5317 16.8658 33.8086 20.4838 33.8086ZM20.5378 26.1216C20.0801 26.1216 19.6996 25.9652 19.3963 25.6526C19.093 25.3402 18.9413 24.9567 18.9413 24.5021V14.4866C18.9413 14.0319 19.0958 13.6484 19.4048 13.3361C19.7141 13.0234 20.0976 12.8671 20.5553 12.8671C21.0133 12.8671 21.3966 13.0234 21.7053 13.3361C22.014 13.6484 22.1683 14.0319 22.1683 14.4866V24.5021C22.1683 24.9567 22.0111 25.3402 21.6968 25.6526C21.3821 25.9652 20.9958 26.1216 20.5378 26.1216ZM13.2398 26.1216C12.7821 26.1216 12.3996 25.9652 12.0923 25.6526C11.7853 25.3402 11.6318 24.9567 11.6318 24.5021V18.6606C11.6318 18.2059 11.789 17.8224 12.1033 17.5101C12.418 17.1974 12.8043 17.0411 13.2623 17.0411C13.72 17.0411 14.1025 17.1974 14.4098 17.5101C14.7171 17.8224 14.8708 18.2059 14.8708 18.6606V24.5021C14.8708 24.9567 14.7135 25.3402 14.3988 25.6526C14.0841 25.9652 13.6978 26.1216 13.2398 26.1216ZM27.8478 26.1216C27.3898 26.1216 27.0071 25.9652 26.6998 25.6526C26.3928 25.3402 26.2393 24.9567 26.2393 24.5021V20.7106C26.2393 20.2592 26.3966 19.8786 26.7113 19.5686C27.026 19.2582 27.4121 19.1031 27.8698 19.1031C28.3278 19.1031 28.7103 19.2582 29.0173 19.5686C29.3246 19.8786 29.4783 20.2592 29.4783 20.7106V24.5021C29.4783 24.9567 29.321 25.3402 29.0063 25.6526C28.6916 25.9652 28.3055 26.1216 27.8478 26.1216ZM20.4843 37.1311C15.9413 37.1311 12.0838 35.5321 8.9118 32.3341C5.74013 29.1361 4.1543 25.2557 4.1543 20.6931C4.1543 16.1304 5.73763 12.2626 8.9043 9.08958C12.071 5.91658 15.9356 4.33008 20.4983 4.33008C25.061 4.33008 28.9425 5.92008 32.1428 9.10008C35.3431 12.2797 36.9433 16.1379 36.9433 20.6746C36.9433 22.6489 36.6203 24.5146 35.9743 26.2716C35.3283 28.0286 34.422 29.6196 33.2553 31.0446L43.5208 41.3096C43.8605 41.6496 44.024 42.0474 44.0113 42.5031C43.9986 42.9587 43.831 43.3566 43.5083 43.6966C43.1933 44.0362 42.7955 44.2061 42.3148 44.2061C41.8338 44.2061 41.4235 44.0362 41.0838 43.6966L30.8683 33.4311C29.4366 34.5977 27.8401 35.5061 26.0788 36.1561C24.3175 36.8061 22.4526 37.1311 20.4843 37.1311Z" fill="white"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-alata text-[18px] md:text-[20px] font-normal leading-[140%] tracking-[-0.18px] text-white">
                    AI Empowerment
                  </h3>
                  <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-white/80">
                    Unlock insights and drive innovation with intelligent AI solutions tailored for your business.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
                    <path d="M16.1485 24.5411C15.7252 24.5411 15.3718 24.6847 15.0885 24.9721C14.8052 25.2597 14.6635 25.6161 14.6635 26.0411V33.2911C14.6635 33.7161 14.808 34.0722 15.097 34.3596C15.3863 34.6472 15.7427 34.7911 16.166 34.7911C16.5897 34.7911 16.9452 34.6472 17.2325 34.3596C17.5198 34.0722 17.6635 33.7161 17.6635 33.2911V26.0411C17.6635 25.6161 17.5168 25.2597 17.2235 24.9721C16.9305 24.6847 16.5722 24.5411 16.1485 24.5411ZM32.641 13.7911C32.2173 13.7911 31.8638 13.9347 31.5805 14.2221C31.2972 14.5097 31.1555 14.8661 31.1555 15.2911V33.2911C31.1555 33.7161 31.3002 34.0722 31.5895 34.3596C31.8785 34.6472 32.2348 34.7911 32.6585 34.7911C33.0818 34.7911 33.4372 34.6472 33.7245 34.3596C34.0118 34.0722 34.1555 33.7161 34.1555 33.2911V15.2911C34.1555 14.8661 34.009 14.5097 33.716 14.2221C33.4227 13.9347 33.0643 13.7911 32.641 13.7911ZM24.3945 28.8911C23.9672 28.8911 23.6118 29.0347 23.3285 29.3221C23.0452 29.6097 22.9035 29.9661 22.9035 30.3911V33.2911C22.9035 33.7161 23.0482 34.0722 23.3375 34.3596C23.6265 34.6472 23.9848 34.7911 24.4125 34.7911C24.8398 34.7911 25.1952 34.6472 25.4785 34.3596C25.7618 34.0722 25.9035 33.7161 25.9035 33.2911V30.3911C25.9035 29.9661 25.7588 29.6097 25.4695 29.3221C25.1805 29.0347 24.8222 28.8911 24.3945 28.8911ZM9.51099 42.9401C8.59099 42.9401 7.79333 42.6022 7.11799 41.9266C6.44233 41.2512 6.10449 40.4536 6.10449 39.5336V9.74858C6.10449 8.82524 6.44233 8.02474 7.11799 7.34708C7.79333 6.66908 8.59099 6.33008 9.51099 6.33008H39.296C40.2193 6.33008 41.0198 6.66908 41.6975 7.34708C42.3755 8.02474 42.7145 8.82524 42.7145 9.74858V39.5336C42.7145 40.4536 42.3755 41.2512 41.6975 41.9266C41.0198 42.6022 40.2193 42.9401 39.296 42.9401H9.51099ZM9.51099 39.5336H39.296V9.74858H9.51099V39.5336ZM24.4125 24.5411C24.8398 24.5411 25.1952 24.3964 25.4785 24.1071C25.7618 23.8181 25.9035 23.4597 25.9035 23.0321C25.9035 22.6047 25.7588 22.2494 25.4695 21.9661C25.1805 21.6827 24.8222 21.5411 24.3945 21.5411C23.9672 21.5411 23.6118 21.6857 23.3285 21.9751C23.0452 22.2641 22.9035 22.6224 22.9035 23.0501C22.9035 23.4774 23.0482 23.8327 23.3375 24.1161C23.6265 24.3994 23.9848 24.5411 24.4125 24.5411Z" fill="white"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-alata text-[18px] md:text-[20px] font-normal leading-[140%] tracking-[-0.18px] text-white">
                    Analytics Advantage
                  </h3>
                  <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-white/80">
                    Leverage analytics to optimize processes and enhance strategic decision-making across your enterprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:flex md:justify-end">
            <div className="w-full max-w-[520px] md:max-w-[640px] overflow-hidden rounded-[26px] bg-transparent shadow-[0_24px_60px_rgba(6,22,72,0.35)]">
              <img
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI and machine learning analytics dashboard with data visualization"
                className="h-[320px] sm:h-[420px] md:h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="bg-[#F2F2F2] px-5 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="font-alata text-[40px] md:text-[52px] font-normal leading-[120%] tracking-[-0.4px] md:tracking-[-0.52px] text-[#0C0801]">
              Project Showcase
            </h2>
            <p className="mt-5 font-montserrat text-xs md:text-lg font-normal leading-[150%] text-[#0C0801]">
              Explore our transformative projects and client success stories.
            </p>
          </div>

          <div className="mt-8 md:mt-20 space-y-8 md:space-y-12">
            <div className="flex gap-6 overflow-x-auto" ref={projectShowcaseRef}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fb251cda8b2424f279153e9cda5f72666?format=webp&width=1200"
                alt="Tablet showing TecNext automotive shopping experience"
                className="h-[314px] md:h-[624px] w-[314px] md:w-[624px] flex-shrink-0 rounded-2xl object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fd08c52847b4a499c85d6217135ac72d2?format=webp&width=1200"
                alt="Desktop configurator interface inside dealership"
                className="h-[314px] md:h-[624px] w-[314px] md:w-[624px] flex-shrink-0 rounded-2xl object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fbdd16a5b03e04e309c0be073bf2f915b?format=webp&width=1200"
                alt="Laptop showcasing TecNext vehicle visualization"
                className="h-[314px] md:h-[624px] w-[314px] md:w-[624px] flex-shrink-0 rounded-2xl object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F3ab33615966e4a08a9da1a147455aaeb?format=webp&width=1200"
                alt="Desktop display of TecNext all vehicles lineup"
                className="h-[314px] md:h-[624px] w-[314px] md:w-[624px] flex-shrink-0 rounded-2xl object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-[#0C0801]"></div>
                <div className="h-2 w-2 rounded-full bg-[#0C0801]/20"></div>
                <div className="h-2 w-2 rounded-full bg-[#0C0801]/20"></div>
                <div className="h-2 w-2 rounded-full bg-[#0C0801]/20"></div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => scrollProjectShowcase(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(12,8,1,0.15)] bg-[#F2F2F2]">
                  <ChevronLeft className="h-6 w-6 text-[#0C0801]" />
                </button>
                <button onClick={() => scrollProjectShowcase(1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(12,8,1,0.15)] bg-[#F2F2F2]">
                  <ChevronRight className="h-6 w-6 text-[#0C0801]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white px-5 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[768px] text-center">
            <div className="mb-3 md:mb-4">
              <span className="font-montserrat text-base font-semibold text-[#0C0801]">Blog</span>
            </div>
            <h2 className="font-alata text-[40px] md:text-[52px] font-normal leading-[120%] tracking-[-0.4px] md:tracking-[-0.52px] text-[#0C0801]">
              Insights on Digital Transformation
            </h2>
            <p className="mt-5 font-montserrat text-xs md:text-lg font-normal leading-[150%] text-[#0C0801]">
              Explore our latest thoughts and innovations in the field.
            </p>
          </div>

          <div className="mt-12 md:mt-20 space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Blog Card 1 */}
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="AI and machine learning technology for business growth"
                  className="h-[221px] md:h-[270px] w-full rounded-2xl object-cover"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-[rgba(12,8,1,0.15)] px-[10px] py-1 font-montserrat text-xs font-bold text-[#0C0801]">
                      Insights
                    </span>
                    <span className="font-montserrat text-xs font-bold text-[#0C0801]">5 min read</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-alata text-5 md:text-[28px] font-normal leading-[140%] tracking-[-0.2px] md:tracking-[-0.28px] text-[#0C0801]">
                      Harnessing AI for Business Growth
                    </h3>
                    <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-[#0C0801]">
                      Discover how AI is reshaping digital transformation strategies today.
                    </p>
                  </div>
                  <Link
                    to="/p/blog/ai-business-growth"
                    className="inline-flex items-center gap-2 font-montserrat text-xs md:text-base font-normal text-[#0C0801]"
                  >
                    Read more
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Online shopping and eCommerce platform interface"
                  className="h-[221px] md:h-[270px] w-full rounded-2xl object-cover"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-[rgba(12,8,1,0.15)] px-[10px] py-1 font-montserrat text-xs font-bold text-[#0C0801]">
                      Trends
                    </span>
                    <span className="font-montserrat text-xs font-bold text-[#0C0801]">5 min read</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-alata text-5 md:text-[28px] font-normal leading-[140%] tracking-[-0.2px] md:tracking-[-0.28px] text-[#0C0801]">
                      The Future of eCommerce
                    </h3>
                    <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-[#0C0801]">
                      Explore the evolving landscape of eCommerce and its challenges.
                    </p>
                  </div>
                  <Link
                    to="/p/blog/future-ecommerce"
                    className="inline-flex items-center gap-2 font-montserrat text-xs md:text-base font-normal text-[#0C0801]"
                  >
                    Read more
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="space-y-6">
                <img
                  src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Data analytics and decision making dashboard with charts and graphs"
                  className="h-[221px] md:h-[270px] w-full rounded-2xl object-cover"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-[rgba(12,8,1,0.15)] px-[10px] py-1 font-montserrat text-xs font-bold text-[#0C0801]">
                      Analysis
                    </span>
                    <span className="font-montserrat text-xs font-bold text-[#0C0801]">5 min read</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-alata text-5 md:text-[28px] font-normal leading-[140%] tracking-[-0.2px] md:tracking-[-0.28px] text-[#0C0801]">
                      Data-Driven Decision Making
                    </h3>
                    <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-[#0C0801]">
                      Learn how data analytics can drive better business outcomes.
                    </p>
                  </div>
                  <Link
                    to="/p/blog/data-driven-decisions"
                    className="inline-flex items-center gap-2 font-montserrat text-xs md:text-base font-normal text-[#0C0801]"
                  >
                    Read more
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/p/blog"
                className="w-full md:w-auto inline-block text-center rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-xs md:text-base font-medium text-[#0C0801] hover:bg-gray-50"
              >
                View all
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
