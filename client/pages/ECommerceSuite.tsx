import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// SVG Icons from the design
const CustomerFocusIcon = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.5833 38.7744L27.2618 37.108C27.5631 36.792 27.9234 36.6339 28.3428 36.6339C28.7618 36.6339 29.1293 36.788 29.4453 37.096C29.7533 37.412 29.9073 37.7799 29.9073 38.1999C29.9073 38.6199 29.7533 38.984 29.4453 39.292L25.2053 43.5939C24.8653 43.9339 24.4654 44.104 24.0058 44.104C23.5461 44.104 23.1463 43.9339 22.8063 43.5939L18.5663 39.292C18.2836 38.984 18.1339 38.6199 18.1173 38.1999C18.1006 37.7799 18.2503 37.412 18.5663 37.096C18.8743 36.788 19.2381 36.6319 19.6578 36.6279C20.0778 36.6239 20.4458 36.78 20.7618 37.096L22.4398 38.7744V26.7105C22.4398 26.2695 22.5904 25.8971 22.8918 25.5935C23.1928 25.2901 23.5689 25.1385 24.0203 25.1385C24.4639 25.1385 24.8354 25.2901 25.1348 25.5935C25.4338 25.8971 25.5833 26.2695 25.5833 26.7105V38.7744Z" fill="#0C0801"/>
  </svg>
);

const DataInsightsIcon = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7452 24.4004C15.3218 24.4004 14.9685 24.5441 14.6852 24.8314C14.4018 25.1191 14.2602 25.4754 14.2602 25.9004V33.1504C14.2602 33.5754 14.4047 33.9316 14.6937 34.2189C14.983 34.5066 15.3393 34.6504 15.7627 34.6504C16.1863 34.6504 16.5418 34.5066 16.8292 34.2189C17.1165 33.9316 17.2602 33.5754 17.2602 33.1504V25.9004C17.2602 25.4754 17.1135 25.1191 16.8202 24.8314C16.5272 24.5441 16.1688 24.4004 15.7452 24.4004Z" fill="#0C0801"/>
  </svg>
);

const BoostSalesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4893 44.1312C13.4963 44.1312 12.6498 43.7777 11.9498 43.0707C11.2498 42.3637 10.8998 41.5137 10.8998 40.5207C10.8998 39.5277 11.2533 38.6812 11.9603 37.9812C12.6673 37.2812 13.5173 36.9312 14.5103 36.9312C15.5033 36.9312 16.3498 37.2847 17.0498 37.9917C17.7498 38.699 18.0998 39.549 18.0998 40.5417C18.0998 41.5347 17.7463 42.3812 17.0393 43.0812C16.3323 43.7812 15.4823 44.1312 14.4893 44.1312Z" fill="#0C0801"/>
  </svg>
);

const DriveEngagementIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.2964 34.102L34.9934 39.3935C34.6534 39.7335 34.2556 39.9035 33.7999 39.9035C33.3442 39.9035 32.9464 39.7335 32.6064 39.3935C32.2664 39.0535 32.0964 38.6474 32.0964 38.175C32.0964 37.7027 32.2664 37.2965 32.6064 36.9565L37.8599 31.7035H33.9999C33.5109 31.7035 33.1047 31.5419 32.7814 31.2185C32.4581 30.8952 32.2964 30.489 32.2964 30C32.2964 29.511 32.4581 29.1049 32.7814 28.7815C33.1047 28.4582 33.5109 28.2965 33.9999 28.2965H41.9999C42.4889 28.2965 42.8951 28.4582 43.2184 28.7815C43.5417 29.1049 43.7034 29.511 43.7034 30V38C43.7034 38.489 43.5417 38.8952 43.2184 39.2185C42.8951 39.5419 42.4889 39.7035 41.9999 39.7035C41.5109 39.7035 41.1047 39.5419 40.7814 39.2185C40.4581 38.8952 40.2964 38.489 40.2964 38V34.102Z" fill="#0C0801"/>
  </svg>
);

