import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Header Section */}
      <section className="bg-white py-28 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="text-gray-900 text-base font-semibold" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Tagline
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight tracking-tight mb-6" style={{ fontFamily: 'Alata, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Contact us
            </h1>
            <p className="text-lg text-gray-900 leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Email */}
            <div className="flex flex-col space-y-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.10742 8.18945H40.8926C41.6776 8.18945 42.3526 8.47154 42.9404 9.05957V9.06055C43.5285 9.64841 43.8115 10.3233 43.8115 11.1084V36.8926C43.8115 37.5762 43.5954 38.1763 43.1475 38.708L42.9414 38.9316C42.3537 39.5177 41.6783 39.7998 40.8926 39.7998H7.10742C6.3258 39.7997 5.65385 39.5184 5.06836 38.9326C4.4825 38.347 4.20117 37.6744 4.20117 36.8926V11.1084C4.20117 10.3228 4.48251 9.64726 5.06836 9.05957H5.06934C5.65497 8.47166 6.32636 8.18951 7.10742 8.18945ZM6.60742 11.2139V37.3926H41.3926V13.2051L40.6182 13.7158L24.6699 24.2148C24.5334 24.2867 24.4092 24.3445 24.2969 24.3887C24.2299 24.415 24.1343 24.4355 24 24.4355C23.8657 24.4355 23.7701 24.415 23.7031 24.3887C23.5897 24.3441 23.4643 24.2858 23.3262 24.2129L7.60742 13.8633V11.8691L23.7266 22.4258L24 22.6055L24.2734 22.4268L40.9658 11.5264L42.373 10.6084H5.68164L6.60742 11.2139Z" fill="#0C0801" stroke="#0C0801"/>
              </svg>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-normal text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Alata, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Email
                  </h3>
                  <p className="text-base text-gray-900 leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
                  </p>
                </div>
                <a href="mailto:email@example.com" className="text-base text-gray-900 underline leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  email@example.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-6">
              <svg width="48" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.9043 6.18945H15.9043C16.3892 6.18948 16.769 6.34058 17.0781 6.63184C17.4045 6.93905 17.644 7.35134 17.7822 7.89355V7.89453L19.125 13.9697C19.1997 14.4878 19.1859 14.9279 19.0977 15.2988C19.0129 15.6553 18.8396 15.9572 18.5713 16.2129L18.916 16.5752L18.5703 16.2129L18.5645 16.2188L13.5283 21.1855L13.249 21.4609L13.4492 21.7979C14.2932 23.2162 15.1892 24.543 16.1367 25.7783C17.0835 27.0127 18.1352 28.1871 19.29 29.3018V29.3027C20.5078 30.5621 21.7806 31.7031 23.1074 32.7246C24.4361 33.7476 25.8238 34.6418 27.2695 35.4072L27.5996 35.582L27.8613 35.3145L32.6709 30.3789L32.6807 30.3691C32.9733 30.0514 33.2932 29.8329 33.6416 29.7021L33.792 29.6514C34.218 29.525 34.6435 29.5038 35.0752 29.5869L40.749 30.8428C41.218 30.9723 41.5945 31.1919 41.8916 31.499L42.0137 31.6367C42.3231 32.0104 42.4775 32.438 42.4775 32.9404V39.7627C42.4775 40.3619 42.2803 40.835 41.8926 41.2188C41.502 41.6053 41.0291 41.7998 40.4404 41.7998C36.6076 41.7998 32.6954 40.8787 28.7002 39.0225C24.7058 37.1667 20.9961 34.5293 17.5723 31.1055C14.1488 27.682 11.5101 23.9711 9.65039 19.9727C7.79 15.9732 6.86719 12.0629 6.86719 8.23828C6.86722 7.71421 7.01666 7.28361 7.31348 6.92383L7.4502 6.77441C7.83692 6.38557 8.31013 6.18945 8.9043 6.18945ZM9.29785 9.12988C9.35813 10.519 9.57663 11.9829 9.9502 13.5195C10.3253 15.0623 10.9152 16.7744 11.7158 18.6533L12.0059 19.332L12.5283 18.8115L16.5664 14.7949L16.7598 14.6025L16.7031 14.3359L15.5654 9.00391L15.4805 8.6084H9.27539L9.29785 9.12988ZM40.0586 33.1621L39.6602 33.0791L34.6895 32.0508L34.417 31.9951L34.2256 32.1953L30.2998 36.3096L29.8184 36.8145L30.4512 37.1084C31.8095 37.7403 33.2854 38.2554 34.877 38.6543C36.4698 39.0534 38.0221 39.2917 39.5332 39.3682L40.0586 39.3945V33.1621Z" fill="#0C0801" stroke="#0C0801"/>
              </svg>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-normal text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Alata, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Phone
                  </h3>
                  <p className="text-base text-gray-900 leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
                  </p>
                </div>
                <a href="tel:+15550000000" className="text-base text-gray-900 underline leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  +1 (555) 000-0000
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex flex-col space-y-6">
              <svg width="48" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.334 4.18945C28.5128 4.18945 32.1892 5.64887 35.3828 8.58691C38.5477 11.4983 40.1455 15.4056 40.1455 20.3643C40.1455 22.4108 39.694 24.4502 38.7832 26.4854C37.8611 28.5461 36.7039 30.5192 35.3125 32.4033C33.9152 34.2953 32.3971 36.0612 30.7578 37.7012C29.1063 39.3537 27.5642 40.8171 26.1328 42.0918L26.1221 42.1025C25.8864 42.3254 25.614 42.4869 25.2998 42.5889C24.9611 42.6987 24.634 42.751 24.3184 42.751C24.003 42.7509 23.6831 42.6985 23.3564 42.5898C23.0533 42.489 22.791 42.3288 22.5645 42.1074L22.5557 42.0996L22.5459 42.0908C21.107 40.8165 19.5623 39.3533 17.9111 37.7012C16.2717 36.0611 14.7528 34.2955 13.3555 32.4033C11.9642 30.5194 10.8097 28.5468 9.8916 26.4863C8.98455 24.4509 8.53516 22.4113 8.53516 20.3643C8.5352 15.4054 10.1309 11.4983 13.292 8.58691C16.4815 5.64909 20.1552 4.18949 24.334 4.18945ZM24.334 6.6084C20.5913 6.6084 17.4106 7.89501 14.8242 10.4668C12.2294 13.047 10.9414 16.3608 10.9414 20.3643C10.9414 23.0659 12.0731 26.0472 14.2529 29.2939C16.4333 32.5414 19.6847 36.17 23.9932 40.1777L24.3301 40.4902L24.6699 40.1816C29.0794 36.1813 32.3609 32.5527 34.4941 29.2959V29.2949C36.6232 26.0442 37.7266 23.0625 37.7266 20.3643C37.7265 16.3608 36.4386 13.047 33.8438 10.4668C31.2568 7.89521 28.0765 6.60847 24.334 6.6084ZM24.3301 16.9053C25.194 16.9054 25.9154 17.2032 26.5234 17.8086C27.1307 18.4132 27.4297 19.1326 27.4297 19.9961C27.4297 20.8601 27.1319 21.5799 26.5273 22.1836C25.923 22.7869 25.203 23.0839 24.3389 23.084C23.5819 23.084 22.9357 22.8575 22.3818 22.3984L22.1504 22.1875C21.5477 21.5871 21.251 20.8692 21.251 20.0049C21.251 19.2479 21.4777 18.6003 21.9375 18.043L22.1484 17.8096C22.749 17.2033 23.4668 16.9053 24.3301 16.9053Z" fill="#0C0801" stroke="#0C0801"/>
              </svg>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-normal text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Alata, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Office
                  </h3>
                  <p className="text-base text-gray-900 leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
                  </p>
                </div>
                <span className="text-base text-gray-900 underline leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  123 Sample St, Sydney NSW 2000 AU
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-white py-28 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-900 text-base font-semibold" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Connect
                  </span>
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'Alata, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-900 leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    We're here to assist you with your inquiries.
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.05273 5.74219V18.9463H20.9453V6.13867L20.1699 6.64844L12.2139 11.8867C12.1535 11.9184 12.1011 11.944 12.0557 11.9619C12.0525 11.9629 12.0357 11.9678 11.999 11.9678C11.9617 11.9678 11.9451 11.9628 11.9424 11.9619C11.8967 11.9439 11.8439 11.9186 11.7832 11.8867L4.05273 6.7959V6.39648L11.7256 11.4219L11.999 11.6016L12.2725 11.4229L20.6191 5.97266L21.6299 5.31152C21.6455 5.38933 21.6543 5.46973 21.6543 5.55371V18.4463C21.6543 18.7675 21.542 19.041 21.293 19.2891C21.0441 19.5371 20.7693 19.6494 20.4453 19.6494H3.55273C3.23102 19.6494 2.95784 19.5371 2.70996 19.2891L2.62305 19.1953C2.43538 18.9725 2.34961 18.7279 2.34961 18.4463V5.55371C2.34963 5.46519 2.35868 5.38047 2.37598 5.29883L3.05273 5.74219ZM3.55273 4.34473H20.4453C20.7687 4.34473 21.043 4.4579 21.292 4.70703H21.293C21.4026 4.81669 21.4842 4.93216 21.543 5.05371H2.45996C2.51864 4.93172 2.60041 4.81595 2.70996 4.70605H2.71094C2.95891 4.45718 3.23166 4.34476 3.55273 4.34473Z" fill="#0C0801" stroke="#0C0801"/>
                  </svg>
                  <a href="mailto:info@tecnext.com" className="text-base text-gray-900 underline" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    info@tecnext.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.11816 3.34473H7.61816C7.8019 3.34474 7.92952 3.39945 8.03418 3.49805C8.12768 3.58614 8.20619 3.70059 8.26465 3.85156L8.31641 4.01465L8.98145 7.02832C9.01411 7.26011 9.00659 7.44511 8.97168 7.5918C8.94053 7.72276 8.87875 7.83104 8.7793 7.92578L8.77246 7.93164L6.25488 10.415L5.97559 10.6904L6.17578 11.0264C6.60252 11.7435 7.05599 12.416 7.53613 13.042C8.01895 13.6715 8.55514 14.2696 9.14355 14.8369C9.75693 15.4701 10.3981 16.0453 11.0674 16.5605C11.7425 17.0804 12.448 17.5353 13.1836 17.9248L13.5146 18.0996L13.7754 17.832L16.1807 15.3643L16.1904 15.3535C16.33 15.2021 16.4766 15.111 16.6328 15.0645C16.7638 15.0256 16.8936 15.012 17.0244 15.0215L17.1562 15.0391L19.9766 15.6631C20.1423 15.7092 20.2741 15.7806 20.3809 15.875L20.4805 15.9775C20.5973 16.1186 20.6543 16.2764 20.6543 16.4707V19.8809C20.6543 20.1178 20.5801 20.2895 20.4365 20.4316C20.2901 20.5766 20.1173 20.6494 19.8857 20.6494C18.0106 20.6494 16.0903 20.1991 14.1211 19.2842C12.153 18.3698 10.3221 17.0691 8.62891 15.376C7.04184 13.7889 5.79881 12.0798 4.89453 10.249L4.71777 9.88086C3.80074 7.90938 3.34961 5.99008 3.34961 4.11914C3.34962 3.94128 3.39088 3.79881 3.47266 3.67773L3.56836 3.56348C3.71241 3.41863 3.88416 3.34473 4.11816 3.34473ZM4.06543 4.5752C4.09636 5.28818 4.20838 6.0365 4.39844 6.81836C4.59001 7.60639 4.88972 8.47618 5.29395 9.4248L5.58301 10.1035L6.10645 9.58301L8.12598 7.5752L8.31934 7.38281L8.26172 7.11621L7.69336 4.44922L7.6084 4.05371H4.04297L4.06543 4.5752ZM19.9453 16.377L19.5469 16.2949L17.0615 15.7803L16.79 15.7246L16.5977 15.9248L14.6348 17.9824L14.1533 18.4863L14.7861 18.7812C15.481 19.1045 16.2344 19.3664 17.0439 19.5693C17.8547 19.7725 18.6468 19.8945 19.4199 19.9336L19.9453 19.96V16.377Z" fill="#0C0801" stroke="#0C0801"/>
                  </svg>
                  <a href="tel:+15551234567" className="text-base text-gray-900 underline" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    +1 (555) 123-4567
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.999 2.34473C14.0234 2.34473 15.802 3.04933 17.3545 4.47754C18.878 5.87913 19.6543 7.7626 19.6543 10.1826C19.6542 11.1679 19.4373 12.1526 18.9951 13.1406C18.5416 14.154 17.9725 15.1246 17.2871 16.0527C16.5957 16.9889 15.845 17.8627 15.0342 18.6738C14.2111 19.4974 13.4438 20.2259 12.7324 20.8594L12.7266 20.8643L12.7217 20.8691C12.6311 20.9548 12.5266 21.017 12.4043 21.0566C12.2578 21.1041 12.1206 21.126 11.9912 21.126C11.8619 21.126 11.7283 21.104 11.5889 21.0576C11.4732 21.0191 11.375 20.959 11.2891 20.875L11.2803 20.8662L11.2705 20.8584C10.5556 20.2252 9.78656 19.497 8.96387 18.6738C8.15312 17.8627 7.4023 16.9889 6.71094 16.0527C6.02568 15.1248 5.45726 14.1547 5.00586 13.1416C4.56549 12.1534 4.34967 11.1682 4.34961 10.1826C4.34961 7.76231 5.12573 5.8791 6.64746 4.47754C8.19779 3.04953 9.97475 2.34475 11.999 2.34473ZM11.999 3.05371C10.0638 3.05371 8.40896 3.72261 7.06738 5.05664C5.7178 6.39887 5.05273 8.12233 5.05273 10.1826C5.05284 11.6021 5.64665 13.1413 6.75098 14.7861C7.85583 16.4317 9.49651 18.2606 11.6582 20.2715L11.9951 20.585L12.335 20.2764C14.5478 18.2689 16.2053 16.4381 17.2881 14.7852C18.3669 13.138 18.9452 11.5989 18.9453 10.1826C18.9453 8.12228 18.2803 6.39888 16.9307 5.05664V5.05566C15.5888 3.72177 13.9342 3.05375 11.999 3.05371ZM11.9971 8.70215C12.3633 8.7022 12.661 8.82522 12.918 9.08105C13.1741 9.33617 13.2969 9.63248 13.2969 9.99805C13.2969 10.3642 13.1739 10.6605 12.9189 10.915C12.6641 11.1694 12.3674 11.292 12.001 11.292C11.634 11.2919 11.3382 11.169 11.084 10.916C10.8305 10.6634 10.7071 10.3691 10.707 10.0029C10.707 9.68146 10.8013 9.41279 10.9951 9.17871L11.084 9.08105C11.3369 8.82567 11.6315 8.70215 11.9971 8.70215Z" fill="#0C0801" stroke="#0C0801"/>
                  </svg>
                  <span className="text-base text-gray-900" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    456 Innovation Ave, New York, NY 10001 US
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-base text-gray-900" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b border-gray-800/15 bg-transparent pb-2 text-base text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0"
                  style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-base text-gray-900" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b border-gray-800/15 bg-transparent pb-2 text-base text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0"
                  style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-base text-gray-900" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border-0 border-b border-gray-800/15 bg-transparent pb-2 text-base text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0 resize-none"
                  style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 pb-4">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border border-gray-800/15 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-900" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  I agree to the Terms
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="rounded-full bg-blue-600 border border-blue-600 px-3 py-1.5 text-base font-medium text-white hover:bg-blue-700 transition-colors"
                style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-28 px-4 md:px-16 bg-cover bg-center relative"
        style={{ 
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/2e14e6bd890a942f6acc09aef4b76994ab2bcff6?width=2880')"
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight" style={{ fontFamily: 'Alata, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Get Your Free Consultation
              </h2>
              <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Reach out today to discuss your project needs and explore how we can help you.
              </p>
            </div>
            <div className="max-w-lg space-y-4">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border-0 border-b border-white/20 bg-transparent pb-2 text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-0"
                  style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
                />
                <button
                  type="submit"
                  className="rounded-full bg-white border border-white px-3 py-1.5 text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                  style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
                >
                  Sign Up
                </button>
              </div>
              <p className="text-xs text-white" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
