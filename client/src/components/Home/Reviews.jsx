import React from "react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Jason Keys",
      image:
        "https://demo.tailgrids.com/templates/startup/build/src/assets/images/testimonials/testimonial-05/image-01.jpg",
      review:
        "I've been buying phones from this store for years. Their customer service is always top-notch, and the prices are unbeatable. I wouldn't shop anywhere else!",
    },
    {
      name: "Anee Doe",
      image:
        "https://demo.tailgrids.com/templates/startup/build/src/assets/images/testimonials/testimonial-05/image-02.jpg",
      review:
        "The selection of phones is incredible! I always find what I'm looking for, and the staff is incredibly knowledgeable and helpful. Highly recommend this store! Wisit Once",
    },
    {
      name: "John Doe",
      image:
        "https://demo.tailgrids.com/templates/startup/build/src/assets/images/testimonials/testimonial-05/image-04.jpg",
      review:
        "This store is my go-to for all things phones. The detailed product descriptions and customer reviews make it easy to make informed decisions. Great shopping experience every time!",
    },
    {
      name: "Alexa Jhon",
      image:
        "https://demo.tailgrids.com/templates/startup/build/src/assets/images/testimonials/testimonial-05/image-03.jpg",
      review:
        "Shopping here is always a pleasure. The site is user-friendly, the delivery is fast, and the after-sales support is excellent. I always recommend this store to my friends and family.",
    },
  ];

  return (
    <section className="pt-20 pb-7 dark:bg-dark lg:pt-[120px] lg:pb-14">
      <div className="container mx-auto max-lg:mx-2">
        <div className="text-center mb-[60px] max-w-[510px] lg:mb-[70px] mx-auto">
          <h1 className="text-5xl font-bold font-mono text-black dark:text-white">Reviews</h1>
          <h2 className="text-xl leading-[1.2] mb-2 font-semibold sm:text-4xl md:text-[40px] text-black dark:text-white">
            What our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-black rounded-lg shadow-lg translate-y-2 translate-x-2 dark:bg-opacity-60"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg border-2 border-black p-5">
                <div className="flex items-center mb-10">
                  <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-md md:h-[60px] md:max-w-[60px] lg:h-20 lg:max-w-[80px]">
                    <img
                      className="w-full"
                      alt={`${testimonial.name} image`}
                      src={testimonial.image}
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-black dark:text-white">{testimonial.name}</h5>
                  </div>
                </div>
                <p className="text-base text-body-color dark:text-body-light bg-white dark:bg-transparent p-2">
                  "{testimonial.review}"
                </p>
                <span className="absolute top-0 right-0">
                  <svg
                    height="102"
                    width="104"
                    fill="none"
                    viewBox="0 0 104 102"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                      opacity="0.6"
                      stroke="#3758F9"
                    />
                    <path
                      d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                      opacity="0.6"
                      stroke="#13C296"
                    />
                    <path
                      d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                      opacity="0.6"
                      stroke="#F98B69"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
