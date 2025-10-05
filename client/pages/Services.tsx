import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center sm:mx-0 sm:text-left">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-normal text-gray-900 leading-tight tracking-tight mb-6"
              style={{
                fontFamily:
                  "Alata, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Our Core Services
            </h1>
            <p
              className="text-base sm:text-lg text-gray-900 leading-relaxed"
              style={{
                fontFamily:
                  "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Discover how our six pillars drive digital transformation and
              elevate your business to new heights.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid Section */}
      <section className="bg-[#173462] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="mb-4">
              <span
                className="text-white text-base font-semibold"
                style={{
                  fontFamily:
                    "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Transform
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight tracking-tight mb-6"
              style={{
                fontFamily:
                  "Alata, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Empowering Your Digital Transformation Journey
            </h2>
            <p
              className="text-base sm:text-lg text-white leading-relaxed"
              style={{
                fontFamily:
                  "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              At TecNext, we specialize in driving digital transformation across
              industries. Our six core service pillars ensure that your business
              achieves measurable impact and sustainable growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-10 sm:space-y-12 lg:space-y-16 mb-12 sm:mb-16 lg:mb-20">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              <div className="flex flex-col">
                <div className="aspect-[394/234] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-8 overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fa539b180204ed917c99c860ab57d7a66c62cf6f?width=1200"
                    alt="Digital Transformation Strategy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight mb-6"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Digital Transformation Strategy
                  </h3>
                  <p
                    className="text-base text-white leading-relaxed"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Craft a tailored roadmap to navigate your digital journey.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="aspect-[394/234] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-8 overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c7e4646340ffb947ffa148847e98c780e7472c40?width=1200"
                    alt="eCommerce Excellence Suite"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight mb-6"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    eCommerce Excellence Suite
                  </h3>
                  <p
                    className="text-base text-white leading-relaxed"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Elevate your online presence with our comprehensive
                    solutions.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="aspect-[394/234] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-8 overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/68355d725b0e1cc14c7c0a41bf3577f02f72c6c3?width=1200"
                    alt="Data & Analytics Intelligence"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight mb-6"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Data & Analytics Intelligence
                  </h3>
                  <p
                    className="text-base text-white leading-relaxed"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Leverage data-driven insights to make informed decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              <div className="flex flex-col">
                <div className="aspect-[394/234] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-8 overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c07fe0d3d7e1fb582bc13d0df69b427cfacc86c5?width=1200"
                    alt="Customer Experience Excellence"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight mb-6"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Customer Experience Excellence
                  </h3>
                  <p
                    className="text-base text-white leading-relaxed"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Enhance customer satisfaction through personalized
                    experiences.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="aspect-[394/234] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-8 overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/cc161c31b0235fccda847e6872b8ccf3b1395958?width=1200"
                    alt="Technology Risk Management & Cybersecurity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight mb-6"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Technology Risk Management & Cybersecurity
                  </h3>
                  <p
                    className="text-base text-white leading-relaxed"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Safeguard your business with robust security measures.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="aspect-[394/234] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-8 overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/354b21512f057dd445b3b6f176ea44204071acd0?width=1200"
                    alt="Project Success Enablement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight mb-6"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Project Success Enablement
                  </h3>
                  <p
                    className="text-base text-white leading-relaxed"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Ensure project delivery on time and within budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              className="px-3 py-1.5 border border-gray-800/15 rounded-full text-gray-900 text-base font-medium bg-white hover:bg-gray-50 transition-colors"
              style={{
                fontFamily:
                  "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Learn More
            </button>
            <button
              className="flex items-center gap-2 text-gray-900 text-base font-medium hover:opacity-80 transition-opacity"
              style={{
                fontFamily:
                  "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Get Started
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.38708 7.04102C9.48791 7.04102 9.56488 7.07143 9.64294 7.14941L14.5873 12.0938C14.6412 12.1477 14.6663 12.1896 14.6781 12.2178V12.2188C14.6929 12.2543 14.7015 12.2941 14.7015 12.3428C14.7015 12.3915 14.6929 12.4312 14.6781 12.4668V12.4678C14.6663 12.4959 14.6412 12.5379 14.5873 12.5918L9.61853 17.5605C9.54076 17.6383 9.47362 17.6602 9.39294 17.6572C9.29892 17.6537 9.21805 17.6219 9.1322 17.5361C9.05408 17.458 9.02283 17.3812 9.02283 17.2803C9.02283 17.1794 9.05408 17.1025 9.1322 17.0244L13.8138 12.3428L9.10681 7.63574C9.02915 7.55804 9.0072 7.49174 9.01013 7.41113C9.01358 7.31687 9.04615 7.73547 9.1322 7.14941C9.21013 7.0716 9.28649 7.04109 9.38708 7.04102Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Digital Transformation Detail Section */}
      <section className="bg-gray-100 py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <span
                      className="text-gray-900 text-base font-semibold"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Transform
                    </span>
                  </div>
                  <div className="space-y-6">
                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight"
                      style={{
                        fontFamily:
                          "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Empowering Your Digital Transformation Journey
                    </h2>
                    <p
                      className="text-base sm:text-lg text-gray-900 leading-relaxed"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      We help companies navigate the intricacies of digital
                      transformation at TecNext. Our customized strategies
                      guarantee that your organization not only adjusts but
                      flourishes in a digital-centric environment.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                    <div className="space-y-4">
                      <h3
                        className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                        style={{
                          fontFamily:
                            "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Our Approach
                      </h3>
                      <p
                        className="text-base text-gray-900 leading-relaxed"
                        style={{
                          fontFamily:
                            "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        We assess your needs and craft a roadmap for successful
                        digital integration.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3
                        className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                        style={{
                          fontFamily:
                            "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Key Benefits
                      </h3>
                      <p
                        className="text-base text-gray-900 leading-relaxed"
                        style={{
                          fontFamily:
                            "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Achieve operational efficiency and enhanced customer
                        engagement through our expert guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <button
                  className="px-3 py-1.5 border border-gray-800/15 rounded-full text-gray-900 text-base font-medium hover:bg-gray-50 transition-colors"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Learn More
                </button>
                <button
                  className="flex items-center gap-2 text-gray-900 text-base font-medium hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Get Started
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.38708 7.54102C9.48791 7.54102 9.56488 7.57143 9.64294 7.64941L14.5873 12.5938C14.6412 12.6477 14.6663 12.6896 14.6781 12.7178V12.7188C14.6929 12.7543 14.7015 12.7941 14.7015 12.8428C14.7015 12.8915 14.6929 12.9312 14.6781 12.9668V12.9678C14.6663 12.9959 14.6412 13.0379 14.5873 13.0918L9.61853 18.0605C9.54076 18.1383 9.47362 18.1602 9.39294 18.1572C9.29892 18.1537 9.21805 18.1219 9.1322 18.0361C9.05408 17.958 9.02283 17.8812 9.02283 17.7803C9.02283 17.6794 9.05408 17.6025 9.1322 17.5244L13.8138 12.8428L9.10681 8.13574C9.02915 8.05804 9.0072 7.99174 9.01013 7.91113C9.01358 7.81687 9.04615 7.73547 9.1322 7.64941C9.21013 7.5716 9.28649 7.54109 9.38708 7.54102Z"
                      fill="#0C0801"
                      stroke="#0C0801"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="aspect-[15/16] rounded-2xl bg-gray-300 overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F5afec3ab6bc64791847451622f36f7e9?format=webp&width=1200"
                alt="Team collaborating over analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* eCommerce Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-center">
            <div className="w-full">
              <div className="flex justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F12d5427bcf6547a0983d1f1488efbe72?format=webp&width=1200"
                  alt="Digital screens showcasing automotive eCommerce"
                  className="w-full max-w-xl h-auto object-contain"
                />
              </div>
            </div>
            <div className="space-y-8 text-left">
              <div className="space-y-6">
                <span
                  className="text-gray-900 text-base font-semibold"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Elevate
                </span>
                <div className="space-y-6">
                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Transform Your eCommerce Experience with Us
                  </h2>
                  <p
                    className="text-base sm:text-lg text-gray-900 leading-relaxed max-w-xl"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    At TecNext, we streamline eCommerce platforms to boost sales and improve customer satisfaction. Our customized approaches guarantee smooth user experiences that increase conversions.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3
                    className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Sales Growth
                  </h3>
                  <p
                    className="text-base text-gray-900 leading-relaxed"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Boost your revenue with our data-driven eCommerce solutions.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3
                    className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                    style={{
                      fontFamily:
                        "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Customer Satisfaction
                  </h3>
                  <p
                    className="text-base text-gray-900 leading-relaxed"
                    style={{
                      fontFamily:
                        "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Enhance customer loyalty through personalized shopping experiences.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <button
                  className="px-3 py-1.5 border border-gray-800/15 rounded-full text-gray-900 text-base font-medium hover:bg-gray-50 transition-colors"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Learn More
                </button>
                <button
                  className="flex items-center gap-2 text-gray-900 text-base font-medium hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Sign Up
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.38708 7.04102C9.48791 7.04102 9.56488 7.07143 9.64294 7.14941L14.5873 12.0938C14.6412 12.1477 14.6663 12.1896 14.6781 12.2178V12.2188C14.6929 12.2543 14.7015 12.2941 14.7015 12.3428C14.7015 12.3915 14.6929 12.4312 14.6781 12.4668V12.4678C14.6663 12.4959 14.6412 12.5379 14.5873 12.5918L9.61853 17.5605C9.54076 17.6383 9.47362 17.6602 9.39294 17.6572C9.29892 17.6537 9.21805 17.6219 9.1322 17.5361C9.05408 17.458 9.02283 17.3812 9.02283 17.2803C9.02283 17.1794 9.05408 17.1025 9.1322 17.0244L13.8138 12.3428L9.10681 7.63574C9.02915 7.55804 9.0072 7.49174 9.01013 7.41113C9.01358 7.81687 9.04615 7.73547 9.1322 7.14941C9.21013 7.0716 9.28649 7.04109 9.38708 7.04102Z"
                      fill="#0C0801"
                      stroke="#0C0801"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section className="bg-gray-100 py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <span
                      className="text-gray-900 text-base font-semibold"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Insights
                    </span>
                  </div>
                  <div className="space-y-6">
                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight"
                      style={{
                        fontFamily:
                          "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Unlock the Power of Your Data
                    </h2>
                    <p
                      className="text-base sm:text-lg text-gray-900 leading-relaxed"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      We transform raw data into actionable insights that drive
                      strategic decisions at TecNext. Our Data & Analytics
                      Intelligence services empower businesses to harness the
                      full potential of their data.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                    <div className="flex flex-col space-y-4">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5715 18.3534H5.3355C4.86583 18.3534 4.476 18.1975 4.166 17.8859C3.856 17.5742 3.701 17.1852 3.701 16.7189C3.701 16.2522 3.856 15.864 4.166 15.5544C4.476 15.2447 4.86583 15.0899 5.3355 15.0899H14.5715V8.22386L11.861 10.9469C11.531 11.2705 11.1457 11.4324 10.705 11.4324C10.264 11.4324 9.8745 11.2705 9.5365 10.9469C9.2265 10.6229 9.0735 10.2389 9.0775 9.79486C9.0815 9.35119 9.2455 8.96736 9.5695 8.64336L15.01 3.20336C15.3497 2.86336 15.7493 2.69336 16.209 2.69336C16.669 2.69336 17.0688 2.86336 17.4085 3.20336L22.861 8.65536C23.177 8.98069 23.3388 9.36286 23.3465 9.80186C23.3545 10.2412 23.2017 10.6229 22.888 10.9469C22.546 11.2705 22.153 11.4324 21.709 11.4324C21.2653 11.4324 20.8815 11.2665 20.5575 10.9349L17.8465 8.22386V30.3719H42.6795C43.1415 30.3719 43.529 30.5302 43.842 30.8469C44.1547 31.1635 44.311 31.5559 44.311 32.0239C44.311 32.4885 44.1547 32.8752 43.842 33.1839C43.529 33.4925 43.1415 33.6469 42.6795 33.6469H33.452V40.5129L36.163 37.8019C36.4833 37.4702 36.8638 37.3042 37.3045 37.3039C37.7455 37.3035 38.1402 37.4695 38.4885 37.8019C38.7975 38.1259 38.95 38.5079 38.946 38.9479C38.942 39.3875 38.7782 39.7694 38.4545 40.0934L33.002 45.5454C32.6617 45.8854 32.2637 46.0534 31.808 46.0494C31.3527 46.0454 30.955 45.8774 30.615 45.5454L25.163 40.0814C24.839 39.7654 24.675 39.3875 24.671 38.9479C24.667 38.5079 24.8197 38.1259 25.129 37.8019C25.475 37.4695 25.8682 37.3055 26.3085 37.3099C26.7485 37.3142 27.1345 37.4782 27.4665 37.8019L30.165 40.5129V33.6469H17.8465C16.9098 33.6469 16.1298 33.3377 15.5065 32.7194C14.8832 32.1014 14.5715 31.3189 14.5715 30.3719V18.3534ZM30.165 27.3719V18.3534H20.8465V15.0899H30.165C31.1107 15.0899 31.895 15.3992 32.518 16.0179C33.1407 16.6362 33.452 17.4147 33.452 18.3534V27.3719H30.165Z"
                          fill="#0C0801"
                        />
                      </svg>
                      <h3
                        className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                        style={{
                          fontFamily:
                            "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Data-Driven
                      </h3>
                      <p
                        className="text-base text-gray-900 leading-relaxed"
                        style={{
                          fontFamily:
                            "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Transforming data into strategic advantages for your
                        business growth.
                      </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.745 24.2686C15.3217 24.2686 14.9683 24.4123 14.685 24.6996C14.4017 24.9873 14.26 25.3436 14.26 25.7686V33.0186C14.26 33.4436 14.4045 33.7998 14.6935 34.0871C14.9828 34.3748 15.3392 34.5186 15.7625 34.5186C16.1862 34.5186 16.5417 34.3748 16.829 34.0871C17.1163 33.7998 17.26 33.4436 17.26 33.0186V25.7686C17.26 25.3436 17.1133 24.9873 16.82 24.6996C16.527 24.4123 16.1687 24.2686 15.745 24.2686ZM32.2375 13.5186C31.8138 13.5186 31.4603 13.6623 31.177 13.9496C30.8937 14.2373 30.752 14.5936 30.752 15.0186V33.0186C30.752 33.4436 30.8967 33.7998 31.186 34.0871C31.475 34.3748 31.8313 34.5186 32.255 34.5186C32.6783 34.5186 33.0337 34.3748 33.321 34.0871C33.6083 33.7998 33.752 33.4436 33.752 33.0186V15.0186C33.752 14.5936 33.6055 14.2373 33.3125 13.9496C33.0192 13.6623 32.6608 13.5186 32.2375 13.5186ZM23.991 28.6186C23.5637 28.6186 23.2083 28.7623 22.925 29.0496C22.6417 29.3373 22.5 29.6936 22.5 30.1186V33.0186C22.5 33.4436 22.6447 33.7998 22.934 34.0871C23.223 34.3748 23.5813 34.5186 24.009 34.5186C24.4363 34.5186 24.7917 34.3748 25.075 34.0871C25.3583 33.7998 25.5 33.4436 25.5 33.0186V30.1186C25.5 29.6936 25.3553 29.3373 25.066 29.0496C24.777 28.7623 24.4187 28.6186 23.991 28.6186ZM9.10749 42.6676C8.18749 42.6676 7.38982 42.3298 6.71449 41.6541C6.03882 40.9788 5.70099 40.1811 5.70099 39.2611V9.47612C5.70099 8.55278 6.03882 7.75228 6.71449 7.07462C7.38982 6.39662 8.18749 6.05762 9.10749 6.05762H38.8925C39.8158 6.05762 40.6163 6.39662 41.294 7.07462C41.972 7.75228 42.311 8.55278 42.311 9.47612V39.2611C42.311 40.1811 41.972 40.9788 41.294 41.6541C40.6163 42.3298 39.8158 42.6676 38.8925 42.6676H9.10749ZM9.10749 39.2611H38.8925V9.47612H9.10749V39.2611ZM24.009 24.2686C24.4363 24.2686 24.7917 24.1239 25.075 23.8346C25.3583 23.5456 25.5 23.1873 25.5 22.7596C25.5 22.3323 25.3553 21.9769 25.066 21.6936C24.777 21.4103 24.4187 21.2686 23.991 21.2686C23.5637 21.2686 23.2083 21.4133 22.925 21.7026C22.6417 21.9916 22.5 22.3499 22.5 22.7776C22.5 23.2049 22.6447 23.5603 22.934 23.8436C23.223 24.1269 23.5813 24.2686 24.009 24.2686Z"
                          fill="#0C0801"
                        />
                      </svg>
                      <h3
                        className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                        style={{
                          fontFamily:
                            "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Actionable Insights
                      </h3>
                      <p
                        className="text-base text-gray-900 leading-relaxed"
                        style={{
                          fontFamily:
                            "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Make informed decisions with our tailored analytics
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <button
                  className="px-3 py-1.5 border border-gray-800/15 rounded-full text-gray-900 text-base font-medium hover:bg-gray-50 transition-colors"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Learn More
                </button>
                <button
                  className="flex items-center gap-2 text-gray-900 text-base font-medium hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Sign Up
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.38708 7.04102C9.48791 7.04102 9.56488 7.07143 9.64294 7.14941L14.5873 12.0938C14.6412 12.1477 14.6663 12.1896 14.6781 12.2178V12.2188C14.6929 12.2543 14.7015 12.2941 14.7015 12.3428C14.7015 12.3915 14.6929 12.4312 14.6781 12.4668V12.4678C14.6663 12.4959 14.6412 12.5379 14.5873 12.5918L9.61853 17.5605C9.54076 17.6383 9.47362 17.6602 9.39294 17.6572C9.29892 17.6537 9.21805 17.6219 9.1322 17.5361C9.05408 17.458 9.02283 17.3812 9.02283 17.2803C9.02283 17.1794 9.05408 17.1025 9.1322 17.0244L13.8138 12.3428L9.10681 7.63574C9.02915 7.55804 9.0072 7.49174 9.01013 7.41113C9.01358 7.81687 9.04615 7.73547 9.1322 7.14941C9.21013 7.0716 9.28649 7.04109 9.38708 7.04102Z"
                      fill="#0C0801"
                      stroke="#0C0801"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F97c776e4cc6b49699c5eb93126f50c9b?format=webp&width=1200"
                alt="Digital data visualization dashboards"
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="bg-gray-100 py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F831326e6e6bd4c1ea10ad8bc72601189?format=webp&width=1200"
                alt="CRM experience illustration"
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <span
                      className="text-gray-900 text-base font-semibold"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Engagement
                    </span>
                  </div>
                  <div className="space-y-6">
                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight"
                      style={{
                        fontFamily:
                          "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Transforming Customer Experiences with Innovation
                    </h2>
                    <p
                      className="text-base sm:text-lg text-gray-900 leading-relaxed"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Prioritizing customer experience, we at TecNext leverage
                      cutting-edge technology. Our innovative solutions empower
                      businesses to connect with their customers on a deeper
                      level.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                    <div className="space-y-4">
                      <h3
                        className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                        style={{
                          fontFamily:
                            "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Personalized Solutions
                      </h3>
                      <p
                        className="text-base text-gray-900 leading-relaxed"
                        style={{
                          fontFamily:
                            "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Tailored experiences that resonate with your audience
                        and drive loyalty.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3
                        className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                        style={{
                          fontFamily:
                            "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Data-Driven Insights
                      </h3>
                      <p
                        className="text-base text-gray-900 leading-relaxed"
                        style={{
                          fontFamily:
                            "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Utilizing analytics to enhance customer interactions and
                        satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <button
                  className="px-3 py-1.5 border border-gray-800/15 rounded-full text-gray-900 text-base font-medium hover:bg-gray-50 transition-colors"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Learn More
                </button>
                <button
                  className="flex items-center gap-2 text-gray-900 text-base font-medium hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Sign Up
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.38708 7.04102C9.48791 7.04102 9.56488 7.07143 9.64294 7.14941L14.5873 12.0938C14.6412 12.1477 14.6663 12.1896 14.6781 12.2178V12.2188C14.6929 12.2543 14.7015 12.2941 14.7015 12.3428C14.7015 12.3915 14.6929 12.4312 14.6781 12.4668V12.4678C14.6663 12.4959 14.6412 12.5379 14.5873 12.5918L9.61853 17.5605C9.54076 17.6383 9.47362 17.6602 9.39294 17.6572C9.29892 17.6537 9.21805 17.6219 9.1322 17.5361C9.05408 17.458 9.02283 17.3812 9.02283 17.2803C9.02283 17.1794 9.05408 17.1025 9.1322 17.0244L13.8138 12.3428L9.10681 7.63574C9.02915 7.55804 9.0072 7.99174 9.01013 7.41113C9.01358 7.81687 9.04615 7.73547 9.1322 7.14941C9.21013 7.0716 9.28649 7.04109 9.38708 7.04102Z"
                      fill="#0C0801"
                      stroke="#0C0801"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-gray-100 py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 leading-tight tracking-tight"
                  style={{
                    fontFamily:
                      "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Securing Your Digital Future: Comprehensive Technology Risk
                  Management & Cybersecurity Solutions
                </h2>
                <p
                  className="text-base sm:text-lg text-gray-900 leading-relaxed"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  At TecNext, we emphasize the security and compliance of your
                  technology systems. Our skilled team employs strong strategies
                  to reduce risks and protect your digital assets.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                  <div className="space-y-4">
                    <h3
                      className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                      style={{
                        fontFamily:
                          "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Risk Assessment
                    </h3>
                    <p
                      className="text-base text-gray-900 leading-relaxed"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Thorough evaluations to identify vulnerabilities and
                      enhance your security posture.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3
                      className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                      style={{
                        fontFamily:
                          "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Compliance Assurance
                    </h3>
                    <p
                      className="text-base text-gray-900 leading-relaxed"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Ensuring adherence to industry standards and regulations
                      for peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fb83da0fa6fc24e80bb50bec1ad5693bb?format=webp&width=1200"
                alt="Cybersecurity shield illustration"
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Success Section */}
      <section className="bg-gray-100 py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="aspect-[15/16] rounded-2xl bg-gray-300 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
                alt="Project success planning at whiteboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <span
                      className="text-gray-900 text-base font-semibold"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Success
                    </span>
                  </div>
                  <div className="space-y-6">
                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight tracking-tight"
                      style={{
                        fontFamily:
                          "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Ensuring Success in Every Project
                    </h2>
                    <p
                      className="text-base sm:text-lg text-gray-900 leading-relaxed"
                      style={{
                        fontFamily:
                          "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      At TecNext, we focus on achieving project success through
                      comprehensive planning and execution. Our committed team
                      collaborates effectively to ensure that each project
                      fulfills its objectives and delivers measurable value.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                    <div className="space-y-4">
                      <h3
                        className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                        style={{
                          fontFamily:
                            "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Strategic Management
                      </h3>
                      <p
                        className="text-base text-gray-900 leading-relaxed"
                        style={{
                          fontFamily:
                            "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        We implement tailored strategies to navigate project
                        complexities and drive successful outcomes.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3
                        className="text-xl font-normal text-gray-900 leading-tight tracking-tight"
                        style={{
                          fontFamily:
                            "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Execution Excellence
                      </h3>
                      <p
                        className="text-base text-gray-900 leading-relaxed"
                        style={{
                          fontFamily:
                            "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        Our execution framework ensures timely delivery and
                        adherence to quality standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <button
                  className="px-3 py-1.5 border border-gray-800/15 rounded-full text-gray-900 text-base font-medium hover:bg-gray-50 transition-colors"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Learn More
                </button>
                <button
                  className="flex items-center gap-2 text-gray-900 text-base font-medium hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily:
                      "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Contact
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.38708 7.53906C9.48791 7.53906 9.56488 7.56947 9.64294 7.64746L14.5873 12.5918C14.6412 12.6457 14.6663 12.6877 14.6781 12.7158V12.7168C14.6929 12.7524 14.7015 12.7921 14.7015 12.8408C14.7015 12.8895 14.6929 12.9293 14.6781 12.9648V12.9658C14.6663 12.9939 14.6412 13.0359 14.5873 13.0898L9.61853 18.0586C9.54076 18.1364 9.47362 18.1582 9.39294 18.1553C9.29892 18.1518 9.21805 18.1199 9.1322 18.0342C9.05408 17.9561 9.02283 17.8792 9.02283 17.7783C9.02283 17.6774 9.05408 17.6006 9.1322 17.5225L13.8138 12.8408L9.10681 8.13379C9.02915 8.05609 9.0072 7.98978 9.01013 7.90918C9.01358 7.81491 9.04615 7.73352 9.1322 7.64746C9.21013 7.56965 9.28649 7.53914 9.38708 7.53906Z"
                      fill="#0C0801"
                      stroke="#0C0801"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Potential Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 leading-tight tracking-tight"
              style={{
                fontFamily:
                  "Alata, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Unlock Your Business Potential with Our Comprehensive Digital
              Solutions
            </h2>
            <p
              className="text-base sm:text-lg text-gray-900 leading-relaxed"
              style={{
                fontFamily:
                  "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Our services empower your organization to thrive in the digital
              landscape. Experience increased efficiency, enhanced customer
              engagement, and measurable growth with our tailored solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight tracking-tight"
                style={{
                  fontFamily:
                    "Alata, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Let's Transform Your Business Together
              </h2>
              <p
                className="text-base sm:text-lg text-white leading-relaxed"
                style={{
                  fontFamily:
                    "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Reach out to discover how our services can elevate your digital
                transformation journey.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <button
                className="px-3 py-1.5 border border-white rounded-full text-gray-900 text-base font-medium bg-white hover:bg-gray-100 transition-colors"
                style={{
                  fontFamily:
                    "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Contact
              </button>
              <button
                className="px-3 py-1.5 border border-white/20 rounded-full text-white text-base font-medium hover:bg-white/10 transition-colors"
                style={{
                  fontFamily:
                    "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
