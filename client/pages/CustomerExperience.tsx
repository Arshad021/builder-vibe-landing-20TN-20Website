import { Button } from "@/components/ui/button";

export default function CustomerExperience() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="flex h-[369px] px-16 py-28 flex-col items-center gap-20 self-stretch relative"
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("https://api.builder.io/api/v1/image/assets/TEMP/85b8e6c434e0507ae0f008fc8bddab4ec0777453?width=2880") lightgray 50% / cover no-repeat'
        }}
      >
        <div className="flex max-w-[1280px] flex-col items-start gap-20 flex-1 self-stretch">
          <div className="flex max-w-[768px] flex-col items-start gap-6 flex-1 self-stretch">
            <h1 className="self-stretch text-white font-alata text-[72px] font-normal leading-[120%] tracking-[-0.72px]">
              Elevate Customer Experience
            </h1>
            <p className="self-stretch text-white font-montserrat text-lg font-normal leading-[150%]">
              Transform your customer interactions into meaningful experiences that drive loyalty and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Crafting Unique Experiences */}
      <section className="flex px-16 py-28 flex-col items-center gap-20 self-stretch bg-white">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex items-center gap-20 self-stretch">
            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-8 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="flex items-center">
                    <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                      Personalized
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-6 self-stretch">
                    <h2 className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                      Crafting Unique Experiences for Every Customer
                    </h2>
                    <p className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                      At TecNext, we believe that every customer is unique. Our approach focuses on creating tailored journeys that resonate with individual needs and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="flex py-2 items-start gap-6 self-stretch">
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <h3 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Tailored Solutions
                      </h3>
                      <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        We analyze customer data to design experiences that drive engagement and satisfaction.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <h3 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Engagement Strategies
                      </h3>
                      <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Our strategies enhance interaction, ensuring customers feel valued and understood throughout their journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button variant="outline" size="default">
                  Learn More
                </Button>
                <Button variant="link" size="default" className="gap-2">
                  Sign Up
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3877 6.67285C9.48852 6.67285 9.56549 6.70326 9.64355 6.78125L14.5879 11.7256C14.6418 11.7795 14.667 11.8215 14.6787 11.8496V11.8506C14.6935 11.8861 14.7021 11.9259 14.7021 11.9746C14.7021 12.0233 14.6935 12.0631 14.6787 12.0986V12.0996C14.667 12.1277 14.6418 12.1697 14.5879 12.2236L9.61914 17.1924C9.54137 17.2702 9.47423 17.292 9.39355 17.2891C9.29953 17.2856 9.21866 17.2537 9.13281 17.168C9.05469 17.0898 9.02344 17.013 9.02344 16.9121C9.02344 16.8112 9.05469 16.7344 9.13281 16.6562L13.8145 11.9746L9.10742 7.26758C9.02976 7.18988 9.00781 7.12357 9.01074 7.04297C9.01419 6.9487 9.04676 6.86731 9.13281 6.78125C9.21074 6.70344 9.28711 6.67293 9.3877 6.67285Z" fill="#0C0801" stroke="#0C0801"/>
                  </svg>
                </Button>
              </div>
            </div>
            <img 
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/200b73a02feb8fdaaf0fd217400fa4b0540d4dfd?width=1200" 
              alt="Customer experience illustration" 
            />
          </div>
        </div>
      </section>

      {/* Section: Omnichannel Support */}
      <section className="flex px-16 py-28 flex-col items-center gap-20 self-stretch bg-white">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex items-start gap-20 self-stretch">
            <div className="flex flex-col items-start gap-4 flex-1">
              <div className="flex items-center">
                <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                  Support
                </div>
              </div>
              <h2 className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                Enhancing Customer Experience Through Omnichannel Support
              </h2>
            </div>
            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-8 self-stretch">
                <p className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                  Our omnichannel customer support ensures seamless interactions across all platforms. We prioritize customer satisfaction by providing timely and effective assistance.
                </p>
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="flex py-2 items-start gap-6 self-stretch">
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.8091 35.7004C24.3625 35.7004 24.8345 35.5046 25.2251 35.1129C25.6158 34.7216 25.8111 34.2493 25.8111 33.6959C25.8111 33.1423 25.6157 32.6728 25.2246 32.2874C24.8336 31.9018 24.3588 31.709 23.8001 31.709C23.2508 31.709 22.7833 31.9019 22.3976 32.2879C22.0123 32.6736 21.8196 33.1458 21.8196 33.7044C21.8196 34.2541 22.0128 34.7241 22.3991 35.1144C22.7855 35.5051 23.2555 35.7004 23.8091 35.7004ZM30.2271 17.9749C30.2271 16.2059 29.6595 14.7973 28.5242 13.7489C27.3885 12.7006 25.8521 12.1765 23.9151 12.1765C22.5231 12.1765 21.2611 12.4716 20.1291 13.0619C18.9968 13.6523 18.093 14.5064 17.4176 15.6244C17.2016 15.9484 17.1818 16.3004 17.3581 16.6804C17.5348 17.0601 17.82 17.3338 18.2136 17.5015C18.5973 17.6711 18.9801 17.6956 19.3621 17.5749C19.7438 17.4543 20.08 17.232 20.3707 16.908C20.8213 16.3573 21.3398 15.9419 21.9261 15.6619C22.5125 15.3819 23.1715 15.242 23.9032 15.242C24.9115 15.242 25.7086 15.4968 26.2946 16.0064C26.881 16.5161 27.1742 17.2188 27.1742 18.1145C27.1742 18.7418 26.9968 19.3526 26.6421 19.9469C26.2871 20.5413 25.7043 21.2359 24.8937 22.0309C23.9283 22.9373 23.25 23.7366 22.8586 24.4289C22.467 25.1209 22.2206 25.9209 22.1196 26.8289C22.0863 27.2213 22.2193 27.5646 22.5187 27.8589C22.8183 28.1533 23.1811 28.3004 23.6071 28.3004C23.9835 28.3004 24.3221 28.1611 24.6231 27.8825C24.9245 27.6038 25.1205 27.2466 25.2111 26.8109C25.3521 26.2639 25.585 25.7424 25.9096 25.2465C26.2343 24.7505 26.7181 24.1836 27.3612 23.5459C28.3798 22.5223 29.1122 21.5815 29.5581 20.7235C30.0042 19.8655 30.2271 18.9493 30.2271 17.9749ZM9.10865 42.2994C8.18865 42.2994 7.39098 41.9616 6.71565 41.2859C6.03998 40.6106 5.70215 39.8129 5.70215 38.8929V9.10795C5.70215 8.18462 6.03998 7.38412 6.71565 6.70645C7.39098 6.02845 8.18865 5.68945 9.10865 5.68945H38.8936C39.817 5.68945 40.6175 6.02845 41.2951 6.70645C41.9731 7.38412 42.3121 8.18462 42.3121 9.10795V38.8929C42.3121 39.8129 41.9731 40.6106 41.2951 41.2859C40.6175 41.9616 39.817 42.2994 38.8936 42.2994H9.10865ZM9.10865 38.8929H38.8936V9.10795H9.10865V38.8929Z" fill="#0C0801"/>
                      </svg>
                      <h3 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        24/7 Availability
                      </h3>
                      <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Always here to assist, no matter the time.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9162 38.7632L22.8807 38.7512C18.0821 38.6555 14.0014 36.8905 10.6387 33.4562C7.27606 30.0219 5.59473 25.9014 5.59473 21.0947C5.59473 16.2164 7.32623 12.056 10.7892 8.6137C14.2522 5.17136 18.4396 3.4502 23.3512 3.4502C25.7736 3.4502 28.0191 3.88719 30.0877 4.76119C32.1561 5.63486 33.9582 6.85636 35.4942 8.4257C37.0299 9.99503 38.2347 11.8472 39.1087 13.9822C39.9827 16.1175 40.4197 18.4464 40.4197 20.9687C40.4197 25.463 39.2326 29.632 36.8582 33.4757C34.4839 37.3197 31.4497 40.4807 27.7557 42.9587C27.4904 43.1414 27.2064 43.2307 26.9037 43.2267C26.6014 43.2227 26.3176 43.1589 26.0522 43.0352C25.7872 42.9192 25.5737 42.7369 25.4117 42.4882C25.2497 42.2395 25.1561 41.962 25.1307 41.6557L24.9162 38.7632ZM28.2512 38.4687C30.9846 36.1687 33.1262 33.4584 34.6762 30.3377C36.2262 27.217 37.0012 24.094 37.0012 20.9687C37.0012 16.8354 35.7096 13.452 33.1262 10.8187C30.5429 8.18536 27.2846 6.8687 23.3512 6.8687C19.3512 6.8687 15.9596 8.25836 13.1762 11.0377C10.3929 13.817 9.00123 17.1774 9.00123 21.1187C9.00123 25.052 10.3929 28.4104 13.1762 31.1937C15.9596 33.977 19.3179 35.3687 23.2512 35.3687H28.2512V38.4687ZM23.3632 32.8022C23.9286 32.8022 24.4064 32.607 24.7967 32.2167C25.1874 31.826 25.3827 31.348 25.3827 30.7827C25.3827 30.2254 25.1874 29.7515 24.7967 29.3612C24.4064 28.9705 23.9286 28.7752 23.3632 28.7752C22.7979 28.7752 22.3201 28.9705 21.9297 29.3612C21.5391 29.7515 21.3437 30.2254 21.3437 30.7827C21.3437 31.348 21.5391 31.826 21.9297 32.2167C22.3201 32.607 22.7979 32.8022 23.3632 32.8022ZM18.4652 16.2047C18.8226 16.346 19.1736 16.346 19.5182 16.2047C19.8626 16.0634 20.1674 15.8307 20.4327 15.5067C20.7167 15.0894 21.1091 14.7617 21.6097 14.5237C22.1107 14.2857 22.7326 14.1667 23.4752 14.1667C24.2859 14.1667 24.9917 14.39 25.5927 14.8367C26.1934 15.2834 26.4937 15.9034 26.4937 16.6967C26.4937 17.3224 26.3167 17.9622 25.9627 18.6162C25.6087 19.2699 25.0144 20.0142 24.1797 20.8492C23.4207 21.6159 22.8584 22.2989 22.4927 22.8982C22.1267 23.4972 21.9437 24.0222 21.9437 24.4732C21.9437 24.8635 22.0621 25.202 22.2987 25.4887C22.5351 25.7754 22.8486 25.9187 23.2392 25.9187C23.6219 25.9187 23.9462 25.8 24.2122 25.5627C24.4782 25.3254 24.6564 25.0234 24.7467 24.6567C24.8707 24.298 25.0624 23.906 25.3217 23.4807C25.5814 23.0554 25.9826 22.5674 26.5252 22.0167C27.5396 20.986 28.2487 20.0604 28.6527 19.2397C29.0567 18.419 29.2587 17.5635 29.2587 16.6732C29.2587 15.0825 28.7067 13.8125 27.6027 12.8632C26.4987 11.9139 25.1427 11.4392 23.5347 11.4392C22.5444 11.4392 21.5102 11.6642 20.4322 12.1142C19.3542 12.5642 18.5692 13.2479 18.0772 14.1652C17.8456 14.5719 17.7611 14.978 17.8237 15.3837C17.8864 15.7897 18.1002 16.0634 18.4652 16.2047Z" fill="#0C0801"/>
                      </svg>
                      <h3 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                        Personalized Solutions
                      </h3>
                      <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Tailored support that meets the unique needs of each customer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button variant="outline" size="default">
                  Learn More
                </Button>
                <Button variant="link" size="default" className="gap-2">
                  Sign Up
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3877 6.67285C9.48852 6.67285 9.56549 6.70326 9.64355 6.78125L14.5879 11.7256C14.6418 11.7795 14.667 11.8215 14.6787 11.8496V11.8506C14.6935 11.8861 14.7021 11.9259 14.7021 11.9746C14.7021 12.0233 14.6935 12.0631 14.6787 12.0986V12.0996C14.667 12.1277 14.6418 12.1697 14.5879 12.2236L9.61914 17.1924C9.54137 17.2702 9.47423 17.292 9.39355 17.2891C9.29953 17.2856 9.21866 17.2537 9.13281 17.168C9.05469 17.0898 9.02344 17.013 9.02344 16.9121C9.02344 16.8112 9.05469 16.7344 9.13281 16.6562L13.8145 11.9746L9.10742 7.26758C9.02976 7.18988 9.00781 7.12357 9.01074 7.04297C9.01419 6.9487 9.04676 6.86731 9.13281 6.78125C9.21074 6.70344 9.28711 6.67293 9.3877 6.67285Z" fill="#0C0801" stroke="#0C0801"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <img 
          className="h-[738px] self-stretch aspect-[640/369] rounded-2xl object-cover" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/6cfbb6acd1e71e1ff9491aa169ff3ff61d81bae1?width=2560" 
          alt="Omnichannel support illustration" 
        />
      </section>

      {/* Section: Customer Insights */}
      <section className="flex px-16 py-28 flex-col items-center gap-20 self-stretch bg-[#F2F2F2]">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex h-[640px] items-center gap-20 self-stretch">
            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex items-center">
                  <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                    Engagement
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6 self-stretch">
                  <h2 className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                    Harnessing Customer Insights for Better Experiences
                  </h2>
                  <p className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                    Customer feedback loops are essential for understanding client needs and preferences. By leveraging analytics, businesses can refine their strategies to enhance overall customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button variant="outline" size="default">
                  Learn More
                </Button>
                <Button variant="link" size="default" className="gap-2">
                  Sign Up
                  <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3877 7.17285C9.48852 7.17285 9.56549 7.20326 9.64355 7.28125L14.5879 12.2256C14.6418 12.2795 14.667 12.3215 14.6787 12.3496V12.3506C14.6935 12.3861 14.7021 12.4259 14.7021 12.4746C14.7021 12.5233 14.6935 12.5631 14.6787 12.5986V12.5996C14.667 12.6277 14.6418 12.6697 14.5879 12.7236L9.61914 17.6924C9.54137 17.7702 9.47423 17.792 9.39355 17.7891C9.29953 17.7856 9.21866 17.7537 9.13281 17.668C9.05469 17.5898 9.02344 17.513 9.02344 17.4121C9.02344 17.3112 9.05469 17.2344 9.13281 17.1562L13.8145 12.4746L9.10742 7.76758C9.02976 7.68988 9.00781 7.62357 9.01074 7.54297C9.01419 7.4487 9.04676 7.36731 9.13281 7.28125C9.21074 7.20344 9.28711 7.17293 9.3877 7.17285Z" fill="#0C0801" stroke="#0C0801"/>
                  </svg>
                </Button>
              </div>
            </div>
            <img 
              className="h-[640px] flex-1 aspect-[15/16] rounded-2xl object-cover" 
              src="https://api.builder.io/api/v1/image/assets/TEMP/200b73a02feb8fdaaf0fd217400fa4b0540d4dfd?width=1200" 
              alt="Customer insights illustration" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex px-16 py-28 flex-col items-center gap-20 self-stretch bg-[#173462]">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex max-w-[768px] flex-col items-start gap-6 self-stretch">
            <h2 className="self-stretch text-white font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
              Customer Testimonials
            </h2>
            <p className="self-stretch text-white font-montserrat text-lg font-normal leading-[150%]">
              Hear from our satisfied clients about their experiences.
            </p>
          </div>
          <div className="flex flex-col items-start gap-16 self-stretch">
            <div className="flex justify-center items-start gap-16 self-stretch">
              <div className="flex flex-col items-start gap-8 flex-1">
                <div className="flex items-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.07185 0.612343C9.4156 -0.204115 10.5864 -0.204114 10.9301 0.612346L12.9589 5.43123C13.1039 5.77543 13.4315 6.01061 13.8076 6.0404L19.0736 6.45748C19.9659 6.52814 20.3276 7.62813 19.6479 8.2034L15.6358 11.5987C15.3492 11.8412 15.224 12.2218 15.3115 12.5843L16.5373 17.661C16.745 18.5211 15.7979 19.201 15.034 18.7401L10.5255 16.0196C10.2035 15.8252 9.79848 15.8252 9.47645 16.0196L4.96797 18.7401C4.20409 19.201 3.25693 18.5211 3.46461 17.661L4.6904 12.5843C4.77795 12.2218 4.6528 11.8412 4.36623 11.5987L0.354039 8.2034C-0.325741 7.62813 0.0360444 6.52814 0.928268 6.45748L6.19433 6.0404C6.57048 6.01061 6.89813 5.77543 7.04304 5.43123L9.07185 0.612343Z" fill="white"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="self-stretch text-white font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                  "TecNext transformed our customer engagement strategy, leading to remarkable results!"
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col items-start">
                    <div className="text-white font-montserrat text-base font-semibold leading-[150%]">
                      John Doe
                    </div>
                    <div className="text-white font-montserrat text-base font-normal leading-[150%]">
                      CEO, Tech Innovations
                    </div>
                  </div>
                  <div className="w-px h-[61px] bg-white/20"></div>
                  <div className="w-[120px] h-12 bg-white/20 rounded"></div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-8 flex-1">
                <div className="flex items-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.07185 0.612343C9.4156 -0.204115 10.5864 -0.204114 10.9301 0.612346L12.9589 5.43123C13.1039 5.77543 13.4315 6.01061 13.8076 6.0404L19.0736 6.45748C19.9659 6.52814 20.3276 7.62813 19.6479 8.2034L15.6358 11.5987C15.3492 11.8412 15.224 12.2218 15.3115 12.5843L16.5373 17.661C16.745 18.5211 15.7979 19.201 15.034 18.7401L10.5255 16.0196C10.2035 15.8252 9.79848 15.8252 9.47645 16.0196L4.96797 18.7401C4.20409 19.201 3.25693 18.5211 3.46461 17.661L4.6904 12.5843C4.77795 12.2218 4.6528 11.8412 4.36623 11.5987L0.354039 8.2034C-0.325741 7.62813 0.0360444 6.52814 0.928268 6.45748L6.19433 6.0404C6.57048 6.01061 6.89813 5.77543 7.04304 5.43123L9.07185 0.612343Z" fill="white"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="self-stretch text-white font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                  "Their expertise in customer experience is unparalleled!"
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gray-300"></div>
                  <div className="flex flex-col items-start">
                    <div className="text-white font-montserrat text-base font-semibold leading-[150%]">
                      Jane Smith
                    </div>
                    <div className="text-white font-montserrat text-base font-normal leading-[150%]">
                      Director, Client Solutions
                    </div>
                  </div>
                  <div className="w-px h-[61px] bg-white/20"></div>
                  <div className="w-[120px] h-12 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Table of Contents */}
      <section className="flex px-16 py-28 flex-col items-center gap-20 self-stretch bg-white">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex justify-between items-start self-stretch">
            <div className="flex max-w-[768px] flex-col items-start flex-1">
              <div className="flex pb-4 flex-col items-start self-stretch">
                <h2 className="self-stretch text-[#0C0801] font-alata text-[52px] font-normal leading-[120%] tracking-[-0.52px]">
                  Enhancing Customer
                </h2>
              </div>
              <div className="flex pb-4 flex-col items-start self-stretch">
                <p className="self-stretch text-[#0C0801] font-montserrat text-base font-bold leading-[150%]">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                </p>
              </div>
              <div className="flex pb-4 flex-col items-start self-stretch">
                <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                </p>
              </div>
              <div className="flex py-6 flex-col items-start self-stretch">
                <h3 className="self-stretch text-[#0C0801] font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px]">
                  Strategic Solutions
                </h3>
              </div>
              <div className="flex pb-4 flex-col items-start self-stretch">
                <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                </p>
              </div>
              <div className="flex pb-4 flex-col items-start self-stretch">
                <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
                </p>
              </div>
              <div className="flex py-6 flex-col items-start self-stretch">
                <h4 className="self-stretch text-[#0C0801] font-alata text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                  Results That
                </h4>
              </div>
              <div className="flex pb-4 flex-col items-start self-stretch">
                <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                </p>
              </div>
              <div className="flex py-12 flex-col items-start gap-2 self-stretch">
                <img 
                  className="h-[480px] self-stretch aspect-[8/5] rounded-2xl object-cover" 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a6b9013370bafde07b022fb99154a15f97c273e0?width=1536" 
                  alt="Results illustration" 
                />
                <div className="flex items-start gap-2 self-stretch">
                  <div className="w-0.5 self-stretch bg-[rgba(12,8,1,0.15)]"></div>
                  <p className="flex-1 text-[#0C0801] font-montserrat text-sm font-normal leading-[150%]">
                    Image caption goes here
                  </p>
                </div>
              </div>
              <div className="flex py-5 flex-col items-start self-stretch">
                <h5 className="self-stretch text-[#0C0801] font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px]">
                  Continuous Improvement
                </h5>
              </div>
              <div className="flex pb-4 flex-col items-start self-stretch">
                <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                </p>
              </div>
              <div className="flex py-9 items-start self-stretch">
                <div className="flex pr-5 items-start gap-5 flex-1 bg-transparent">
                  <div className="w-0.5 self-stretch bg-[rgba(12,8,1,0.15)]"></div>
                  <blockquote className="flex-1 text-[#0C0801] font-inter text-xl font-normal italic leading-7">
                    "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
                  </blockquote>
                </div>
              </div>
              <div className="flex py-5 flex-col items-start self-stretch">
                <h6 className="self-stretch text-[#0C0801] font-alata text-[22px] font-normal leading-[140%] tracking-[-0.22px]">
                  Client Testimonial
                </h6>
              </div>
              <div className="flex pb-4 flex-col items-start self-stretch">
                <p className="self-stretch text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                </p>
              </div>
            </div>
            <div className="flex w-80 flex-col items-start gap-6">
              <h3 className="text-[#0C0801] font-alata text-[28px] font-normal leading-[140%] tracking-[-0.28px]">
                Table of contents
              </h3>
              <div className="flex flex-col items-start self-stretch">
                <div className="flex py-3 px-4 items-start gap-2.5 self-stretch border border-[rgba(12,8,1,0.15)] bg-white">
                  <div className="flex-1 text-[#0C0801] font-montserrat text-lg font-bold leading-[150%]">
                    Heading 2
                  </div>
                </div>
                <div className="flex py-3 px-8 items-start gap-2 self-stretch">
                  <div className="flex-1 text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                    Heading 3
                  </div>
                </div>
                <div className="flex py-3 px-12 items-start gap-2 self-stretch">
                  <div className="flex-1 text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                    Heading 4
                  </div>
                </div>
                <div className="flex py-3 px-16 items-start gap-2 self-stretch">
                  <div className="flex-1 text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                    Heading 5
                  </div>
                </div>
                <div className="flex py-3 px-20 items-start gap-2 self-stretch">
                  <div className="flex-1 text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                    Heading 6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex px-16 py-28 flex-col items-center gap-20 self-stretch bg-white">
        <div className="flex max-w-[1280px] flex-col items-start gap-20 self-stretch">
          <div className="flex items-center gap-8 self-stretch">
            <div className="flex flex-col items-start gap-6 flex-1">
              <h2 className="self-stretch text-[#0C0801] font-alata text-[44px] font-normal leading-[120%] tracking-[-0.44px]">
                Transform Your Customer Experience Today
              </h2>
              <p className="self-stretch text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                Unlock the potential of your customer interactions.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Button size="default" className="bg-[#3B82F6] text-white border-[#3B82F6]">
                Contact
              </Button>
              <Button variant="outline" size="default">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
