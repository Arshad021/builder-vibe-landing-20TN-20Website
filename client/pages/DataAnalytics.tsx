import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// SVG Icons from the Figma design
const AnalyticsInsightIcon = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7452 24.4004C15.3218 24.4004 14.9685 24.5441 14.6852 24.8314C14.4018 25.1191 14.2602 25.4754 14.2602 25.9004V33.1504C14.2602 33.5754 14.4018 33.9318 14.6852 34.2194C14.9685 34.5071 15.3218 34.6504 15.7452 34.6504C16.1685 34.6504 16.5218 34.5071 16.8052 34.2194C17.0885 33.9318 17.2302 33.5754 17.2302 33.1504V25.9004C17.2302 25.4754 17.0885 25.1191 16.8052 24.8314C16.5218 24.5441 16.1685 24.4004 15.7452 24.4004ZM32.2548 13.1504C32.0548 13.1504 31.8728 13.2221 31.7088 13.3657C31.5445 13.5096 31.4625 13.6877 31.4625 13.9004V33.1504C31.4625 33.3631 31.5445 33.5411 31.7088 33.6848C31.8728 33.8284 32.0548 33.9004 32.2548 33.9004C32.4548 33.9004 32.6368 33.8284 32.8008 33.6848C32.9651 33.5411 33.0471 33.3631 33.0471 33.1504V13.9004C33.0471 13.6877 32.9651 13.5096 32.8008 13.3657C32.6368 13.2221 32.4548 13.1504 32.2548 13.1504ZM24.0002 28.2504C23.8002 28.2504 23.6182 28.3221 23.4538 28.4657C23.2898 28.6096 23.2078 28.7877 23.2078 29.0004V33.1504C23.2078 33.3631 23.2898 33.5411 23.4538 33.6848C23.6182 33.8284 23.8002 33.9004 24.0002 33.9004C24.2002 33.9004 24.3822 33.8284 24.5462 33.6848C24.7105 33.5411 24.7925 33.3631 24.7925 33.1504V29.0004C24.7925 28.7877 24.7105 28.6096 24.5462 28.4657C24.3822 28.3221 24.2002 28.2504 24.0002 28.2504Z" fill="#0C0801"/>
  </svg>
);

const DataVisualizationIcon = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.11523 42.2625C8.09523 42.2625 7.238 41.9108 6.54355 41.2075C5.8491 40.5042 5.50188 39.6449 5.50188 38.6297V10.7297C5.50188 9.71447 5.8491 8.85522 6.54355 8.15197C7.238 7.44872 8.09523 7.09709 9.11523 7.09709H38.8852C39.9052 7.09709 40.7624 7.44872 41.4569 8.15197C42.1513 8.85522 42.4985 9.71447 42.4985 10.7297V38.6297C42.4985 39.6449 42.1513 40.5042 41.4569 41.2075C40.7624 41.9108 39.9052 42.2625 38.8852 42.2625H9.11523ZM9.11523 38.6297H38.8852V10.7297H9.11523V38.6297ZM24.0002 35.9671C24.2002 35.9671 24.3822 35.8954 24.5462 35.7517C24.7105 35.6081 24.7925 35.43 24.7925 35.2173C24.7925 35.0046 24.7105 34.8265 24.5462 34.6829C24.3822 34.5392 24.2002 34.4671 24.0002 34.4671C23.8002 34.4671 23.6182 34.5392 23.4538 34.6829C23.2898 34.8265 23.2078 35.0046 23.2078 35.2173C23.2078 35.43 23.2898 35.6081 23.4538 35.7517C23.6182 35.8954 23.8002 35.9671 24.0002 35.9671Z" fill="#0C0801"/>
  </svg>
);

