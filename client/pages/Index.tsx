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
              <div className="w-full max-w-[320px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F56287135571f4a0f8e7347844952d17d?format=webp&width=800"
                  alt="Hyundai Click to Buy mobile app banner"
                  className="w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
            <div className="hidden pb-12 md:flex md:justify-end">
              <div className="w-full max-w-[520px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F56287135571f4a0f8e7347844952d17d?format=webp&width=1200"
                  alt="Hyundai Click to Buy mobile app banner"
                  className="w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-5 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-start gap-12 md:gap-20">
          {/* Left side - Features list */}
          <div className="flex-1">
            <div className="space-y-8 md:space-y-8">
              {/* Mobile: Single column layout, Desktop: 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.975 18.6266H5.73899C5.26933 18.6266 4.87949 18.4707 4.56949 18.1591C4.25949 17.8474 4.10449 17.4584 4.10449 16.9921C4.10449 16.5254 4.25949 16.1372 4.56949 15.8276C4.87949 15.5179 5.26933 15.3631 5.73899 15.3631H14.975V8.49705L12.2645 11.2201C11.9345 11.5437 11.5492 11.7056 11.1085 11.7056C10.6675 11.7056 10.278 11.5437 9.93999 11.2201C9.62999 10.8961 9.47699 10.5121 9.48099 10.0681C9.48499 9.62439 9.64899 9.24055 9.97299 8.91655L15.4135 3.47655C15.7532 3.13655 16.1528 2.96655 16.6125 2.96655C17.0725 2.96655 17.4723 3.13655 17.812 3.47655L23.2645 8.92855C23.5805 9.25389 23.7423 9.63605 23.75 10.0751C23.758 10.5144 23.6052 10.8961 23.2915 11.2201C22.9495 11.5437 22.5565 11.7056 22.1125 11.7056C21.6688 11.7056 21.285 11.5397 20.961 11.2081L18.25 8.49705V30.6451H43.083C43.545 30.6451 43.9325 30.8034 44.2455 31.1201C44.5582 31.4367 44.7145 31.8291 44.7145 32.2971C44.7145 32.7617 44.5582 33.1484 44.2455 33.4571C43.9325 33.7657 43.545 33.9201 43.083 33.9201H33.8555V40.7861L36.5665 38.0751C36.8868 37.7434 37.2673 37.5774 37.708 37.5771C38.149 37.5767 38.5437 37.7427 38.892 38.0751C39.201 38.3991 39.3535 38.7811 39.3495 39.2211C39.3455 39.6607 39.1817 40.0426 38.858 40.3666L33.4055 45.8186C33.0652 46.1586 32.6672 46.3266 32.2115 46.3226C31.7562 46.3186 31.3585 46.1506 31.0185 45.8186L25.5665 40.3546C25.2425 40.0386 25.0785 39.6607 25.0745 39.2211C25.0705 38.7811 25.2232 38.3991 25.5325 38.0751C25.8785 37.7427 26.2717 37.5787 26.712 37.5831C27.152 37.5874 27.538 37.7514 27.87 38.0751L30.5685 40.7861V33.9201H18.25C17.3133 33.9201 16.5333 33.6109 15.91 32.9926C15.2867 32.3746 14.975 31.5921 14.975 30.6451V18.6266ZM30.5685 27.6451V18.6266H21.25V15.3631H30.5685C31.5142 15.3631 32.2985 15.6724 32.9215 16.2911C33.5442 16.9094 33.8555 17.6879 33.8555 18.6266V27.6451H30.5685Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-5 md:text-[20px] font-normal leading-[140%] tracking-[-0.2px] text-[#0C0801]">
                    Transform Your Future
                  </h3>
                  <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-[#0C0801]">
                    Accelerate your decision-making with data-driven insights and real-time analytics.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 font-montserrat text-xs md:text-base font-normal text-[#0C0801]"
                    >
                      Learn More
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
                <div className="space-y-3">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4145 22.2036L4.96199 19.1156C4.69733 18.9759 4.48816 18.7744 4.33449 18.5111C4.18116 18.2481 4.10449 17.9604 4.10449 17.6481V11.3961C4.10449 11.0837 4.18116 10.7961 4.33449 10.5331C4.48816 10.2697 4.69733 10.0682 4.96199 9.92856L10.4145 6.85256C10.6688 6.70323 10.948 6.62856 11.252 6.62856C11.556 6.62856 11.8405 6.70323 12.1055 6.85256L17.57 9.92856C17.8267 10.0682 18.0338 10.2697 18.1915 10.5331C18.3488 10.7961 18.4275 11.0837 18.4275 11.3961V17.6481C18.4275 17.9604 18.3488 18.2481 18.1915 18.5111C18.0338 18.7744 17.8267 18.9759 17.57 19.1156L12.1055 22.2036C11.8512 22.3529 11.572 22.4276 11.268 22.4276C10.964 22.4276 10.6795 22.3529 10.4145 22.2036ZM11.26 18.8806L15.1045 16.6766V12.3676L11.26 10.1631L7.42749 12.3676V16.6766L11.26 18.8806ZM33.2145 23.1361V19.3156L39.011 22.6961C39.55 23.0147 39.9687 23.4299 40.267 23.9416C40.5653 24.4532 40.7145 25.0076 40.7145 25.6046V35.9176C40.7145 36.5069 40.5653 37.0592 40.267 37.5746C39.9687 38.0902 39.55 38.5036 39.011 38.8146L30.262 43.9331C29.7207 44.2394 29.1463 44.3926 28.539 44.3926C27.9313 44.3926 27.3623 44.2394 26.832 43.9331L18.083 38.8146C17.544 38.5036 17.1273 38.0902 16.833 37.5746C16.5387 37.0592 16.3915 36.5069 16.3915 35.9176V25.6046C16.3915 25.0076 16.5387 24.4532 16.833 23.9416C17.1273 23.4299 17.544 23.0147 18.083 22.6961L23.8915 19.3156V23.1361L19.7145 25.5951V35.9531L28.547 41.0701L37.3915 35.9531V25.5951L33.2145 23.1361ZM30.2145 15.6536V25.9981C30.2145 26.4631 30.052 26.8552 29.727 27.1746C29.4017 27.4939 29.0053 27.6536 28.538 27.6536C28.0707 27.6536 27.6795 27.4939 27.3645 27.1746C27.0492 26.8552 26.8915 26.4631 26.8915 25.9981V6.04607C26.8915 5.56507 27.0552 5.1589 27.3825 4.82756C27.7098 4.49623 28.114 4.33057 28.595 4.33057H41.582C42.245 4.33057 42.7422 4.63506 43.0735 5.24406C43.4052 5.8534 43.3803 6.4399 42.999 7.00356L41.6285 9.02856C41.4378 9.31523 41.3425 9.6354 41.3425 9.98907C41.3425 10.3431 41.4378 10.6692 41.6285 10.9676L42.999 12.9806C43.3803 13.5522 43.4052 14.1407 43.0735 14.7461C42.7422 15.3511 42.245 15.6536 41.582 15.6536H30.2145Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-5 md:text-[20px] font-normal leading-[140%] tracking-[-0.2px] text-[#0C0801]">
                    Engage Customers Effectively
                  </h3>
                  <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-[#0C0801]">
                    Boost customer interactions through personalized experiences and targeted communication strategies.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/p/discover"
                      className="inline-flex items-center gap-2 font-montserrat text-xs md:text-base font-normal text-[#0C0801]"
                    >
                      Discover
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.095 33.0201L27.3265 29.9351C27.8915 29.7611 28.376 29.4721 28.78 29.0681C29.184 28.6641 29.473 28.1796 29.647 27.6146L32.732 17.3831C32.8397 17.0631 32.7713 16.7777 32.527 16.5271C32.2823 16.2767 31.994 16.2054 31.662 16.3131L21.4305 19.3981C20.8655 19.5721 20.381 19.8611 19.977 20.2651C19.573 20.6691 19.284 21.1536 19.11 21.7186L16.025 31.9501C15.9173 32.2701 15.9857 32.5554 16.23 32.8061C16.4747 33.0564 16.763 33.1277 17.095 33.0201ZM24.389 26.4621C23.8877 26.4621 23.4613 26.2816 23.11 25.9206C22.7587 25.5592 22.583 25.1281 22.583 24.6271C22.583 24.1257 22.7635 23.6994 23.1245 23.3481C23.4858 22.9967 23.917 22.8211 24.418 22.8211C24.9193 22.8211 25.3457 23.0016 25.697 23.3626C26.0483 23.7239 26.224 24.1551 26.224 24.6561C26.224 25.1574 26.0435 25.5837 25.6825 25.9351C25.3212 26.2864 24.89 26.4621 24.389 26.4621ZM24.4185 44.9406C21.6118 44.9406 18.9778 44.4092 16.5165 43.3466C14.0552 42.2839 11.9025 40.8306 10.0585 38.9866C8.21449 37.1426 6.76116 34.9892 5.69849 32.5266C4.63583 30.0639 4.10449 27.4277 4.10449 24.6181C4.10449 21.8087 4.63583 19.1721 5.69849 16.7081C6.76116 14.2444 8.21383 12.0987 10.0565 10.2711C11.8992 8.44307 14.0522 6.99607 16.5155 5.93007C18.9788 4.86373 21.6157 4.33057 24.426 4.33057C27.236 4.33057 29.8735 4.8634 32.3385 5.92906C34.8032 6.99473 36.949 8.4409 38.776 10.2676C40.6033 12.0942 42.0498 14.2422 43.1155 16.7116C44.1815 19.1809 44.7145 21.8197 44.7145 24.6281C44.7145 27.4361 44.1813 30.0706 43.115 32.5316C42.049 34.9929 40.602 37.1421 38.774 38.9791C36.9463 40.8157 34.7985 42.2686 32.3305 43.3376C29.8625 44.4062 27.2252 44.9406 24.4185 44.9406ZM24.4255 41.5341C29.1282 41.5341 33.1155 39.8906 36.3875 36.6036C39.6598 33.3166 41.296 29.3219 41.296 24.6196C41.296 19.9169 39.6607 15.9296 36.39 12.6576C33.1193 9.38523 29.1327 7.74907 24.43 7.74907C19.7273 7.74907 15.7318 9.3844 12.4435 12.6551C9.15516 15.9257 7.51099 19.9124 7.51099 24.6151C7.51099 29.3177 9.15449 33.3132 12.4415 36.6016C15.7285 39.8899 19.7232 41.5341 24.4255 41.5341Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-5 md:text-[20px] font-normal leading-[140%] tracking-[-0.2px] text-[#0C0801]">
                    Achieve Operational Excellence
                  </h3>
                  <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-[#0C0801]">
                    Streamline processes to enhance efficiency and reduce operational costs across your organization.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/p/explore"
                      className="inline-flex items-center gap-2 font-montserrat text-xs md:text-base font-normal text-[#0C0801]"
                    >
                      Explore
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
                <div className="space-y-3">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.509 44.6657H6.19501C5.70568 44.6657 5.28918 44.4853 4.94551 44.1247C4.60151 43.7643 4.45018 43.3395 4.49151 42.8502C4.80885 37.9302 6.30518 33.5947 8.98051 29.8437C11.6558 26.093 15.5623 23.8223 20.7 23.0317V16.3687C19.1967 16.1703 17.6068 15.8445 15.9305 15.3912C14.2545 14.9378 12.6713 14.3175 11.181 13.5302C9.69101 12.7428 8.38218 11.7905 7.25451 10.6732C6.12718 9.55584 5.35151 8.23367 4.92751 6.70667C4.77818 6.17634 4.87551 5.69568 5.21951 5.26468C5.56318 4.83334 6.01685 4.61768 6.58051 4.61768H42.2265C42.7902 4.61768 43.2498 4.83334 43.6055 5.26468C43.9615 5.69568 44.0568 6.17634 43.8915 6.70667C43.4755 8.23367 42.7038 9.55984 41.5765 10.6852C40.4488 11.8105 39.1378 12.7648 37.6435 13.5482C36.1495 14.3315 34.5625 14.9498 32.8825 15.4032C31.2022 15.8565 29.6103 16.1783 28.107 16.3687V23.0317C33.2447 23.8223 37.1512 26.093 39.8265 29.8437C42.5018 33.5947 44.0022 37.9302 44.3275 42.8502C44.3608 43.3395 44.2055 43.7643 43.8615 44.1247C43.5178 44.4853 43.1013 44.6657 42.612 44.6657H34.298C33.809 44.6657 33.4028 44.504 33.0795 44.1807C32.7565 43.8577 32.595 43.4515 32.595 42.9622C32.595 42.4732 32.7565 42.067 33.0795 41.7437C33.4028 41.4207 33.809 41.2592 34.298 41.2592H40.787C40.1553 36.4235 38.3532 32.6865 35.3805 30.0482C32.4082 27.4098 28.7452 26.0907 24.3915 26.0907C20.0458 26.0907 16.3908 27.4098 13.4265 30.0482C10.4618 32.6865 8.65968 36.4235 8.02001 41.2592H14.509C14.998 41.2592 15.4042 41.4207 15.7275 41.7437C16.0505 42.067 16.212 42.4732 16.212 42.9622C16.212 43.4515 16.0505 43.8577 15.7275 44.1807C15.4042 44.504 14.998 44.6657 14.509 44.6657ZM24.4035 13.3677C27.7295 13.3677 30.8667 12.7912 33.815 11.6382C36.763 10.4855 38.6647 9.23701 39.52 7.89268H9.28701C10.1423 9.23701 12.044 10.4855 14.992 11.6382C17.9403 12.7912 21.0775 13.3677 24.4035 13.3677ZM24.272 44.6657C23.156 44.6657 22.2003 44.27 21.405 43.4787C20.6097 42.6873 20.212 41.7337 20.212 40.6177C20.212 40.043 20.3203 39.5183 20.537 39.0437C20.7537 38.569 21.0533 38.1445 21.436 37.7702C21.828 37.3702 22.38 36.9637 23.092 36.5507C23.804 36.138 24.6513 35.715 25.634 35.2817L30.4545 33.2917C30.8025 33.1423 31.109 33.2087 31.374 33.4907C31.6393 33.7723 31.6973 34.0832 31.548 34.4232L29.558 39.2557C29.1247 40.2383 28.706 41.0857 28.302 41.7977C27.898 42.5097 27.5 43.0617 27.108 43.4537C26.7333 43.8363 26.3087 44.134 25.834 44.3467C25.3593 44.5593 24.8387 44.6657 24.272 44.6657Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-5 md:text-[20px] font-normal leading-[140%] tracking-[-0.2px] text-[#0C0801]">
                    Scale for Tomorrow
                  </h3>
                  <p className="font-montserrat text-xs md:text-base font-normal leading-[150%] text-[#0C0801]">
                    Prepare your business for future challenges with scalable and adaptable solutions.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-montserrat text-xs md:text-base font-normal text-[#0C0801]"
                    >
                      Contact
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right side - Large image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F65c9e8f775d944928e27a641be2fd084?format=webp&width=1200"
              alt="Tablet showcasing TecNext features dashboard"
              className="w-full max-w-[520px] object-contain"
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
