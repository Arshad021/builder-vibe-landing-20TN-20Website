import { Link } from "react-router-dom";

const DigitalTransmissions = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-16 py-28 md:py-32 bg-gradient-to-r from-black/50 to-black/50 bg-[url('https://api.builder.io/api/v1/image/assets/TEMP/85b8e6c434e0507ae0f008fc8bddab4ec0777453?width=2880')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-start gap-20 max-w-7xl w-full">
          <div className="flex flex-col items-start gap-6 max-w-3xl w-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[120%] tracking-[-0.72px] text-white font-alata">
              Transform Your Business
            </h1>
            <p className="text-lg text-white font-montserrat leading-[150%]">
              Embrace digital transformation to unlock new opportunities and drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering Your Business Section */}
      <section className="flex flex-col items-center px-4 md:px-16 py-28 gap-20 bg-white">
        <div className="flex flex-col max-w-7xl w-full gap-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center">
                  <span className="text-base font-bold text-[#0C0801] font-montserrat">Transform</span>
                </div>
                <div className="flex flex-col items-start gap-6 w-full">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[120%] tracking-[-0.52px] text-[#0C0801] font-alata">
                    Empowering Your Business Through Digital Transformation
                  </h2>
                  <p className="text-lg text-[#0C0801] font-montserrat leading-[150%]">
                    At TecNext, we believe that digital transformation is not just a trend, but a necessity for businesses to thrive in today's competitive landscape. Our tailored strategies ensure that your organization adapts, evolves, and excels in the digital age.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  to="/p/learn-more"
                  className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(12,8,1,0.15)] text-base font-normal text-[#0C0801] font-montserrat hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  to="/p/get-started"
                  className="flex items-center justify-center gap-2 rounded-full text-base font-normal text-[#0C0801] font-montserrat hover:text-[#0C0801]/80 transition-colors group"
                >
                  Get Started
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-1 max-w-lg lg:max-w-none">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/200b73a02feb8fdaaf0fd217400fa4b0540d4dfd?width=1200"
                alt="Digital transformation illustration"
                className="w-full h-auto max-h-[640px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="flex flex-col items-center px-4 md:px-16 py-28 gap-20 bg-[#173462]">
        <div className="flex flex-col items-center max-w-7xl w-full gap-20">
          <h2 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-normal leading-[120%] tracking-[-0.44px] text-white text-center font-alata">
            Unlock Your Potential with Our Digital Transformation Strategy
          </h2>
          <div className="flex flex-col gap-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Strategy Card 1 */}
              <div className="flex flex-col items-center gap-8 flex-1">
                <div className="flex flex-col items-center gap-6 w-full">
                  <svg className="w-12 h-12" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9047 17.9852H5.66868C5.19901 17.9852 4.80918 17.8294 4.49918 17.5177C4.18918 17.206 4.03418 16.817 4.03418 16.3507C4.03418 15.884 4.18918 15.4959 4.49918 15.1862C4.80918 14.8765 5.19901 14.7217 5.66868 14.7217H14.9047V7.85569L12.1942 10.5787C11.8642 10.9024 11.4788 11.0642 11.0382 11.0642C10.5972 11.0642 10.2077 10.9024 9.86968 10.5787C9.55968 10.2547 9.40668 9.8707 9.41068 9.4267C9.41468 8.98303 9.57868 8.5992 9.90268 8.2752L15.3432 2.8352C15.6828 2.4952 16.0825 2.3252 16.5422 2.3252C17.0022 2.3252 17.402 2.4952 17.7417 2.8352L23.1942 8.28719C23.5102 8.61253 23.672 8.99469 23.6797 9.43369C23.6877 9.87303 23.5348 10.2547 23.2212 10.5787C22.8792 10.9024 22.4862 11.0642 22.0422 11.0642C21.5985 11.0642 21.2147 10.8984 20.8907 10.5667L18.1797 7.85569V30.0037H43.0127C43.4747 30.0037 43.8622 30.162 44.1752 30.4787C44.4878 30.7954 44.6442 31.1877 44.6442 31.6557C44.6442 32.1204 44.4878 32.507 44.1752 32.8157C43.8622 33.1244 43.4747 33.2787 43.0127 33.2787H33.7852V40.1447L36.4962 37.4337C36.8165 37.102 37.197 36.936 37.6377 36.9357C38.0787 36.9354 38.4733 37.1014 38.8217 37.4337C39.1307 37.7577 39.2832 38.1397 39.2792 38.5797C39.2752 39.0194 39.1113 39.4012 38.7877 39.7252L33.3352 45.1772C32.9948 45.5172 32.5968 45.6852 32.1412 45.6812C31.6858 45.6772 31.2882 45.5092 30.9482 45.1772L25.4962 39.7132C25.1722 39.3972 25.0082 39.0194 25.0042 38.5797C25.0002 38.1397 25.1528 37.7577 25.4622 37.4337C25.8082 37.1014 26.2013 36.9374 26.6417 36.9417C27.0817 36.946 27.4677 37.11 27.7997 37.4337L30.4982 40.1447V33.2787H18.1797C17.243 33.2787 16.463 32.9695 15.8397 32.3512C15.2163 31.7332 14.9047 30.9507 14.9047 30.0037V17.9852ZM30.4982 27.0037V17.9852H21.1797V14.7217H30.4982C31.4438 14.7217 32.2282 15.031 32.8512 15.6497C33.4738 16.268 33.7852 17.0465 33.7852 17.9852V27.0037H30.4982Z" fill="white"/>
                  </svg>
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-[140%] tracking-[-0.28px] text-white text-center w-full font-alata">
                      Comprehensive Approach to Transforming Your Business for the Digital Age
                    </h3>
                    <p className="text-base text-white text-center font-montserrat leading-[150%]">
                      Our Digital Transformation Strategy encompasses assessment, planning, implementation, and optimization.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  <Link
                    to="/p/learn-strategy"
                    className="flex items-center justify-center gap-2 rounded-full text-base font-normal text-[#0C0801] font-montserrat hover:text-[#0C0801]/80 transition-colors group"
                  >
                    Learn More
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Strategy Card 2 */}
              <div className="flex flex-col items-center gap-8 flex-1">
                <div className="flex flex-col items-center gap-6 w-full">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9999 17.2687C22.0973 17.2687 20.4711 16.5937 19.1214 15.2437C17.7714 13.894 17.0964 12.2654 17.0964 10.3577C17.0964 8.4497 17.7714 6.82153 19.1214 5.4732C20.4711 4.12453 22.0973 3.4502 23.9999 3.4502C25.9026 3.4502 27.5288 4.12453 28.8784 5.4732C30.2284 6.82153 30.9034 8.4497 30.9034 10.3577C30.9034 12.2654 30.2284 13.894 28.8784 15.2437C27.5288 16.5937 25.9026 17.2687 23.9999 17.2687ZM24.0039 13.9817C25.0853 13.9817 25.9596 13.6467 26.6269 12.9767C27.2946 12.3067 27.6284 11.4314 27.6284 10.3507C27.6284 9.27303 27.2933 8.39936 26.6229 7.7297C25.9526 7.06003 25.0769 6.7252 23.9959 6.7252C22.9146 6.7252 22.0403 7.06036 21.3729 7.73069C20.7053 8.40069 20.3714 9.27636 20.3714 10.3577C20.3714 11.439 20.7066 12.3134 21.3769 12.9807C22.0473 13.648 22.9229 13.9817 24.0039 13.9817ZM21.6129 42.1632L11.7729 32.3352C11.1489 31.7032 10.6476 30.9275 10.2689 30.0082C9.89026 29.0892 9.70093 28.0249 9.70093 26.8152C9.70093 24.8719 10.3893 23.212 11.7659 21.8357C13.1423 20.459 14.8038 19.7707 16.7504 19.7707C17.6698 19.7707 18.5191 19.9767 19.2984 20.3887C20.0778 20.8007 20.7706 21.31 21.3769 21.9167L23.9999 24.5392L26.6229 21.9167C27.2213 21.318 27.9121 20.8107 28.6954 20.3947C29.4788 19.9787 30.3301 19.7707 31.2494 19.7707C33.1961 19.7707 34.8596 20.459 36.2399 21.8357C37.6206 23.212 38.3109 24.8729 38.3109 26.8182C38.3109 28.0249 38.1196 29.088 37.7369 30.0077C37.3543 30.9274 36.8509 31.7032 36.2269 32.3352L26.3869 42.1632C26.0443 42.4952 25.6661 42.7379 25.2524 42.8912C24.8384 43.0442 24.4206 43.1207 23.9989 43.1207C23.5773 43.1207 23.1598 43.0442 22.7464 42.8912C22.3328 42.7379 21.9549 42.4952 21.6129 42.1632ZM23.9999 39.6262L33.7149 29.8992C34.1079 29.5125 34.4024 29.0757 34.5984 28.5887C34.7944 28.1017 34.8924 27.512 34.8924 26.8197C34.8924 25.8517 34.5266 25.0027 33.7949 24.2727C33.0629 23.5424 32.2148 23.1772 31.2504 23.1772C30.7994 23.1772 30.3794 23.26 29.9904 23.4257C29.6014 23.591 29.2831 23.7997 29.0354 24.0517L23.9999 29.0752L18.9769 24.0762C18.7189 23.8182 18.3934 23.6039 18.0004 23.4332C17.6074 23.2625 17.1881 23.1772 16.7424 23.1772C15.7794 23.1772 14.9328 23.5424 14.2024 24.2727C13.4724 25.0027 13.1074 25.8517 13.1074 26.8197C13.1074 27.5097 13.2031 28.0974 13.3944 28.5827C13.5854 29.0684 13.8778 29.5069 14.2714 29.8982L23.9999 39.6262Z" fill="white"/>
                  </svg>
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-[140%] tracking-[-0.28px] text-white text-center w-full font-alata">
                      Tailored Assessment to Identify Your Unique Digital Transformation Needs
                    </h3>
                    <p className="text-base text-white text-center font-montserrat leading-[150%]">
                      We conduct thorough assessments to pinpoint areas for improvement and growth.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  <Link
                    to="/p/get-started-assessment"
                    className="flex items-center justify-center gap-2 rounded-full text-base font-normal text-[#0C0801] font-montserrat hover:text-[#0C0801]/80 transition-colors group"
                  >
                    Get Started
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Strategy Card 3 */}
              <div className="flex flex-col items-center gap-8 flex-1">
                <div className="flex flex-col items-center gap-6 w-full">
                  <svg className="w-12 h-12" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.07118 44.2994C5.59018 44.2994 5.18601 44.1349 4.85868 43.8059C4.53134 43.4769 4.36768 43.0707 4.36768 42.5874C4.36768 42.104 4.53134 41.7007 4.85868 41.3774C5.18601 41.0544 5.59018 40.8929 6.07118 40.8929H43.2622C43.7432 40.8929 44.1493 41.0574 44.4807 41.3864C44.812 41.7154 44.9777 42.1215 44.9777 42.6049C44.9777 43.0882 44.812 43.4914 44.4807 43.8144C44.1493 44.1377 43.7432 44.2994 43.2622 44.2994H6.07118ZM16.6667 21.7039C16.186 21.7039 15.782 21.54 15.4547 21.2124C15.127 20.885 14.9632 20.481 14.9632 20.0004V18.0004C14.9632 17.5197 15.127 17.1157 15.4547 16.7884C15.782 16.4607 16.186 16.2969 16.6667 16.2969H32.6667C33.1473 16.2969 33.5513 16.4607 33.8787 16.7884C34.2063 17.1157 34.3702 17.5197 34.3702 18.0004V20.0004C34.3702 20.481 34.2063 20.885 33.8787 21.2124C33.5513 21.54 33.1473 21.7039 32.6667 21.7039H16.6667ZM16.6667 33.7039C16.186 33.7039 15.782 33.54 15.4547 33.2124C15.127 32.885 14.9632 32.481 14.9632 32.0004V30.0004C14.9632 29.5197 15.127 29.1157 15.4547 28.7884C15.782 28.4607 16.186 28.2969 16.6667 28.2969H32.6667C33.1473 28.2969 33.5513 28.4607 33.8787 28.7884C34.2063 29.1157 34.3702 29.5197 34.3702 30.0004V32.0004C34.3702 32.481 34.2063 32.885 33.8787 33.2124C33.5513 33.54 33.1473 33.7039 32.6667 33.7039H16.6667Z" fill="white"/>
                  </svg>
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-[140%] tracking-[-0.28px] text-white text-center w-full font-alata">
                      Strategic Planning to Align Technology with Your Business Goals
                    </h3>
                    <p className="text-base text-white text-center font-montserrat leading-[150%]">
                      Our planning phase ensures that technology investments align with your objectives.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 rounded-full text-base font-normal text-[#0C0801] font-montserrat hover:text-[#0C0801]/80 transition-colors group"
                  >
                    Contact
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Potential Section */}
      <section className="flex flex-col items-center px-4 md:px-16 py-28 gap-20 bg-white">
        <div className="flex flex-col max-w-7xl w-full gap-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 max-w-lg lg:max-w-none order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/200b73a02feb8fdaaf0fd217400fa4b0540d4dfd?width=1200"
                alt="Business transformation illustration"
                className="w-full h-auto max-h-[640px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-start gap-6 flex-1 order-1 lg:order-2">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9999 17.2687C22.0973 17.2687 20.4711 16.5937 19.1214 15.2437C17.7714 13.894 17.0964 12.2654 17.0964 10.3577C17.0964 8.4497 17.7714 6.82153 19.1214 5.4732C20.4711 4.12453 22.0973 3.4502 23.9999 3.4502C25.9026 3.4502 27.5288 4.12453 28.8784 5.4732C30.2284 6.82153 30.9034 8.4497 30.9034 10.3577C30.9034 12.2654 30.2284 13.894 28.8784 15.2437C27.5288 16.5937 25.9026 17.2687 23.9999 17.2687ZM24.0039 13.9817C25.0853 13.9817 25.9596 13.6467 26.6269 12.9767C27.2946 12.3067 27.6284 11.4314 27.6284 10.3507C27.6284 9.27303 27.2933 8.39936 26.6229 7.7297C25.9526 7.06003 25.0769 6.7252 23.9959 6.7252C22.9146 6.7252 22.0403 7.06036 21.3729 7.73069C20.7053 8.40069 20.3714 9.27636 20.3714 10.3577C20.3714 11.439 20.7066 12.3134 21.3769 12.9807C22.0473 13.648 22.9229 13.9817 24.0039 13.9817ZM21.6129 42.1632L11.7729 32.3352C11.1489 31.7032 10.6476 30.9275 10.2689 30.0082C9.89026 29.0892 9.70093 28.0249 9.70093 26.8152C9.70093 24.8719 10.3893 23.212 11.7659 21.8357C13.1423 20.459 14.8038 19.7707 16.7504 19.7707C17.6698 19.7707 18.5191 19.9767 19.2984 20.3887C20.0778 20.8007 20.7706 21.31 21.3769 21.9167L23.9999 24.5392L26.6229 21.9167C27.2213 21.318 27.9121 20.8107 28.6954 20.3947C29.4788 19.9787 30.3301 19.7707 31.2494 19.7707C33.1961 19.7707 34.8596 20.459 36.2399 21.8357C37.6206 23.212 38.3109 24.8729 38.3109 26.8182C38.3109 28.0249 38.1196 29.088 37.7369 30.0077C37.3543 30.9274 36.8509 31.7032 36.2269 32.3352L26.3869 42.1632C26.0443 42.4952 25.6661 42.7379 25.2524 42.8912C24.8384 43.0442 24.4206 43.1207 23.9989 43.1207C23.5773 43.1207 23.1598 43.0442 22.7464 42.8912C22.3328 42.7379 21.9549 42.4952 21.6129 42.1632ZM23.9999 39.6262L33.7149 29.8992C34.1079 29.5125 34.4024 29.0757 34.5984 28.5887C34.7944 28.1017 34.8924 27.512 34.8924 26.8197C34.8924 25.8517 34.5266 25.0027 33.7949 24.2727C33.0629 23.5424 32.2148 23.1772 31.2504 23.1772C30.7994 23.1772 30.3794 23.26 29.9904 23.4257C29.6014 23.591 29.2831 23.7997 29.0354 24.0517L23.9999 29.0752L18.9769 24.0762C18.7189 23.8182 18.3934 23.6039 18.0004 23.4332C17.6074 23.2625 17.1881 23.1772 16.7424 23.1772C15.7794 23.1772 14.9328 23.5424 14.2024 24.2727C13.4724 25.0027 13.1074 25.8517 13.1074 26.8197C13.1074 27.5097 13.2031 28.0974 13.3944 28.5827C13.5854 29.0684 13.8778 29.5069 14.2714 29.8982L23.9999 39.6262Z" fill="#0C0801"/>
              </svg>
              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[120%] tracking-[-0.44px] text-[#0C0801] font-alata">
                  Unlock Your Business Potential with Our Digital Transformation Strategy
                </h2>
                <p className="text-lg text-[#0C0801] font-montserrat leading-[150%]">
                  Implementing a digital transformation strategy with TecNext empowers your organization to enhance efficiency, drive innovation, and improve customer experiences. Our tailored approach ensures measurable results that align with your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="flex flex-col items-center px-4 md:px-16 py-28 gap-20 bg-white">
        <div className="flex flex-col max-w-7xl w-full gap-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Table of Contents */}
            <div className="flex flex-col items-start gap-4 w-full lg:w-80 flex-shrink-0">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801] font-alata">
                Table of contents
              </h3>
              <div className="flex flex-col items-start w-full">
                <div className="flex items-start gap-2.5 w-full p-3 border border-[rgba(12,8,1,0.15)] bg-white">
                  <h4 className="text-lg font-bold text-[#0C0801] font-montserrat leading-[150%]">
                    Heading 2
                  </h4>
                </div>
                <div className="flex items-start gap-2 w-full p-3 pl-8">
                  <span className="text-lg font-normal text-[#0C0801] font-montserrat leading-[150%]">
                    Heading 3
                  </span>
                </div>
                <div className="flex items-start gap-2 w-full p-3 pl-12">
                  <span className="text-lg font-normal text-[#0C0801] font-montserrat leading-[150%]">
                    Heading 4
                  </span>
                </div>
                <div className="flex items-start gap-2 w-full p-3 pl-16">
                  <span className="text-lg font-normal text-[#0C0801] font-montserrat leading-[150%]">
                    Heading 5
                  </span>
                </div>
                <div className="flex items-start gap-2 w-full p-3 pl-20">
                  <span className="text-lg font-normal text-[#0C0801] font-montserrat leading-[150%]">
                    Heading 6
                  </span>
                </div>
              </div>
            </div>

            {/* Rich Text Content */}
            <div className="flex flex-col items-start max-w-3xl flex-1">
              <div className="flex flex-col items-start w-full pb-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[120%] tracking-[-0.52px] text-[#0C0801] font-alata w-full">
                  Heading 2
                </h2>
              </div>
              <div className="flex flex-col items-start w-full pb-4">
                <p className="text-base font-bold text-[#0C0801] font-montserrat leading-[150%] w-full">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                </p>
              </div>
              <div className="flex flex-col items-start w-full pb-4">
                <p className="text-base font-normal text-[#0C0801] font-montserrat leading-[150%] w-full">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                </p>
              </div>
              <div className="flex flex-col items-start py-6 w-full">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[120%] tracking-[-0.44px] text-[#0C0801] font-alata w-full">
                  Heading 3
                </h3>
              </div>
              <div className="flex flex-col items-start w-full pb-4">
                <p className="text-base font-normal text-[#0C0801] font-montserrat leading-[150%] w-full">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                </p>
              </div>
              <div className="flex flex-col items-start w-full pb-4">
                <p className="text-base font-normal text-[#0C0801] font-montserrat leading-[150%] w-full">
                  Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
                </p>
              </div>
              <div className="flex flex-col items-start py-6 w-full">
                <h4 className="text-xl md:text-2xl lg:text-4xl font-normal leading-[130%] tracking-[-0.36px] text-[#0C0801] font-alata w-full">
                  Heading 4
                </h4>
              </div>
              <div className="flex flex-col items-start w-full pb-4">
                <p className="text-base font-normal text-[#0C0801] font-montserrat leading-[150%] w-full">
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 py-12 w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/09305157002f1a61f6fdcc1774f040e97d0dc5cc?width=1536"
                  alt="Digital transformation visualization"
                  className="h-96 md:h-[480px] w-full object-cover rounded-2xl"
                />
                <div className="flex items-start gap-2 w-full">
                  <div className="w-0.5 h-auto bg-[rgba(12,8,1,0.15)]"></div>
                  <p className="text-sm font-normal text-[#0C0801] font-montserrat leading-[150%] flex-1">
                    Image caption goes here
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start py-5 w-full">
                <h5 className="text-lg md:text-xl lg:text-3xl font-normal leading-[140%] tracking-[-0.28px] text-[#0C0801] font-alata w-full">
                  Heading 5
                </h5>
              </div>
              <div className="flex flex-col items-start w-full pb-4">
                <p className="text-base font-normal text-[#0C0801] font-montserrat leading-[150%] w-full">
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                </p>
              </div>
              <div className="flex items-start py-9 w-full">
                <div className="flex items-start gap-5 flex-1 pr-5 bg-transparent">
                  <div className="w-0.5 h-auto bg-[rgba(12,8,1,0.15)]"></div>
                  <blockquote className="text-xl italic font-normal text-[#0C0801] font-inter leading-7 flex-1">
                    "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
                  </blockquote>
                </div>
              </div>
              <div className="flex flex-col items-start py-5 w-full">
                <h6 className="text-base md:text-lg lg:text-2xl font-normal leading-[140%] tracking-[-0.22px] text-[#0C0801] font-alata w-full">
                  Heading 6
                </h6>
              </div>
              <div className="flex flex-col items-start w-full pb-4">
                <p className="text-base font-normal text-[#0C0801] font-montserrat leading-[150%] w-full">
                  Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="flex flex-col items-center px-4 md:px-16 py-28 gap-20 bg-[#173462]">
        <div className="flex flex-col items-center max-w-7xl w-full gap-20">
          <div className="flex flex-col items-center gap-8 max-w-3xl w-full">
            <div className="flex items-start gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-5" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="white"/>
                </svg>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-normal leading-[140%] tracking-[-0.28px] text-white text-center font-alata">
              "The Digital Transformation Strategy provided by TecNext has revolutionized our operations, leading to unprecedented efficiency and growth."
            </blockquote>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
              <div className="flex flex-col items-start">
                <div className="text-base font-bold text-white font-montserrat leading-[150%]">
                  John Doe
                </div>
                <div className="text-base font-normal text-white font-montserrat leading-[150%]">
                  CEO, TechCorp
                </div>
              </div>
              <div className="w-px h-[61px] bg-[rgba(255,255,255,0.2)]"></div>
              <div className="w-30 h-12 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white text-sm">Logo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center px-4 md:px-16 py-28 gap-20 bg-white">
        <div className="flex flex-col max-w-7xl w-full gap-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex flex-col items-start gap-6 flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[120%] tracking-[-0.44px] text-[#0C0801] font-alata w-full">
                Transform Your Business Today
              </h2>
              <p className="text-lg text-[#0C0801] font-montserrat leading-[150%] w-full">
                Unlock your potential with our expert guidance.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Link
                to="/p/consult"
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-[#3B82F6] bg-[#3B82F6] text-base font-normal text-white font-montserrat hover:opacity-90 transition-opacity"
              >
                Consult
              </Link>
              <Link
                to="/p/learn-more-cta"
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(12,8,1,0.15)] text-base font-normal text-[#0C0801] font-montserrat hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransmissions;
