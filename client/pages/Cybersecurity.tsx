import { Button } from "@/components/ui/button";

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-[369px] flex items-center justify-center px-16 py-28 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/85b8e6c434e0507ae0f008fc8bddab4ec0777453?width=2880')"
          }}
        >
          <div className="max-w-[1280px] w-full flex flex-col gap-20">
            <div className="max-w-[768px] flex flex-col gap-6">
              <h1 className="text-white font-alata text-[72px] font-normal leading-[120%] tracking-[-0.72px]">
                Protect Your Business
              </h1>
              <p className="text-white font-montserrat text-lg font-normal leading-[150%]">
                Safeguard your enterprise with our comprehensive Technology Risk Management and Cybersecurity solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment Section */}
      <div className="flex py-28 px-16 flex-col items-center gap-20 bg-white">
        <div className="max-w-[1280px] w-full flex flex-col gap-20">
          <div className="flex items-center gap-20">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                      Secure
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                      Comprehensive Risk Assessment Services for Your Business
                    </h2>
                    <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                      Our Risk Assessment services identify potential vulnerabilities and threats to your organization. We provide actionable insights to enhance your cybersecurity posture.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex py-2 items-start gap-6">
                    <div className="flex flex-col gap-4 flex-1">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.5712 44.0005C26.2045 44.0005 25.8628 43.9088 25.5462 43.7254C25.2295 43.5421 24.9878 43.3004 24.8212 43.0005C24.6545 42.7005 24.5712 42.3671 24.5712 42.0005C24.5712 41.6338 24.6712 41.2838 24.8712 40.9505L33.3712 26.9505C33.5712 26.6171 33.8212 26.3671 34.1212 26.2005C34.4212 26.0338 34.7378 25.9505 35.0712 25.9505C35.4045 25.9505 35.7212 26.0338 36.0212 26.2005C36.3212 26.3671 36.5712 26.6171 36.7712 26.9505L45.2712 40.9505C45.4712 41.2838 45.5712 41.6338 45.5712 42.0005C45.5712 42.3671 45.4878 42.7005 45.3212 43.0005C45.1545 43.3004 44.9212 43.5421 44.6212 43.7254C44.3212 43.9088 43.9712 44.0005 43.5712 44.0005H26.5712ZM35.0787 42.3219C35.4643 42.3219 35.7945 42.1821 36.0692 41.9024C36.3438 41.6224 36.4812 41.2918 36.4812 40.9104C36.4812 40.5291 36.3407 40.2011 36.0597 39.9264C35.7787 39.6518 35.4468 39.5145 35.0642 39.5145C34.6785 39.5145 34.3503 39.6538 34.0797 39.9324C33.809 40.2111 33.6737 40.5401 33.6737 40.9194C33.6737 41.3021 33.8113 41.6316 34.0867 41.908C34.362 42.184 34.6927 42.3219 35.0787 42.3219ZM15.8017 40.2994C15.4933 40.2994 15.2047 40.2239 14.9357 40.0729C14.6667 39.9223 14.4623 39.712 14.3227 39.4419L10.0747 31.87H13.6752L15.8442 35.954H20.3562V34.454H16.7587L14.5847 30.37H9.27467L6.12467 24.846C6.05867 24.7033 6.00284 24.5604 5.95717 24.4174C5.91151 24.2745 5.88867 24.1315 5.88867 23.9885C5.88867 23.8978 5.96734 23.616 6.12467 23.143L9.27467 17.6309H14.5847L16.7587 13.547H20.3562V12.047H15.8492L13.6727 16.1309H10.0747L14.3227 8.54695C14.4623 8.28495 14.6667 8.07662 14.9357 7.92195C15.2047 7.76695 15.4933 7.68945 15.8017 7.68945H21.5582C22.0392 7.68945 22.4413 7.85545 22.7647 8.18745C23.088 8.51912 23.2497 8.92495 23.2497 9.40495V18.155H18.9282L17.4282 19.655H23.2497V26.358H18.2422L16.2517 22.2864H11.3442L9.84417 23.7865H15.2442L17.2917 27.858H23.2497V37.82L22.5477 38.9985C22.4047 39.2051 22.2862 39.4199 22.1922 39.6429C22.0982 39.8656 22.0062 40.0844 21.9162 40.2994H15.8017ZM33.8237 37.9265H36.3312V30.4235H33.8237V37.9265ZM24.7497 35.37V19.655H30.5712L29.0712 18.155H24.7497V9.40495C24.7497 8.92495 24.9133 8.51912 25.2407 8.18745C25.568 7.85545 25.9722 7.68945 26.4532 7.68945H32.2097C32.518 7.68945 32.8067 7.76695 33.0757 7.92195C33.3447 8.07662 33.549 8.28895 33.6887 8.55895L37.9247 16.1309H34.3312L32.1672 12.047H27.6432V13.547H31.2527L33.4147 17.6309H38.7247L41.8747 23.155C41.9707 23.296 42.034 23.4361 42.0647 23.5755C42.0953 23.7151 42.1107 23.8568 42.1107 24.0005C42.1107 24.0911 42.032 24.373 41.8747 24.846L40.5147 27.2775L39.1072 24.9365C38.6992 24.2538 38.1632 23.7521 37.4992 23.4315C36.8348 23.1108 36.0255 22.9505 35.0712 22.9505C34.1172 22.9505 33.3183 23.1088 32.6747 23.4255C32.0313 23.7421 31.5062 24.2446 31.0992 24.933L24.7497 35.37Z" fill="#0C0801"/>
                      </svg>
                      <h3 className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Identify Threats
                      </h3>
                      <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Pinpoint vulnerabilities that could jeopardize your business operations and data integrity.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0112 21.5625L4.55867 18.4745C4.29401 18.3348 4.08484 18.1333 3.93117 17.87C3.77784 17.607 3.70117 17.3193 3.70117 17.007V10.755C3.70117 10.4426 3.77784 10.155 3.93117 9.89195C4.08484 9.62862 4.29401 9.42712 4.55867 9.28745L10.0112 6.21145C10.2655 6.06212 10.5447 5.98745 10.8487 5.98745C11.1527 5.98745 11.4372 6.06212 11.7022 6.21145L17.1667 9.28745C17.4233 9.42712 17.6305 9.62862 17.7882 9.89195C17.9455 10.155 18.0242 10.4426 18.0242 10.755V17.007C18.0242 17.3193 17.9455 17.607 17.7882 17.87C17.6305 18.1333 17.4233 18.3348 17.1667 18.4745L11.7022 21.5625C11.4478 21.7118 11.1687 21.7864 10.8647 21.7864C10.5607 21.7864 10.2762 21.7118 10.0112 21.5625ZM10.8567 18.2395L14.7012 16.0355V11.7265L10.8567 9.52195L7.02417 11.7265V16.0355L10.8567 18.2395ZM32.8112 22.495V18.6744L38.6077 22.055C39.1467 22.3736 39.5653 22.7888 39.8637 23.3005C40.162 23.8121 40.3112 24.3665 40.3112 24.9635V35.2765C40.3112 35.8658 40.162 36.4181 39.8637 36.9335C39.5653 37.4491 39.1467 37.8624 38.6077 38.1735L29.8587 43.292C29.3173 43.5983 28.743 43.7514 28.1357 43.7514C27.528 43.7514 26.959 43.5983 26.4287 43.292L17.6797 38.1735C17.1407 37.8624 16.724 37.4491 16.4297 36.9335C16.1353 36.4181 15.9882 35.8658 15.9882 35.2765V24.9635C15.9882 24.3665 16.1353 23.8121 16.4297 23.3005C16.724 22.7888 17.1407 22.3736 17.6797 22.055L23.4882 18.6744V22.495L19.3112 24.954V35.3119L28.1437 40.429L36.9882 35.3119V24.954L32.8112 22.495ZM29.8112 15.0125V25.357C29.8112 25.822 29.6487 26.2141 29.3237 26.5335C28.9983 26.8528 28.602 27.0124 28.1347 27.0124C27.6673 27.0124 27.2762 26.8528 26.9612 26.5335C26.6458 26.2141 26.4882 25.822 26.4882 25.357V5.40495C26.4882 4.92395 26.6518 4.51778 26.9792 4.18645C27.3065 3.85512 27.7107 3.68945 28.1917 3.68945H41.1787C41.8417 3.68945 42.3388 3.99395 42.6702 4.60295C43.0018 5.21228 42.977 5.79878 42.5957 6.36245L41.2252 8.38745C41.0345 8.67412 40.9392 8.99429 40.9392 9.34795C40.9392 9.70195 41.0345 10.0281 41.2252 10.3265L42.5957 12.3395C42.977 12.9111 43.0018 13.4996 42.6702 14.105C42.3388 14.71 41.8417 15.0125 41.1787 15.0125H29.8112Z" fill="#0C0801"/>
                      </svg>
                      <h3 className="text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Mitigate Risks
                      </h3>
                      <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Develop strategies to reduce risks and protect your assets effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button variant="outline" className="rounded-full">
                  Learn
                </Button>
                <Button variant="link" className="gap-2 p-0">
                  Contact
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.38672 6.67285C9.48754 6.67285 9.56452 6.70326 9.64258 6.78125L14.5869 11.7256C14.6408 11.7795 14.666 11.8215 14.6777 11.8496V11.8506C14.6925 11.8861 14.7012 11.9259 14.7012 11.9746C14.7012 12.0233 14.6925 12.0631 14.6777 12.0986V12.0996C14.666 12.1277 14.6408 12.1697 14.5869 12.2236L9.61816 17.1924C9.54039 17.2702 9.47325 17.292 9.39258 17.2891C9.29855 17.2856 9.21769 17.2537 9.13184 17.168C9.05371 17.0898 9.02246 17.013 9.02246 16.9121C9.02246 16.8112 9.05371 16.7344 9.13184 16.6562L13.8135 11.9746L9.10645 7.26758C9.02878 7.18988 9.00684 7.12357 9.00977 7.04297C9.01321 6.9487 9.04578 6.86731 9.13184 6.78125C9.20976 6.70344 9.28613 6.67293 9.38672 6.67285Z" fill="#0C0801" stroke="#0C0801"/>
                  </svg>
                </Button>
              </div>
            </div>
            <img 
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/200b73a02feb8fdaaf0fd217400fa4b0540d4dfd?width=1200" 
              alt="Risk Assessment Services" 
            />
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="flex py-28 px-16 flex-col items-center gap-20 bg-white">
        <div className="max-w-[1280px] w-full flex flex-col gap-20">
          <div className="flex items-center gap-20">
            <img 
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/200b73a02feb8fdaaf0fd217400fa4b0540d4dfd?width=1200" 
              alt="Cybersecurity Strategy" 
            />
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-6">
                <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M69.1 24.2337L68.6333 23.4003C68.0313 22.3926 67.1823 21.5551 66.1666 20.967L43.8 8.06699C42.7873 7.47949 41.6377 7.16906 40.4667 7.16699H39.5C38.329 7.16906 37.1793 7.47949 36.1667 8.06699L13.8 21.0003C12.7899 21.5845 11.9509 22.4236 11.3667 23.4337L10.9 24.267C10.3125 25.2798 10.0021 26.4295 10 27.6003V53.4337C10.0021 54.6047 10.3125 55.7543 10.9 56.767L11.3667 57.6003C11.966 58.5987 12.8016 59.4343 13.8 60.0337L36.2 72.9337C37.2077 73.5333 38.3607 73.8447 39.5333 73.8336H40.4667C41.6377 73.8316 42.7873 73.5213 43.8 72.9337L66.1666 60.0003C67.1866 59.4293 68.029 58.587 68.6 57.567L69.1 56.7337C69.6803 55.718 69.9903 54.5703 70 53.4003V27.567C69.998 26.3961 69.6876 25.2465 69.1 24.2337ZM39.5 13.8337H40.4667L60 25.1003L40 36.6337L20 25.1003L39.5 13.8337ZM43.3333 65.5003L62.8333 54.2337L63.3333 53.4003V30.867L43.3333 42.4337V65.5003Z" fill="#0C0801"/>
                </svg>
                <div className="flex flex-col gap-6">
                  <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                    Crafting a Robust Cybersecurity Strategy
                  </h2>
                  <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                    Developing a comprehensive cybersecurity strategy is essential for protecting your organization from evolving threats. Our approach includes meticulous policy creation and effective implementation to ensure your security measures are both proactive and responsive.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button variant="outline" className="rounded-full">
                  Learn More
                </Button>
                <Button variant="link" className="gap-2 p-0">
                  Sign Up
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.38672 6.67285C9.48754 6.67285 9.56452 6.70326 9.64258 6.78125L14.5869 11.7256C14.6408 11.7795 14.666 11.8215 14.6777 11.8496V11.8506C14.6925 11.8861 14.7012 11.9259 14.7012 11.9746C14.7012 12.0233 14.6925 12.0631 14.6777 12.0986V12.0996C14.666 12.1277 14.6408 12.1697 14.5869 12.2236L9.61816 17.1924C9.54039 17.2702 9.47325 17.292 9.39258 17.2891C9.29855 17.2856 9.21769 17.2537 9.13184 17.168C9.05371 17.0898 9.02246 17.013 9.02246 16.9121C9.02246 16.8112 9.05371 16.7344 9.13184 16.6562L13.8135 11.9746L9.10645 7.26758C9.02878 7.18988 9.00684 7.12357 9.00977 7.04297C9.01321 6.9487 9.04578 6.86731 9.13184 6.78125C9.20976 6.70344 9.28613 6.67293 9.38672 6.67285Z" fill="#0C0801" stroke="#0C0801"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Response Section */}
      <div className="flex py-28 px-16 flex-col items-center gap-20 bg-[#173462]">
        <div className="max-w-[1280px] w-full flex flex-col gap-20">
          <div className="flex items-center gap-20">
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="text-white font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px]">
                Swift Incident Response and Management for Unmatched Cybersecurity Resilience
              </h2>
              <p className="text-white font-montserrat text-lg font-normal leading-[150%]">
                At TecNext, we provide comprehensive incident response and management services to help organizations swiftly address and recover from security breaches. Our expert team ensures that your business minimizes damage and restores operations efficiently, safeguarding your digital assets.
              </p>
            </div>
            <img 
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/200b73a02feb8fdaaf0fd217400fa4b0540d4dfd?width=1200" 
              alt="Incident Response" 
            />
          </div>
        </div>
      </div>

      {/* Cybersecurity Solutions Section */}
      <div className="flex py-28 px-16 flex-col items-center gap-20 bg-white">
        <div className="max-w-[1280px] w-full flex flex-col gap-20">
          <div className="flex items-start gap-20">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center">
                <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                  Security
                </div>
              </div>
              <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Comprehensive Cybersecurity Solutions for Your Business
              </h2>
            </div>
            <div className="flex-1 text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
              In today's digital landscape, safeguarding your enterprise is paramount. Our Technology Risk Management & Cybersecurity services ensure your organization is protected against evolving threats. We offer tailored solutions that align with your business goals and compliance requirements.
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex items-start gap-12">
              <div className="flex flex-col gap-8 flex-1">
                <img 
                  className="h-60 aspect-[394.67/240.00] rounded-2xl object-cover" 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3895a933f2b3b53c23ad71d294464ff0a174d161?width=789" 
                  alt="Compliance Management" 
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                    Enhancing Your Security Posture with Compliance Management
                  </h3>
                  <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Stay ahead of regulatory requirements and industry standards.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 flex-1">
                <img 
                  className="h-60 aspect-[394.67/240.00] rounded-2xl object-cover" 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/34a5cb27985e43bd7922e93bc0dc7a1640636c78?width=789" 
                  alt="Security Training" 
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                    Empowering Teams through Security Training Programs
                  </h3>
                  <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Equip your workforce with essential cybersecurity knowledge.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 flex-1">
                <img 
                  className="h-60 aspect-[394.67/240.00] rounded-2xl object-cover" 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2b03173019a59a9ef01d7cd64f5783603f709235?width=789" 
                  alt="Continuous Monitoring" 
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                    Proactive Defense with Continuous Monitoring Services
                  </h3>
                  <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Identify and mitigate threats in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button variant="outline" className="rounded-full">
              Learn More
            </Button>
            <Button variant="link" className="gap-2 p-0">
              Sign Up
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.38672 6.67285C9.48754 6.67285 9.56452 6.70326 9.64258 6.78125L14.5869 11.7256C14.6408 11.7795 14.666 11.8215 14.6777 11.8496V11.8506C14.6925 11.8861 14.7012 11.9259 14.7012 11.9746C14.7012 12.0233 14.6925 12.0631 14.6777 12.0986V12.0996C14.666 12.1277 14.6408 12.1697 14.5869 12.2236L9.61816 17.1924C9.54039 17.2702 9.47325 17.292 9.39258 17.2891C9.29855 17.2856 9.21769 17.2537 9.13184 17.168C9.05371 17.0898 9.02246 17.013 9.02246 16.9121C9.02246 16.8112 9.05371 16.7344 9.13184 16.6562L13.8135 11.9746L9.10645 7.26758C9.02878 7.18988 9.00684 7.12357 9.00977 7.04297C9.01321 6.9487 9.04578 6.86731 9.13184 6.78125C9.20976 6.70344 9.28613 6.67293 9.38672 6.67285Z" fill="#0C0801" stroke="#0C0801"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex py-28 px-16 flex-col items-center gap-20 bg-[#F2F2F2]">
        <div className="max-w-[1280px] w-full flex flex-col items-center gap-20">
          <div className="max-w-[768px] flex flex-col items-center gap-8">
            <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M33.0591 14.3564L23.1938 33.6423H13.9274L18.056 25.6494H17.8708C14.4647 30.071 9.38267 32.9817 2.1416 33.6423V25.76C2.1416 25.76 6.77389 25.4864 9.49708 22.6234H2.1416V14.3566H10.4084V21.1559L10.5939 21.1551L13.9721 14.3566H20.224V21.1128L20.4094 21.1125L23.9143 14.3564H33.0591Z" fill="#0C0801"/>
            </svg>
            <h3 className="text-[#0C0801] text-center font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px]">
              "TecNext's expertise in cybersecurity transformed our risk management approach, ensuring our data is secure and our operations are resilient."
            </h3>
            <div className="flex w-[300px] flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://via.placeholder.com/64x64" alt="Alex Johnson" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-[#0C0801] text-center font-montserrat text-base font-semibold leading-[150%]">
                  Alex Johnson
                </div>
                <div className="text-[#0C0801] text-center font-montserrat text-base font-normal leading-[150%]">
                  CISO, TechCorp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Steps Section */}
      <div className="flex py-28 px-16 flex-col items-center gap-20 bg-[#EBF2FE]">
        <div className="max-w-[1280px] w-full flex flex-col gap-20">
          <div className="max-w-[768px] flex flex-col gap-4">
            <div className="flex items-center">
              <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                Secure
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Your Cybersecurity Journey Starts Here
              </h2>
              <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                At TecNext, we prioritize your security needs. Our comprehensive approach ensures that your organization is protected against evolving threats.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex items-start gap-12">
              <div className="flex flex-col gap-6 flex-1">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.0002 40.8041C27.4935 39.6054 30.3907 37.4658 32.6917 34.3851C34.9923 31.3041 36.3427 27.8423 36.7427 23.9996H24.0002V7.36909L11.1077 12.1831V21.8996C11.1077 22.2916 11.116 22.6333 11.1327 22.9246C11.1493 23.2159 11.191 23.5743 11.2577 23.9996H24.0002V40.8041ZM24.0002 44.0866C23.8095 44.0866 23.6273 44.0679 23.4537 44.0306C23.2797 43.9933 23.1013 43.9373 22.9187 43.8626C18.2453 42.2959 14.5408 39.4518 11.8052 35.3301C9.06917 31.2084 7.70117 26.7149 7.70117 21.8496V12.1331C7.70117 11.4121 7.9065 10.7554 8.31717 10.1631C8.7275 9.57075 9.25984 9.14592 9.91417 8.88859L22.8067 4.07458C23.2133 3.92525 23.6112 3.85059 24.0002 3.85059C24.3892 3.85059 24.787 3.92525 25.1937 4.07458L38.0862 8.88859C38.7405 9.14592 39.2748 9.57075 39.6892 10.1631C40.1038 10.7554 40.3112 11.4121 40.3112 12.1331V21.8496C40.3112 26.7149 38.9412 31.2084 36.2012 35.3301C33.4615 39.4518 29.755 42.2959 25.0817 43.8626C24.899 43.9373 24.7207 43.9933 24.5467 44.0306C24.373 44.0679 24.1908 44.0866 24.0002 44.0866Z" fill="#0C0801"/>
                </svg>
                <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                  Step 1: Comprehensive Risk Assessment
                </h3>
                <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  We begin by identifying vulnerabilities within your existing systems.
                </p>
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.7172 24.7004H28.8172C28.3922 24.7004 28.036 24.8451 27.7487 25.1344C27.461 25.4234 27.3172 25.7818 27.3172 26.2094C27.3172 26.6368 27.461 26.9921 27.7487 27.2754C28.036 27.5588 28.3922 27.7004 28.8172 27.7004H34.9637C35.4447 27.7004 35.8488 27.5368 36.1762 27.2094C36.5035 26.8821 36.6672 26.4779 36.6672 25.9969V19.8504C36.6672 19.4254 36.5225 19.0691 36.2332 18.7814C35.9442 18.4941 35.5858 18.3504 35.1582 18.3504C34.7308 18.3504 34.3755 18.4941 34.0922 18.7814C33.8088 19.0691 33.6672 19.4254 33.6672 19.8504V22.6504C32.4338 20.8504 30.9172 19.4921 29.1172 18.5754C27.3172 17.6588 25.5533 17.2004 23.8257 17.2004C21.12 17.2004 18.7505 18.0421 16.7172 19.7254C14.6838 21.4088 13.4005 23.5004 12.8672 26.0004C12.7672 26.4338 12.8547 26.8254 13.1297 27.1754C13.4047 27.5254 13.7547 27.7004 14.1797 27.7004C14.6047 27.7004 14.9768 27.5418 15.2962 27.2244C15.6158 26.9068 15.8395 26.5321 15.9672 26.1004C16.4338 24.3671 17.3838 22.9504 18.8172 21.8504C20.2505 20.7505 21.9183 20.2004 23.8207 20.2004C25.2183 20.2004 26.6505 20.6004 28.1172 21.4004C29.5838 22.2004 30.7838 23.3004 31.7172 24.7004ZM24.6822 44.2994C21.8755 44.2994 19.2415 43.7681 16.7802 42.7054C14.3188 41.6428 12.1662 40.1894 10.3222 38.3454C8.47816 36.5014 7.02483 34.3481 5.96216 31.8854C4.8995 29.4228 4.36816 26.7866 4.36816 23.9769C4.36816 21.1676 4.8995 18.531 5.96216 16.067C7.02483 13.6033 8.4775 11.4576 10.3202 9.62995C12.1628 7.80195 14.3158 6.35495 16.7792 5.28895C19.2425 4.22262 21.8793 3.68945 24.6897 3.68945C27.4997 3.68945 30.1372 4.22228 32.6022 5.28795C35.0668 6.35362 37.2127 7.79979 39.0397 9.62645C40.867 11.4531 42.3135 13.6011 43.3792 16.0705C44.4452 18.5398 44.9782 21.1786 44.9782 23.9869C44.9782 26.7949 44.445 29.4294 43.3787 31.8904C42.3127 34.3518 40.8657 36.5009 39.0377 38.3379C37.21 40.1746 35.0622 41.6274 32.5942 42.6964C30.1262 43.7651 27.4888 44.2994 24.6822 44.2994ZM24.6922 40.8929C29.3768 40.8929 33.3593 39.2471 36.6397 35.9554C39.9197 32.6634 41.5597 28.6701 41.5597 23.9754C41.5597 19.2908 39.9227 15.3083 36.6487 12.028C33.375 8.74795 29.3792 7.10795 24.6612 7.10795C19.9892 7.10795 16.0067 8.74495 12.7137 12.019C9.421 15.2926 7.77466 19.2884 7.77466 24.0064C7.77466 28.6784 9.4205 32.6609 12.7122 35.9539C16.0042 39.2466 19.9975 40.8929 24.6922 40.8929Z" fill="#0C0801"/>
                </svg>
                <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                  Step 2: Tailored Security Strategy Development
                </h3>
                <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Next, we create a customized plan to address identified risks.
                </p>
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.3332 40.8041C27.8265 39.6054 30.7237 37.4658 33.0247 34.3851C35.3253 31.3041 36.6757 27.8423 37.0757 23.9996H24.3332V7.36909L11.4407 12.1831V21.8996C11.4407 22.2916 11.449 22.6333 11.4657 22.9246C11.4823 23.2159 11.524 23.5743 11.5907 23.9996H24.3332V40.8041ZM24.3332 44.0866C24.1425 44.0866 23.9603 44.0679 23.7867 44.0306C23.6127 43.9933 23.4343 43.9373 23.2517 43.8626C18.5783 42.2959 14.8738 39.4518 12.1382 35.3301C9.40218 31.2084 8.03418 26.7149 8.03418 21.8496V12.1331C8.03418 11.4121 8.23951 10.7554 8.65018 10.1631C9.06051 9.57075 9.59285 9.14592 10.2472 8.88859L23.1397 4.07458C23.5463 3.92525 23.9442 3.85059 24.3332 3.85059C24.7222 3.85059 25.12 3.92525 25.5267 4.07458L38.4192 8.88859C39.0735 9.14592 39.6078 9.57075 40.0222 10.1631C40.4368 10.7554 40.6442 11.4121 40.6442 12.1331V21.8496C40.6442 26.7149 39.2742 31.2084 36.5342 35.3301C33.7945 39.4518 30.088 42.2959 25.4147 43.8626C25.232 43.9373 25.0537 43.9933 24.8797 44.0306C24.706 44.0679 24.5238 44.0866 24.3332 44.0866Z" fill="#0C0801"/>
                </svg>
                <h3 className="text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                  Step 3: Implementation of Security Measures
                </h3>
                <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Our team executes the strategy with precision and care.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button variant="outline" className="rounded-full">
              Learn More
            </Button>
            <Button variant="link" className="gap-2 p-0">
              Sign Up
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.38672 6.67285C9.48754 6.67285 9.56452 6.70326 9.64258 6.78125L14.5869 11.7256C14.6408 11.7795 14.666 11.8215 14.6777 11.8496V11.8506C14.6925 11.8861 14.7012 11.9259 14.7012 11.9746C14.7012 12.0233 14.6925 12.0631 14.6777 12.0986V12.0996C14.666 12.1277 14.6408 12.1697 14.5869 12.2236L9.61816 17.1924C9.54039 17.2702 9.47325 17.292 9.39258 17.2891C9.29855 17.2856 9.21769 17.2537 9.13184 17.168C9.05371 17.0898 9.02246 17.013 9.02246 16.9121C9.02246 16.8112 9.05371 16.7344 9.13184 16.6562L13.8135 11.9746L9.10645 7.26758C9.02878 7.18988 9.00684 7.12357 9.00977 7.04297C9.01321 6.9487 9.04578 6.86731 9.13184 6.78125C9.20976 6.70344 9.28613 6.67293 9.38672 6.67285Z" fill="#0C0801" stroke="#0C0801"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex py-28 px-16 flex-col items-center gap-20 bg-white">
        <div className="max-w-[1280px] w-full flex flex-col gap-20">
          <div className="flex items-start gap-20">
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Secure Your Digital Future
              </h2>
            </div>
            <div className="flex flex-col gap-8 flex-1">
              <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                Are you prepared to protect your business from evolving cyber threats? Schedule a consultation with our experts to explore tailored solutions in Technology Risk Management and Cybersecurity.
              </p>
              <div className="flex items-start gap-4">
                <Button className="rounded-full bg-[#3B82F6] hover:bg-[#3B82F6]/90">
                  Contact
                </Button>
                <Button variant="outline" className="rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