const PredictiveAnalyticsIcon = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.8148 31.0825L30.68 21.2173C30.9634 21.0513 31.096 20.816 31.096 20.5115C31.096 20.207 30.9634 19.9697 30.68 19.7998L20.8408 11.9791C20.5587 11.7926 20.2665 11.7786 19.964 11.937C19.6615 12.0956 19.5102 12.3478 19.5102 12.6938V30.2921C19.5102 30.6401 19.6573 30.8938 19.9515 31.0533C20.2457 31.2128 20.5338 31.1973 20.8148 31.0825ZM7.52018 42.1993C7.06018 42.1993 6.66135 42.0304 6.32368 41.6926C5.98585 41.3549 5.81693 40.9561 5.81693 40.4961V6.77389C5.81693 6.53389 5.89876 6.33097 6.06243 6.16514C6.22593 5.99914 6.42885 5.91614 6.67018 5.91614H41.3302C41.5715 5.91614 41.7744 5.99914 41.9381 6.16514C42.1019 6.33097 42.1837 6.53389 42.1837 6.77389V40.4961C42.1837 40.9561 42.0148 41.3549 41.6769 41.6926C41.3391 42.0304 40.9402 42.1993 40.4802 42.1993H7.52018ZM7.52018 40.4961H40.4802V7.62539H7.52018V40.4961Z" fill="#0C0801"/>
  </svg>
);

const ProcessAutomationIcon = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.0002 34.6297C26.5337 34.6297 28.681 33.7445 30.4422 31.9741C32.2034 30.2037 33.084 28.0493 33.084 25.5109C33.084 22.9725 32.2034 20.8181 30.4422 19.0477C28.681 17.2773 26.5337 16.3921 24.0002 16.3921C21.4667 16.3921 19.3194 17.2773 17.5582 19.0477C15.797 20.8181 14.9164 22.9725 14.9164 25.5109C14.9164 28.0493 15.797 30.2037 17.5582 31.9741C19.3194 33.7445 21.4667 34.6297 24.0002 34.6297ZM11.0835 42.2625C10.0635 42.2625 9.20635 41.9108 8.51185 41.2075C7.8174 40.5042 7.47018 39.6449 7.47018 38.6297V12.3921C7.47018 11.3769 7.8174 10.5176 8.51185 9.81435C9.20635 9.1111 10.0635 8.75947 11.0835 8.75947H37.9164C38.9364 8.75947 39.7936 9.1111 40.4881 9.81435C41.1825 10.5176 41.5297 11.3769 41.5297 12.3921V38.6297C41.5297 39.6449 41.1825 40.5042 40.4881 41.2075C39.7936 41.9108 38.9364 42.2625 37.9164 42.2625H11.0835ZM11.0835 38.6297H37.9164V12.3921H11.0835V38.6297Z" fill="#0C0801"/>
  </svg>
);