const RelumeIcon = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M41.46 14.74L41.18 14.24C40.8188 13.6354 40.3094 13.1329 39.7 12.78L26.28 5.04C25.6724 4.6875 24.9826 4.50124 24.28 4.5H23.7C22.9974 4.50124 22.3076 4.6875 21.7 5.04L8.28 12.8C7.67394 13.1505 7.17052 13.6539 6.82 14.26L6.54 14.76C6.1875 15.3677 6.00124 16.0575 6 16.76V32.26C6.00124 32.9626 6.1875 33.6524 6.54 34.26L6.82 34.76C7.17958 35.359 7.68098 35.8604 8.28 36.22L21.72 43.96C22.3246 44.3198 23.0164 44.5066 23.72 44.5H24.28C24.9826 44.4988 25.6724 44.3126 26.28 43.96L39.7 36.2C40.312 35.8574 40.8174 35.352 41.16 34.74L41.46 34.24C41.8082 33.6306 41.9942 32.942 42 32.24V16.74C41.9988 16.0375 41.8126 15.3477 41.46 14.74Z" fill="white"/>
  </svg>
);

export default function ECommerceSuite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[369px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/7552326/pexels-photo-7552326.jpeg?auto=compress&cs=tinysrgb&w=2880&dpr=2')"
        }}
      >
        <div className="max-w-[1280px] w-full px-16 flex flex-col items-start gap-20">
          <div className="max-w-[768px] flex flex-col items-start gap-6">
            <h1 className="text-white font-alata text-[72px] font-normal leading-[120%] tracking-[-0.72px]">
              Enhance Your eCommerce Experience
            </h1>
            <p className="text-white font-montserrat text-lg font-normal leading-[150%]">
              Unlock unparalleled growth and customer engagement with our expert eCommerce solutions tailored for you.
            </p>
          </div>
        </div>
      </section>

      {/* Transform Your Online Retail Section */}
      <section className="py-28 px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <span className="text-[#0C0801] font-montserrat text-base font-semibold">
                      Optimize
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                      Transform Your Online Retail Experience Today
                    </h2>
                    <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                      Our eCommerce Excellence Suite empowers businesses to maximize their online potential. With tailored strategies and cutting-edge technology, we enhance customer engagement and drive sales.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex py-2 items-start gap-6">
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <CustomerFocusIcon />
                      <h3 className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Customer Focus
                      </h3>
                      <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Deliver personalized shopping experiences that keep customers coming back for more.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <DataInsightsIcon />
                      <h3 className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Data Insights
                      </h3>
                      <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Leverage analytics to understand your customers and optimize your sales strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button variant="outline" className="rounded-full">
                  Learn More
                </Button>
                <Link to="/p/signup" className="flex items-center gap-2 text-[#0C0801] hover:underline">
                  <span className="font-montserrat text-base font-medium">Sign Up</span>
                  <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=2"
                alt="eCommerce analytics dashboard"
                className="w-full h-[640px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Your Online Potential Section */}
      <section className="py-28 px-16 bg-[#173462]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=2"
                alt="eCommerce platform interface"
                className="w-full h-[640px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <RelumeIcon />
              <div className="flex flex-col gap-6">
                <h2 className="text-white font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px]">
                  Unlock Your Online Potential with Our eCommerce Excellence Suite
                </h2>
                <p className="text-white font-montserrat text-lg font-normal leading-[150%]">
                  Our eCommerce Excellence Suite is designed to elevate your online business through tailored strategies and innovative solutions. Experience seamless integration, enhanced customer engagement, and optimized sales performance that drives results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Online Shopping Section */}
      <section className="py-28 px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <span className="text-[#0C0801] font-montserrat text-base font-semibold">
                      Optimize
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                      Transform Your Online Shopping Experience Today
                    </h2>
                    <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                      Our eCommerce Excellence Suite empowers businesses to enhance customer engagement and drive sales. With cutting-edge tools and strategies, we ensure your online store stands out in a competitive market.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex py-2 items-start gap-6">
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <BoostSalesIcon />
                      <h3 className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Boost Sales
                      </h3>
                      <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Increase conversion rates with tailored shopping experiences and seamless checkout processes.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <DriveEngagementIcon />
                      <h3 className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Drive Engagement
                      </h3>
                      <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Utilize data-driven insights to personalize customer interactions and enhance loyalty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button variant="outline" className="rounded-full">
                  Learn More
                </Button>
                <Link to="/p/signup" className="flex items-center gap-2 text-[#0C0801] hover:underline">
                  <span className="font-montserrat text-base font-medium">Sign Up</span>
                  <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.pexels.com/photos/7552326/pexels-photo-7552326.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=2"
                alt="Shopping experience interface"
                className="w-full h-[640px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-28 px-16 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="max-w-[768px] flex flex-col gap-6">
            <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
              Customer Testimonials
            </h2>
            <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
              Transforming eCommerce experiences, driving measurable results.
            </p>
          </div>
          
          <div className="flex flex-col gap-16">
            <div className="flex items-start gap-8">
              {/* Testimonial 1 */}
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex items-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#0C0801"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                  "Our sales increased by 50% after partnering with TecNext!"
                </blockquote>
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200"></div>
                  <div className="flex flex-col">
                    <div className="text-[#0C0801] font-montserrat text-base font-semibold">Jane Doe</div>
                    <div className="text-[#0C0801] font-montserrat text-base">CEO, Retail Co.</div>
                  </div>
                  <div className="w-[120px] h-12 bg-gray-100 rounded"></div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex items-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#0C0801"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                  "TecNext's insights transformed our online strategy completely!"
                </blockquote>
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200"></div>
                  <div className="flex flex-col">
                    <div className="text-[#0C0801] font-montserrat text-base font-semibold">John Smith</div>
                    <div className="text-[#0C0801] font-montserrat text-base">CMO, E-Shop</div>
                  </div>
                  <div className="w-[120px] h-12 bg-gray-100 rounded"></div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex items-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#0C0801"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                  "The results exceeded our expectations; we couldn't be happier!"
                </blockquote>
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200"></div>
                  <div className="flex flex-col">
                    <div className="text-[#0C0801] font-montserrat text-base font-semibold">Emily Johnson</div>
                    <div className="text-[#0C0801] font-montserrat text-base">Founder, ShopX</div>
                  </div>
                  <div className="w-[120px] h-12 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Your eCommerce Experience Section */}
      <section className="py-28 px-16 bg-[#F2F2F2]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="max-w-[768px] flex flex-col gap-4">
            <div className="flex items-center">
              <span className="text-[#0C0801] font-montserrat text-base font-semibold">
                Streamlined
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Transforming Your eCommerce Experience with Precision
              </h2>
              <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                Our eCommerce Excellence Suite is designed to elevate your online business. We guide you through every step, ensuring a seamless integration of technology and strategy.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-16">
            <div className="flex items-start gap-12">
              <div className="flex flex-col gap-8 flex-1">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=789&dpr=2"
                  alt="Consultation process"
                  className="w-full h-60 object-cover rounded-2xl"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                    Consultation: Understanding Your Unique Business Needs
                  </h3>
                  <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    We begin with a comprehensive consultation to assess your goals.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-8 flex-1">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=789&dpr=2"
                  alt="Strategy development"
                  className="w-full h-60 object-cover rounded-2xl"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                    Tailored Strategy: Crafting Your eCommerce Roadmap
                  </h3>
                  <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Our team develops a customized strategy that aligns with your vision.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-8 flex-1">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=789&dpr=2"
                  alt="Implementation process"
                  className="w-full h-60 object-cover rounded-2xl"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                    Execution: Implementing Solutions for Success
                  </h3>
                  <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    We execute the plan with precision, ensuring optimal results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Button variant="outline" className="rounded-full">
              Learn More
            </Button>
            <Link to="/p/get-started" className="flex items-center gap-2 text-[#0C0801] hover:underline">
              <span className="font-montserrat text-base font-medium">Get Started</span>
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-28 px-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2880&dpr=2')"
        }}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="max-w-[768px] flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-white font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Unlock Your eCommerce Potential
              </h2>
              <p className="text-white font-montserrat text-lg font-normal leading-[150%]">
                Contact us today to explore how our eCommerce Excellence Suite can elevate your business.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Button className="bg-white text-[#0C0801] hover:bg-gray-100 rounded-full">
                Learn More
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
