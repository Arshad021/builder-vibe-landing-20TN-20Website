import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white px-6 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1">
            <h1 className="max-w-xl font-alata text-[36px] md:text-[72px] font-normal leading-[120%] tracking-[-0.72px] text-[#0C0801]">
              Empowering Your Digital Transformation Journey
            </h1>
            <p className="mt-6 max-w-xl font-montserrat text-lg font-normal leading-[150%] text-[#0C0801]">
              At TecNext, we drive measurable business impact through innovative digital solutions. Join us in redefining excellence in your enterprise.
            </p>
            <div className="mt-8 flex items-start gap-4">
              <Link
                to="/p/learn-more"
                className="rounded-full border border-[#3B82F6] bg-[#3B82F6] px-3 py-[6px] font-montserrat text-base font-medium text-white hover:opacity-90"
              >
                Learn More
              </Link>
              <Link
                to="/p/contact"
                className="rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-base font-medium text-[#0C0801] hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative h-[638px]">
              {/* Main image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b879fabe2944a804c205068acbb184b66a1a03d0?width=848"
                alt=""
                className="absolute left-[92px] top-0 h-[638px] w-[424px] rounded-2xl object-cover"
              />
              {/* Top right image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/36d4d519aff18cba8cd7b36c69836aff1536271a?width=488"
                alt=""
                className="absolute left-[364px] top-16 h-[244px] w-[244px] rounded-2xl object-cover"
              />
              {/* Bottom left image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b3ac33bd245cb7944dbdb1b5161a44fb521f4db9?width=608"
                alt=""
                className="absolute left-0 top-[372px] h-[202px] w-[304px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-start gap-10 md:gap-20">
          {/* Left side - Features list */}
          <div className="flex-1">
            <div className="space-y-8">
              {/* Row 1 */}
              <div className="flex gap-6">
                <div className="flex-1 space-y-4">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.975 18.1104H5.73899C5.26933 18.1104 4.87949 17.9546 4.56949 17.6429C4.25949 17.3313 4.10449 16.9423 4.10449 16.4759C4.10449 16.0093 4.25949 15.6211 4.56949 15.3114C4.87949 15.0018 5.26933 14.8469 5.73899 14.8469H14.975V7.98094L12.2645 10.7039C11.9345 11.0276 11.5492 11.1894 11.1085 11.1894C10.6675 11.1894 10.278 11.0276 9.93999 10.7039C9.62999 10.3799 9.47699 9.99594 9.48099 9.55194C9.48499 9.10827 9.64899 8.72444 9.97299 8.40044L15.4135 2.96044C15.7532 2.62044 16.1528 2.45044 16.6125 2.45044C17.0725 2.45044 17.4723 2.62044 17.812 2.96044L23.2645 8.41244C23.5805 8.73777 23.7423 9.11994 23.75 9.55894C23.758 9.99827 23.6052 10.3799 23.2915 10.7039C22.9495 11.0276 22.5565 11.1894 22.1125 11.1894C21.6688 11.1894 21.285 11.0236 20.961 10.6919L18.25 7.98094V30.1289H43.083C43.545 30.1289 43.9325 30.2873 44.2455 30.6039C44.5582 30.9206 44.7145 31.3129 44.7145 31.7809C44.7145 32.2456 44.5582 32.6323 44.2455 32.9409C43.9325 33.2496 43.545 33.4039 43.083 33.4039H33.8555V40.2699L36.5665 37.5589C36.8868 37.2273 37.2673 37.0613 37.708 37.0609C38.149 37.0606 38.5437 37.2266 38.892 37.5589C39.201 37.8829 39.3535 38.2649 39.3495 38.7049C39.3455 39.1446 39.1817 39.5264 38.858 39.8504L33.4055 45.3024C33.0652 45.6424 32.6672 45.8104 32.2115 45.8064C31.7562 45.8024 31.3585 45.6344 31.0185 45.3024L25.5665 39.8384C25.2425 39.5224 25.0785 39.1446 25.0745 38.7049C25.0705 38.2649 25.2232 37.8829 25.5325 37.5589C25.8785 37.2266 26.2717 37.0626 26.712 37.0669C27.152 37.0713 27.538 37.2353 27.87 37.5589L30.5685 40.2699V33.4039H18.25C17.3133 33.4039 16.5333 33.0948 15.91 32.4764C15.2867 31.8584 14.975 31.0759 14.975 30.1289V18.1104ZM30.5685 27.1289V18.1104H21.25V14.8469H30.5685C31.5142 14.8469 32.2985 15.1563 32.9215 15.7749C33.5442 16.3933 33.8555 17.1718 33.8555 18.1104V27.1289H30.5685Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                    Transform Your Future
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                    Accelerate your decision-making with data-driven insights and real-time analytics.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/p/learn-more"
                      className="inline-flex items-center gap-2 font-montserrat text-base font-medium text-[#0C0801]"
                    >
                      Learn More
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.2145 22.62V18.7994L39.011 22.18C39.55 22.4986 39.9687 22.9138 40.267 23.4255C40.5653 23.9371 40.7145 24.4915 40.7145 25.0885V35.4015C40.7145 35.9908 40.5653 36.5431 40.267 37.0585C39.9687 37.5741 39.55 37.9874 39.011 38.2985L30.262 43.417C29.7207 43.7233 29.1463 43.8764 28.539 43.8764C27.9313 43.8764 27.3623 43.7233 26.832 43.417L18.083 38.2985C17.544 37.9874 17.1273 37.5741 16.833 37.0585C16.5387 36.5431 16.3915 35.9908 16.3915 35.4015V25.0885C16.3915 24.4915 16.5387 23.9371 16.833 23.4255C17.1273 22.9138 17.544 22.4986 18.083 22.18L23.8915 18.7994V22.62L19.7145 25.079V35.4369L28.547 40.554L37.3915 35.4369V25.079L33.2145 22.62ZM30.2145 15.1375V25.482C30.2145 25.947 30.052 26.3391 29.727 26.6585C29.4017 26.9778 29.0053 27.1374 28.538 27.1374C28.0707 27.1374 27.6795 26.9778 27.3645 26.6585C27.0492 26.3391 26.8915 25.947 26.8915 25.482V5.52995C26.8915 5.04895 27.0552 4.64278 27.3825 4.31145C27.7098 3.98012 28.114 3.81445 28.595 3.81445H41.582C42.245 3.81445 42.7422 4.11895 43.0735 4.72795C43.4052 5.33728 43.3803 5.92378 42.999 6.48745L41.6285 8.51245C41.4378 8.79912 41.3425 9.11929 41.3425 9.47295C41.3425 9.82695 41.4378 10.1531 41.6285 10.4515L42.999 12.4645C43.3803 13.0361 43.4052 13.6246 43.0735 14.23C42.7422 14.835 42.245 15.1375 41.582 15.1375H30.2145Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                    Engage Customers Effectively
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                    Boost customer interactions through personalized experiences and targeted communication strategies.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/p/discover"
                      className="inline-flex items-center gap-2 font-montserrat text-base font-medium text-[#0C0801]"
                    >
                      Discover
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-6">
                <div className="flex-1 space-y-4">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.095 32.5039L27.3265 29.4189C27.8915 29.2449 28.376 28.9559 28.78 28.5519C29.184 28.1479 29.473 27.6634 29.647 27.0984L32.732 16.867C32.8397 16.547 32.7713 16.2616 32.527 16.011C32.2823 15.7606 31.994 15.6893 31.662 15.7969L21.4305 18.8819C20.8655 19.056 20.381 19.3449 19.977 19.7489C19.573 20.1529 19.284 20.6374 19.11 21.2024L16.025 31.434C15.9173 31.754 15.9857 32.0393 16.23 32.2899C16.4747 32.5403 16.763 32.6116 17.095 32.5039ZM24.389 25.9459C23.8877 25.9459 23.4613 25.7654 23.11 25.4044C22.7587 25.0431 22.583 24.6119 22.583 24.1109C22.583 23.6096 22.7635 23.1833 23.1245 22.8319C23.4858 22.4806 23.917 22.305 24.418 22.305C24.9193 22.305 25.3457 22.4855 25.697 22.8464C26.0483 23.2078 26.224 23.639 26.224 24.1399C26.224 24.6413 26.0435 25.0676 25.6825 25.4189C25.3212 25.7703 24.89 25.9459 24.389 25.9459ZM24.4185 44.4244C21.6118 44.4244 18.9778 43.8931 16.5165 42.8304C14.0552 41.7678 11.9025 40.3144 10.0585 38.4704C8.21449 36.6264 6.76116 34.4731 5.69849 32.0104C4.63583 29.5478 4.10449 26.9116 4.10449 24.1019C4.10449 21.2926 4.63583 18.656 5.69849 16.192C6.76116 13.7283 8.21383 11.5826 10.0565 9.75495C11.8992 7.92695 14.0522 6.47995 16.5155 5.41395C18.9788 4.34762 21.6157 3.81445 24.426 3.81445C27.236 3.81445 29.8735 4.34728 32.3385 5.41295C34.8032 6.47862 36.949 7.92479 38.776 9.75145C40.6033 11.5781 42.0498 13.7261 43.1155 16.1955C44.1815 18.6648 44.7145 21.3036 44.7145 24.1119C44.7145 26.9199 44.1813 29.5544 43.115 32.0154C42.049 34.4768 40.602 36.6259 38.774 38.4629C36.9463 40.2996 34.7985 41.7524 32.3305 42.8214C29.8625 43.8901 27.2252 44.4244 24.4185 44.4244ZM24.4255 41.0179C29.1282 41.0179 33.1155 39.3744 36.3875 36.0874C39.6598 32.8004 41.296 28.8058 41.296 24.1034C41.296 19.4008 39.6607 15.4135 36.39 12.1415C33.1193 8.86912 29.1327 7.23295 24.43 7.23295C19.7273 7.23295 15.7318 8.86829 12.4435 12.139C9.15516 15.4096 7.51099 19.3963 7.51099 24.0989C7.51099 28.8016 9.15449 32.7971 12.4415 36.0854C15.7285 39.3738 19.7232 41.0179 24.4255 41.0179Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                    Achieve Operational Excellence
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                    Streamline processes to enhance efficiency and reduce operational costs across your organization.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/p/explore"
                      className="inline-flex items-center gap-2 font-montserrat text-base font-medium text-[#0C0801]"
                    >
                      Explore
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.509 44.1496H6.19501C5.70568 44.1496 5.28918 43.9692 4.94551 43.6086C4.60151 43.2482 4.45018 42.8234 4.49151 42.3341C4.80885 37.4141 6.30518 33.0786 8.98051 29.3276C11.6558 25.5769 15.5623 23.3062 20.7 22.5156V15.8526C19.1967 15.6542 17.6068 15.3284 15.9305 14.8751C14.2545 14.4217 12.6713 13.8014 11.181 13.0141C9.69101 12.2267 8.38218 11.2744 7.25451 10.1571C6.12718 9.03973 5.35151 7.71756 4.92751 6.19056C4.77818 5.66023 4.87551 5.17956 5.21951 4.74856C5.56318 4.31723 6.01685 4.10156 6.58051 4.10156H42.2265C42.7902 4.10156 43.2498 4.31723 43.6055 4.74856C43.9615 5.17956 44.0568 5.66023 43.8915 6.19056C43.4755 7.71756 42.7038 9.04373 41.5765 10.1691C40.4488 11.2944 39.1378 12.2487 37.6435 13.0321C36.1495 13.8154 34.5625 14.4337 32.8825 14.8871C31.2022 15.3404 29.6103 15.6622 28.107 15.8526V22.5156C33.2447 23.3062 37.1512 25.5769 39.8265 29.3276C42.5018 33.0786 44.0022 37.4141 44.3275 42.3341C44.3608 42.8234 44.2055 43.2482 43.8615 43.6086C43.5178 43.9692 43.1013 44.1496 42.612 44.1496H34.298C33.809 44.1496 33.4028 43.9879 33.0795 43.6646C32.7565 43.3416 32.595 42.9354 32.595 42.4461C32.595 41.9571 32.7565 41.5509 33.0795 41.2276C33.4028 40.9046 33.809 40.7431 34.298 40.7431H40.787C40.1553 35.9074 38.3532 32.1704 35.3805 29.5321C32.4082 26.8937 28.7452 25.5746 24.3915 25.5746C20.0458 25.5746 16.3908 26.8937 13.4265 29.5321C10.4618 32.1704 8.65968 35.9074 8.02001 40.7431H14.509C14.998 40.7431 15.4042 40.9046 15.7275 41.2276C16.0505 41.5509 16.212 41.9571 16.212 42.4461C16.212 42.9354 16.0505 43.3416 15.7275 43.6646C15.4042 43.9879 14.998 44.1496 14.509 44.1496ZM24.4035 12.8516C27.7295 12.8516 30.8667 12.2751 33.815 11.1221C36.763 9.9694 38.6647 8.7209 39.52 7.37656H9.28701C10.1423 8.7209 12.044 9.9694 14.992 11.1221C17.9403 12.2751 21.0775 12.8516 24.4035 12.8516ZM24.272 44.1496C23.156 44.1496 22.2003 43.7539 21.405 42.9626C20.6097 42.1712 20.212 41.2176 20.212 40.1016C20.212 39.5269 20.3203 39.0022 20.537 38.5276C20.7537 38.0529 21.0533 37.6284 21.436 37.2541C21.828 36.8541 22.38 36.4476 23.092 36.0346C23.804 35.6219 24.6513 35.1989 25.634 34.7656L30.4545 32.7756C30.8025 32.6262 31.109 32.6926 31.374 32.9746C31.6393 33.2562 31.6973 33.5671 31.548 33.9071L29.558 38.7396C29.1247 39.7222 28.706 40.5696 28.302 41.2816C27.898 41.9936 27.5 42.5456 27.108 42.9376C26.7333 43.3202 26.3087 43.6179 25.834 43.8306C25.3593 44.0432 24.8387 44.1496 24.272 44.1496Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                    Scale for Tomorrow
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                    Prepare your business for future challenges with scalable and adaptable solutions.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/p/contact"
                      className="inline-flex items-center gap-2 font-montserrat text-base font-medium text-[#0C0801]"
                    >
                      Contact
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex gap-6">
                <div className="flex-1 space-y-4">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.8633 14.3655L41.5833 13.8655C41.2221 13.2609 40.7127 12.7583 40.1033 12.4055L26.6833 4.66549C26.0757 4.31299 25.3859 4.12673 24.6833 4.12549H24.1033C23.4007 4.12673 22.7109 4.31299 22.1033 4.66549L8.68332 12.4255C8.07726 12.776 7.57384 13.2794 7.22332 13.8855L6.94332 14.3855C6.59082 14.9932 6.40456 15.683 6.40332 16.3855V31.8855C6.40456 32.5881 6.59082 33.2779 6.94332 33.8855L7.22332 34.3855C7.5829 34.9845 8.0843 35.4859 8.68332 35.8455L22.1233 43.5855C22.7279 43.9453 23.4197 44.1321 24.1233 44.1255H24.6833C25.3859 44.1243 26.0757 43.9381 26.6833 43.5855L40.1033 35.8255C40.7153 35.4829 41.2207 34.9775 41.5633 34.3655L41.8633 33.8655C42.2115 33.2561 42.3975 32.5675 42.4033 31.8655V16.3655C42.4021 15.663 42.2159 14.9732 41.8633 14.3655ZM24.1033 8.12549H24.6833L36.4033 14.8855L24.4033 21.8055L12.4033 14.8855L24.1033 8.12549ZM26.4033 39.1255L38.1033 32.3655L38.4033 31.8655V18.3455L26.4033 25.2855V39.1255Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                    Short heading here
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/p/button"
                      className="inline-flex items-center gap-2 font-montserrat text-base font-medium text-[#0C0801]"
                    >
                      Button
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.8633 14.3655L41.5833 13.8655C41.2221 13.2609 40.7127 12.7583 40.1033 12.4055L26.6833 4.66549C26.0757 4.31299 25.3859 4.12673 24.6833 4.12549H24.1033C23.4007 4.12673 22.7109 4.31299 22.1033 4.66549L8.68332 12.4255C8.07726 12.776 7.57384 13.2794 7.22332 13.8855L6.94332 14.3855C6.59082 14.9932 6.40456 15.683 6.40332 16.3855V31.8855C6.40456 32.5881 6.59082 33.2779 6.94332 33.8855L7.22332 34.3855C7.5829 34.9845 8.0843 35.4859 8.68332 35.8455L22.1233 43.5855C22.7279 43.9453 23.4197 44.1321 24.1233 44.1255H24.6833C25.3859 44.1243 26.0757 43.9381 26.6833 43.5855L40.1033 35.8255C40.7153 35.4829 41.2207 34.9775 41.5633 34.3655L41.8633 33.8655C42.2115 33.2561 42.3975 32.5675 42.4033 31.8655V16.3655C42.4021 15.663 42.2159 14.9732 41.8633 14.3655ZM24.1033 8.12549H24.6833L36.4033 14.8855L24.4033 21.8055L12.4033 14.8855L24.1033 8.12549ZM26.4033 39.1255L38.1033 32.3655L38.4033 31.8655V18.3455L26.4033 25.2855V39.1255Z" fill="#0C0801"/>
                  </svg>
                  <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                    Short heading here
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/p/button"
                      className="inline-flex items-center gap-2 font-montserrat text-base font-medium text-[#0C0801]"
                    >
                      Button
                      <ArrowRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Large image */}
          <div className="flex-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9e52876df6b406deb4eeb28e1f107bd6eddae30a?width=1200"
              alt=""
              className="h-64 w-full rounded-2xl object-cover md:h-[640px]"
            />
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="bg-white px-6 md:px-16 py-12 md:py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="font-montserrat text-lg font-bold text-[#0C0801]">
            Trusted by industry leaders worldwide
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            {/* Logo placeholders */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-14 w-[140px] rounded bg-gray-100"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Dark Blue */}
      <section className="bg-[#173462] px-6 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] text-center">
          <div className="mx-auto max-w-[768px]">
            <div className="mb-4">
              <span className="font-montserrat text-base font-semibold text-white">Transform</span>
            </div>
            <h2 className="font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px] text-white">
              Empowering Your Digital Transformation Journey
            </h2>
            <p className="mt-6 font-montserrat text-lg font-normal leading-[150%] text-white">
              At TecNext, we specialize in driving digital transformation across industries. Our six core service pillars ensure that your business achieves measurable impact and sustainable growth.
            </p>
          </div>

          <div className="mt-20 space-y-12">
            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="space-y-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/174f42d6140c776abdc165a7e9fa9f87f9d22dcb?width=789"
                  alt=""
                  className="h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px] text-white">
                    Digital Transformation Strategy
                  </h3>
                  <p className="mt-6 font-montserrat text-base font-normal leading-[150%] text-white">
                    Craft a tailored roadmap to navigate your digital journey.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7c8036d74c75ccffb533f359da6b4707a483ec6e?width=789"
                  alt=""
                  className="h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px] text-white">
                    eCommerce Excellence Suite
                  </h3>
                  <p className="mt-6 font-montserrat text-base font-normal leading-[150%] text-white">
                    Elevate your online presence with our comprehensive solutions.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1abdc06976e36e428c826c82932d9e4b77294c80?width=789"
                  alt=""
                  className="h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px] text-white">
                    Data & Analytics Intelligence
                  </h3>
                  <p className="mt-6 font-montserrat text-base font-normal leading-[150%] text-white">
                    Leverage data-driven insights to make informed decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="space-y-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cd9571558871ba910a33d3d10d1c2d42d6c7846b?width=789"
                  alt=""
                  className="h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px] text-white">
                    Customer Experience Excellence
                  </h3>
                  <p className="mt-6 font-montserrat text-base font-normal leading-[150%] text-white">
                    Enhance customer satisfaction through personalized experiences.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/473a7dc10707005c3845d52b916614c55a63af53?width=789"
                  alt=""
                  className="h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px] text-white">
                    Technology Risk Management & Cybersecurity
                  </h3>
                  <p className="mt-6 font-montserrat text-base font-normal leading-[150%] text-white">
                    Safeguard your business with robust security measures.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/78a2d327acc8c0a361da44afd4f5c9e8eeda4b47?width=789"
                  alt=""
                  className="h-[234px] w-full rounded-2xl object-cover"
                />
                <div className="text-center">
                  <h3 className="font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px] text-white">
                    Project Success Enablement
                  </h3>
                  <p className="mt-6 font-montserrat text-base font-normal leading-[150%] text-white">
                    Ensure project delivery on time and within budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-center gap-6">
            <Link
              to="/p/learn-more"
              className="rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-base font-medium text-[#0C0801] hover:bg-gray-50"
            >
              Learn More
            </Link>
            <Link
              to="/p/get-started"
              className="inline-flex items-center gap-2 font-montserrat text-base font-medium text-white"
            >
              Get Started
              <ArrowRight className="h-6 w-6 stroke-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Potential Section */}
      <section className="bg-white px-6 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-start gap-10 md:gap-20">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1153c415766d1f905923d36d24bac3b9e04208d6?width=1200"
            alt=""
            className="h-64 flex-1 rounded-2xl object-cover md:h-[640px]"
          />
          <div className="flex-1">
            <h2 className="font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px] text-[#0C0801]">
              Unlock Your Business Potential with TecNext's Transformative Solutions
            </h2>
            <p className="mt-6 font-montserrat text-lg font-normal leading-[150%] text-[#0C0801]">
              At TecNext, we empower businesses to thrive in a digital-first world. Our tailored strategies ensure faster decision-making, enhance customer engagement, and drive operational excellence for future-ready scalability.
            </p>
          </div>
        </div>
      </section>

      {/* AI Section - Dark Blue */}
      <section className="bg-[#173462] px-6 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-start gap-10 md:gap-20">
          <div className="flex-1">
            <h2 className="font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px] text-white">
              Harnessing Agentic AI and Analytics for Transformative Enterprise Solutions
            </h2>
            <p className="mt-6 font-montserrat text-lg font-normal leading-[150%] text-white">
              In today's digital landscape, Agentic AI and advanced analytics are pivotal for enterprise transformation. They empower organizations to make data-driven decisions, enhancing operational efficiency and customer engagement.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex gap-6">
                <div className="space-y-4">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4838 33.6611C24.1098 33.6611 27.2058 32.3843 29.7718 29.8306C32.3378 27.2773 33.6208 24.1781 33.6208 20.5331C33.6208 16.9161 32.3373 13.8406 29.7703 11.3066C27.2033 8.77262 24.1098 7.50562 20.4898 7.50562C16.8678 7.50562 13.7936 8.77311 11.2673 11.3081C8.74063 13.8431 7.4773 16.9161 7.4773 20.5271C7.4773 24.1761 8.74063 27.2773 11.2673 29.8306C13.7936 32.3843 16.8658 33.6611 20.4838 33.6611ZM20.5378 25.9741C20.0801 25.9741 19.6996 25.8178 19.3963 25.5051C19.093 25.1928 18.9413 24.8093 18.9413 24.3546V14.3391C18.9413 13.8844 19.0958 13.501 19.4048 13.1886C19.7141 12.876 20.0976 12.7196 20.5553 12.7196C21.0133 12.7196 21.3966 12.876 21.7053 13.1886C22.014 13.501 22.1683 13.8844 22.1683 14.3391V24.3546C22.1683 24.8093 22.0111 25.1928 21.6968 25.5051C21.3821 25.8178 20.9958 25.9741 20.5378 25.9741ZM13.2398 25.9741C12.7821 25.9741 12.3996 25.8178 12.0923 25.5051C11.7853 25.1928 11.6318 24.8093 11.6318 24.3546V18.5131C11.6318 18.0584 11.789 17.6749 12.1033 17.3626C12.418 17.0499 12.8043 16.8936 13.2623 16.8936C13.72 16.8936 14.1025 17.0499 14.4098 17.3626C14.7171 17.6749 14.8708 18.0584 14.8708 18.5131V24.3546C14.8708 24.8093 14.7135 25.1928 14.3988 25.5051C14.0841 25.8178 13.6978 25.9741 13.2398 25.9741ZM27.8478 25.9741C27.3898 25.9741 27.0071 25.8178 26.6998 25.5051C26.3928 25.1928 26.2393 24.8093 26.2393 24.3546V20.5631C26.2393 20.1118 26.3966 19.7311 26.7113 19.4211C27.026 19.1108 27.4121 18.9556 27.8698 18.9556C28.3278 18.9556 28.7103 19.1108 29.0173 19.4211C29.3246 19.7311 29.4783 20.1118 29.4783 20.5631V24.3546C29.4783 24.8093 29.321 25.1928 29.0063 25.5051C28.6916 25.8178 28.3055 25.9741 27.8478 25.9741ZM20.4843 36.9836C15.9413 36.9836 12.0838 35.3846 8.9118 32.1866C5.74013 28.9886 4.1543 25.1083 4.1543 20.5456C4.1543 15.9829 5.73763 12.1151 8.9043 8.94211C12.071 5.76911 15.9356 4.18262 20.4983 4.18262C25.061 4.18262 28.9425 5.77262 32.1428 8.95262C35.3431 12.1323 36.9433 15.9904 36.9433 20.5271C36.9433 22.5014 36.6203 24.3671 35.9743 26.1241C35.3283 27.8811 34.422 29.4721 33.2553 30.8971L43.5208 41.1621C43.8605 41.5021 44.024 41.8999 44.0113 42.3556C43.9986 42.8113 43.831 43.2091 43.5083 43.5491C43.1933 43.8888 42.7955 44.0586 42.3148 44.0586C41.8338 44.0586 41.4235 43.8888 41.0838 43.5491L30.8683 33.2836C29.4366 34.4503 27.8401 35.3586 26.0788 36.0086C24.3175 36.6586 22.4526 36.9836 20.4843 36.9836Z" fill="white"/>
                  </svg>
                  <h3 className="font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px] text-white">
                    AI Empowerment
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[150%] text-white">
                    Unlock insights and drive innovation with intelligent AI solutions tailored for your business.
                  </p>
                </div>
                <div className="space-y-4">
                  <svg width="48" height="48" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1485 24.3936C15.7252 24.3936 15.3718 24.5373 15.0885 24.8246C14.8052 25.1123 14.6635 25.4686 14.6635 25.8936V33.1436C14.6635 33.5686 14.808 33.9248 15.097 34.2121C15.3863 34.4998 15.7427 34.6436 16.166 34.6436C16.5897 34.6436 16.9452 34.4998 17.2325 34.2121C17.5198 33.9248 17.6635 33.5686 17.6635 33.1436V25.8936C17.6635 25.4686 17.5168 25.1123 17.2235 24.8246C16.9305 24.5373 16.5722 24.3936 16.1485 24.3936ZM32.641 13.6436C32.2173 13.6436 31.8638 13.7873 31.5805 14.0746C31.2972 14.3623 31.1555 14.7186 31.1555 15.1436V33.1436C31.1555 33.5686 31.3002 33.9248 31.5895 34.2121C31.8785 34.4998 32.2348 34.6436 32.6585 34.6436C33.0818 34.6436 33.4372 34.4998 33.7245 34.2121C34.0118 33.9248 34.1555 33.5686 34.1555 33.1436V15.1436C34.1555 14.7186 34.009 14.3623 33.716 14.0746C33.4227 13.7873 33.0643 13.6436 32.641 13.6436ZM24.3945 28.7436C23.9672 28.7436 23.6118 28.8873 23.3285 29.1746C23.0452 29.4623 22.9035 29.8186 22.9035 30.2436V33.1436C22.9035 33.5686 23.0482 33.9248 23.3375 34.2121C23.6265 34.4998 23.9848 34.6436 24.4125 34.6436C24.8398 34.6436 25.1952 34.4998 25.4785 34.2121C25.7618 33.9248 25.9035 33.5686 25.9035 33.1436V30.2436C25.9035 29.8186 25.7588 29.4623 25.4695 29.1746C25.1805 28.8873 24.8222 28.7436 24.3945 28.7436ZM9.51099 42.7926C8.59099 42.7926 7.79333 42.4548 7.11799 41.7791C6.44233 41.1038 6.10449 40.3061 6.10449 39.3861V9.60112C6.10449 8.67778 6.44233 7.87728 7.11799 7.19962C7.79333 6.52162 8.59099 6.18262 9.51099 6.18262H39.296C40.2193 6.18262 41.0198 6.52162 41.6975 7.19962C42.3755 7.87728 42.7145 8.67778 42.7145 9.60112V39.3861C42.7145 40.3061 42.3755 41.1038 41.6975 41.7791C41.0198 42.4548 40.2193 42.7926 39.296 42.7926H9.51099ZM9.51099 39.3861H39.296V9.60112H9.51099V39.3861ZM24.4125 24.3936C24.8398 24.3936 25.1952 24.2489 25.4785 23.9596C25.7618 23.6706 25.9035 23.3123 25.9035 22.8846C25.9035 22.4573 25.7588 22.1019 25.4695 21.8186C25.1805 21.5353 24.8222 21.3936 24.3945 21.3936C23.9672 21.3936 23.6118 21.5383 23.3285 21.8276C23.0452 22.1166 22.9035 22.4749 22.9035 22.9026C22.9035 23.3299 23.0482 23.6853 23.3375 23.9686C23.6265 24.2519 23.9848 24.3936 24.4125 24.3936Z" fill="white"/>
                  </svg>
                  <h3 className="font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px] text-white">
                    Analytics Advantage
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[150%] text-white">
                    Leverage analytics to optimize processes and enhance strategic decision-making across your enterprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bd99efbf4c6c21d1b1ffdf012b404184e4d97ccf?width=1200"
            alt=""
            className="h-64 flex-1 rounded-2xl object-cover md:h-[640px]"
          />
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="bg-[#F2F2F2] px-16 py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px] text-[#0C0801]">
              Project Showcase
            </h2>
            <p className="mt-6 font-montserrat text-lg font-normal leading-[150%] text-[#0C0801]">
              Explore our transformative projects and client success stories.
            </p>
          </div>

          <div className="mt-20 space-y-12">
            <div className="flex gap-8 overflow-x-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/594bf3ff798512daf79157fe0d0b2044deff2656?width=1248"
                alt=""
                className="h-[624px] w-[624px] flex-shrink-0 rounded-2xl object-cover"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/acb542d419068d45dd178b8d412690590d7574ce?width=1248"
                alt=""
                className="h-[624px] w-[624px] flex-shrink-0 rounded-2xl object-cover"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7eb655ea82e321cecf614a3476f25b1462e3494d?width=1248"
                alt=""
                className="h-[624px] w-[624px] flex-shrink-0 rounded-2xl object-cover"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=1248"
                alt=""
                className="h-[624px] w-[624px] flex-shrink-0 rounded-2xl object-cover"
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
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(12,8,1,0.15)] bg-[#F2F2F2]">
                  <ChevronLeft className="h-6 w-6 text-[#0C0801]" />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(12,8,1,0.15)] bg-[#F2F2F2]">
                  <ChevronRight className="h-6 w-6 text-[#0C0801]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white px-6 md:px-16 py-16 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[768px] text-center">
            <div className="mb-4">
              <span className="font-montserrat text-base font-semibold text-[#0C0801]">Blog</span>
            </div>
            <h2 className="font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px] text-[#0C0801]">
              Insights on Digital Transformation
            </h2>
            <p className="mt-6 font-montserrat text-lg font-normal leading-[150%] text-[#0C0801]">
              Explore our latest thoughts and innovations in the field.
            </p>
          </div>

          <div className="mt-20 space-y-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Blog Card 1 */}
              <div className="space-y-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7e9a33b1776609b7dd07a81e49fc331f074d02fd?width=811"
                  alt=""
                  className="h-[270px] w-full rounded-2xl object-cover"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-[rgba(12,8,1,0.15)] px-[10px] py-1 font-montserrat text-sm font-semibold text-[#0C0801]">
                      Insights
                    </span>
                    <span className="font-montserrat text-sm font-semibold text-[#0C0801]">5 min read</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                      Harnessing AI for Business Growth
                    </h3>
                    <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                      Discover how AI is reshaping digital transformation strategies today.
                    </p>
                  </div>
                  <Link
                    to="/p/blog/ai-business-growth"
                    className="inline-flex items-center gap-2 font-montserrat text-base font-normal text-[#0C0801]"
                  >
                    Read more
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="space-y-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0f0e04bd5edd7546f49ebde8f37802aad4cf7ec5?width=811"
                  alt=""
                  className="h-[270px] w-full rounded-2xl object-cover"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-[rgba(12,8,1,0.15)] px-[10px] py-1 font-montserrat text-sm font-semibold text-[#0C0801]">
                      Trends
                    </span>
                    <span className="font-montserrat text-sm font-semibold text-[#0C0801]">5 min read</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                      The Future of eCommerce
                    </h3>
                    <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                      Explore the evolving landscape of eCommerce and its challenges.
                    </p>
                  </div>
                  <Link
                    to="/p/blog/future-ecommerce"
                    className="inline-flex items-center gap-2 font-montserrat text-base font-normal text-[#0C0801]"
                  >
                    Read more
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="space-y-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/342e9803cb06d1844ad6ac127820f5e4648f29e2?width=811"
                  alt=""
                  className="h-[270px] w-full rounded-2xl object-cover"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-[rgba(12,8,1,0.15)] px-[10px] py-1 font-montserrat text-sm font-semibold text-[#0C0801]">
                      Analysis
                    </span>
                    <span className="font-montserrat text-sm font-semibold text-[#0C0801]">5 min read</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801]">
                      Data-Driven Decision Making
                    </h3>
                    <p className="font-montserrat text-base font-normal leading-[150%] text-[#0C0801]">
                      Learn how data analytics can drive better business outcomes.
                    </p>
                  </div>
                  <Link
                    to="/p/blog/data-driven-decisions"
                    className="inline-flex items-center gap-2 font-montserrat text-base font-normal text-[#0C0801]"
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
                className="rounded-full border border-[rgba(12,8,1,0.15)] px-3 py-[6px] font-montserrat text-base font-medium text-[#0C0801] hover:bg-gray-50"
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