export default function DataAnalytics() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative flex min-h-[320px] px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28 flex-col items-center gap-8 sm:gap-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg')"
        }}
      >
        <div className="flex max-w-[1280px] flex-col items-center lg:items-start gap-8 sm:gap-10 lg:gap-16 flex-1 self-stretch">
          <div className="flex max-w-[768px] flex-col items-center lg:items-start gap-4 sm:gap-6 flex-1 self-stretch text-center lg:text-left">
            <h1 className="self-stretch text-white font-alata text-4xl sm:text-5xl lg:text-6xl font-normal leading-[120%] tracking-[-0.6px]">
              Unlock Your Data
            </h1>
            <p className="self-stretch text-white font-montserrat text-base sm:text-lg font-normal leading-[150%]">
              Empower your business with data-driven insights for smarter decision-making and enhanced performance.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="flex px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28 flex-col items-center gap-10 lg:gap-20 bg-white">
        <div className="flex max-w-[1280px] flex-col items-center lg:items-start gap-10 lg:gap-20 self-stretch">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20 self-stretch">
            <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start gap-6 self-stretch text-center lg:text-left">
                <h2 className="self-stretch text-[#0C0801] font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px]">
                  Unlock the Power of Data with Advanced Analytics Techniques
                </h2>
                <p className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                  Advanced data analytics transforms raw data into strategic insights. Leverage these insights to drive informed decision-making and enhance business performance.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 self-stretch text-center lg:text-left">
                <div className="flex flex-col md:flex-row py-2 items-center md:items-start gap-4 md:gap-6 self-stretch">
                  <div className="flex flex-col items-center lg:items-start gap-4 flex-1">
                    <h3 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                      Data Insights
                    </h3>
                    <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Discover trends and patterns that empower your organization to thrive in a competitive landscape.
                    </p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start gap-4 flex-1">
                    <h3 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                      Actionable Strategies
                    </h3>
                    <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Transform insights into strategies that drive growth and operational efficiency across your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover"
              src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
              alt="Business team analyzing charts during a meeting"
            />
          </div>
        </div>
      </section>

      {/* Real-Time Data Section */}
      <section className="flex px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28 flex-col items-center gap-10 lg:gap-20 bg-[#173462]">
        <div className="flex max-w-[1280px] flex-col items-center lg:items-start gap-10 lg:gap-20 self-stretch">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20 self-stretch">
            <img
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover"
              src="https://images.pexels.com/photos/6366444/pexels-photo-6366444.jpeg"
              alt="Digital monitor with world map and real-time statistics"
            />
            <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start gap-8 self-stretch">
                <div className="flex flex-col items-center lg:items-start gap-4 self-stretch text-center lg:text-left">
                  <div className="flex items-center">
                    <span className="text-white font-montserrat text-base font-semibold leading-[150%]">
                      Insights
                    </span>
                  </div>
                  <div className="flex flex-col items-center lg:items-start gap-6 self-stretch text-center lg:text-left">
                    <h2 className="self-stretch text-white font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                      Empower Your Decisions with Real-Time Data
                    </h2>
                    <p className="self-stretch text-white font-montserrat text-lg font-normal leading-[150%]">
                      Our Business Intelligence solutions provide powerful tools and dashboards that enable decision-makers to access real-time data. Transform your insights into actionable strategies for success.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-4 self-stretch text-center lg:text-left">
                  <div className="flex flex-col md:flex-row py-2 items-center md:items-start gap-4 md:gap-6 self-stretch">
                    <div className="flex flex-col items-center lg:items-start gap-4 flex-1">
                      <h3 className="self-stretch text-white font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Data Visualization
                      </h3>
                      <p className="self-stretch text-white font-montserrat text-base font-normal leading-[150%]">
                        Visualize complex data to make informed decisions quickly and effectively.
                      </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-4 flex-1">
                      <h3 className="self-stretch text-white font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Actionable Insights
                      </h3>
                      <p className="self-stretch text-white font-montserrat text-base font-normal leading-[150%]">
                        Leverage analytics to drive business growth and enhance operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button 
                  variant="secondary" 
                  className="rounded-full border border-[rgba(12,8,1,0.15)] bg-transparent text-[#0C0801] hover:bg-white/10"
                >
                  Learn More
                </Button>
                <Button 
                  variant="link" 
                  className="text-[#0C0801] p-0 h-auto font-normal hover:no-underline"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Sign Up
                    <ChevronRight className="w-6 h-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Learning & AI Section */}
      <section className="flex px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28 flex-col items-center gap-10 lg:gap-20 bg-white">
        <div className="flex max-w-[1280px] flex-col items-center lg:items-start gap-10 lg:gap-20 self-stretch">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20 self-stretch">
            <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start gap-6 self-stretch text-center lg:text-left">
                <h2 className="self-stretch text-[#0C0801] font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px]">
                  Unlock the Power of Data with Advanced Machine Learning and AI Solutions
                </h2>
                <p className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                  Harness the capabilities of machine learning and AI to drive predictive analytics and streamline your processes. Our tailored solutions empower businesses to make data-driven decisions with confidence.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-4 self-stretch text-center lg:text-left">
                <div className="flex flex-col md:flex-row py-2 items-center md:items-start gap-4 md:gap-6 self-stretch">
                  <div className="flex flex-col items-center lg:items-start gap-4 flex-1">
                    <h3 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                      Predictive Analytics
                    </h3>
                    <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Transform data into actionable insights for smarter business strategies and outcomes.
                    </p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start gap-4 flex-1">
                    <h3 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                      Process Automation
                    </h3>
                    <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Automate routine tasks to enhance efficiency and focus on strategic initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover"
              src="https://images.pexels.com/photos/4584830/pexels-photo-4584830.jpeg"
              alt="Code on screen representing machine learning and AI pipelines"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="flex px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28 flex-col items-center gap-10 lg:gap-20 bg-white">
        <div className="flex max-w-[1280px] flex-col items-center lg:items-start gap-10 lg:gap-20 self-stretch">
          <div className="flex max-w-[768px] flex-col items-start gap-4 self-stretch">
            <div className="flex items-center">
              <span className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                Insights
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-6 self-stretch text-center lg:text-left">
              <h2 className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Transforming Data into Strategic Business Solutions
              </h2>
              <p className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                At TecNext, we empower organizations to harness the power of data analytics. Our tailored solutions have enabled clients to make informed decisions and drive impactful results.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-16 self-stretch">
            <div className="flex items-start gap-12 self-stretch">
              <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
                <img
                  className="h-60 self-stretch aspect-[394.67/240] rounded-2xl object-cover"
                  src="https://images.pexels.com/photos/9034221/pexels-photo-9034221.jpeg"
                  alt="Presenter sharing data insights in a meeting room"
                />
                <div className="flex flex-col items-center lg:items-start gap-6 self-stretch text-center lg:text-left">
                  <h3 className="self-stretch text-[#0C0801] font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px]">
                    Real-World Applications of Data Analytics
                  </h3>
                  <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Discover how we've helped businesses thrive.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
                <img
                  className="h-60 self-stretch aspect-[394.67/240] rounded-2xl object-cover"
                  src="https://images.pexels.com/photos/7289723/pexels-photo-7289723.jpeg"
                  alt="Retail product photoshoot and inventory management setup"
                />
                <div className="flex flex-col items-center lg:items-start gap-6 self-stretch text-center lg:text-left">
                  <h3 className="self-stretch text-[#0C0801] font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px]">
                    Case Study: Retail Analytics Success
                  </h3>
                  <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    We transformed a retail client's inventory management through predictive analytics.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
                <img
                  className="h-60 self-stretch aspect-[394.67/240] rounded-2xl object-cover"
                  src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg"
                  alt="Business desk with financial charts and a laptop"
                />
                <div className="flex flex-col items-center lg:items-start gap-6 self-stretch text-center lg:text-left">
                  <h3 className="self-stretch text-[#0C0801] font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px]">
                    Case Study: Financial Insights for Growth
                  </h3>
                  <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Our analytics solutions enabled a financial firm to optimize their investment strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button 
              variant="secondary" 
              className="rounded-full border border-[rgba(12,8,1,0.15)]"
            >
              Learn More
            </Button>
            <Button 
              variant="link" 
              className="text-[#0C0801] p-0 h-auto font-normal hover:no-underline"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Started
                <ChevronRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="flex px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28 flex-col items-center gap-10 lg:gap-20 bg-white">
        <div className="flex max-w-[1280px] flex-col items-center lg:items-start gap-10 lg:gap-20 self-stretch">
          <div className="flex max-w-[768px] flex-col items-start gap-6 self-stretch">
            <h2 className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
              Customer Testimonials
            </h2>
            <p className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
              Transformative insights that drive our business forward.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-16 self-stretch">
            <div className="flex justify-center items-start gap-16 self-stretch">
              <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
                <div className="flex items-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#0C0801"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                  "The data solutions provided by TecNext have revolutionized our operations and decision-making processes."
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                      John Doe
                    </div>
                    <div className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      CEO, Tech Innovations
                    </div>
                  </div>
                  <div className="w-px h-[61px] bg-[rgba(12,8,1,0.15)]"></div>
                  <div className="w-[120px] h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
                <div className="flex items-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#0C0801"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                  "Thanks to TecNext, we have harnessed our data effectively, leading to unprecedented growth and efficiency."
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                      Jane Smith
                    </div>
                    <div className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Director, Data Corp
                    </div>
                  </div>
                  <div className="w-px h-[61px] bg-[rgba(12,8,1,0.15)]"></div>
                  <div className="w-[120px] h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Solutions Section */}
      <section className="flex px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28 flex-col items-center gap-10 lg:gap-20 bg-[#173462]">
        <div className="flex max-w-[1280px] flex-col items-center gap-10 lg:gap-20 self-stretch">
          <h2 className="w-[768px] max-w-[768px] text-white text-center font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px]">
            Unlock the Power of Data with Our Analytics Solutions
          </h2>
          <div className="flex flex-col items-center lg:items-start gap-16 self-stretch">
            <div className="flex justify-center items-start gap-12 self-stretch">
              <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
                <img
                  className="h-60 self-stretch aspect-[394.67/240] rounded-2xl object-cover"
                  src="https://images.pexels.com/photos/9034221/pexels-photo-9034221.jpeg"
                  alt="Team aligning on strategy using data-driven presentations"
                />
                <div className="flex flex-col items-center gap-8 self-stretch">
                  <div className="flex flex-col items-center lg:items-start gap-4 self-stretch text-center lg:text-left">
                    <h3 className="self-stretch text-white text-center font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px]">
                      Transforming Insights into Actionable Strategies for Your Business
                    </h3>
                    <p className="self-stretch text-white text-center font-montserrat text-base font-normal leading-[150%]">
                      Our step-by-step approach ensures seamless integration of data analytics into your operations.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 self-stretch">
                    <Button 
                      variant="link" 
                      className="text-[#0C0801] p-0 h-auto font-normal hover:no-underline"
                      asChild
                    >
                      <Link to="/services" className="flex items-center gap-2">
                        Learn More
                        <ChevronRight className="w-6 h-6" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
                <img
                  className="h-60 self-stretch aspect-[394.67/240] rounded-2xl object-cover"
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                  alt="Collaborative planning session reviewing analytics"
                />
                <div className="flex flex-col items-center gap-8 self-stretch">
                  <div className="flex flex-col items-center lg:items-start gap-4 self-stretch text-center lg:text-left">
                    <h3 className="self-stretch text-white text-center font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px]">
                      Tailored Solutions for Your Unique Data Challenges
                    </h3>
                    <p className="self-stretch text-white text-center font-montserrat text-base font-normal leading-[150%]">
                      We customize our analytics solutions to meet your specific business needs.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 self-stretch">
                    <Button 
                      variant="link" 
                      className="text-[#0C0801] p-0 h-auto font-normal hover:no-underline"
                      asChild
                    >
                      <Link to="/contact" className="flex items-center gap-2">
                        Sign Up
                        <ChevronRight className="w-6 h-6" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
                <img
                  className="h-60 self-stretch aspect-[394.67/240] rounded-2xl object-cover"
                  src="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg"
                  alt="Team celebrating success over analytics reports"
                />
                <div className="flex flex-col items-center gap-8 self-stretch">
                  <div className="flex flex-col items-center lg:items-start gap-4 self-stretch text-center lg:text-left">
                    <h3 className="self-stretch text-white text-center font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px]">
                      Continuous Support and Optimization for Lasting Impact
                    </h3>
                    <p className="self-stretch text-white text-center font-montserrat text-base font-normal leading-[150%]">
                      Our team provides ongoing support to ensure your analytics tools deliver results.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 self-stretch">
                    <Button 
                      variant="link" 
                      className="text-[#0C0801] p-0 h-auto font-normal hover:no-underline"
                      asChild
                    >
                      <Link to="/contact" className="flex items-center gap-2">
                        Contact
                        <ChevronRight className="w-6 h-6" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="flex px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28 flex-col items-center gap-10 lg:gap-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/34070725/pexels-photo-34070725.jpeg')"
        }}
      >
        <div className="flex max-w-[1280px] flex-col items-center lg:items-start gap-10 lg:gap-20 self-stretch">
          <div className="flex max-w-[768px] flex-col items-start gap-8 self-stretch">
            <div className="flex flex-col items-center lg:items-start gap-6 self-stretch text-center lg:text-left">
              <h2 className="self-stretch text-white font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Unlock Your Data Potential
              </h2>
              <p className="self-stretch text-white font-montserrat text-lg font-normal leading-[150%]">
                Transform your business decisions with our expert data and analytics consultation services today.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Button 
                className="rounded-full border border-white bg-white text-[#0C0801] hover:bg-gray-100"
              >
                Request
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-full border border-[rgba(255,255,255,0.2)] bg-transparent text-white hover:bg-white/10"
              >
                Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
