import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4 text-center mt-12  md:mx-auto md:mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-black dark:text-white">
            Contact
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-black text-3xl sm:text-5xl dark:text-white">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-black dark:text-white">
            We are here to answer any questions you may have.
          </p>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="pr-6">
              <p className="mt-3 mb-12 text-lg text-black dark:text-white">
                Whether you're curious about features, a free trial, or even press we're ready to answer any and all questions.
              </p>
              <ul className="mb-6">
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium text-blackdark:text-white">Our Address</h3>
                    <p className="text-black dark:text-white">XYZ ABC Road,Pune</p>
                    <p className="text-black dark:text-white">Maharastra,INDIA</p>
                  </div>
                </li>
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-black text-gray-50 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium text-black dark:text-white">Contact</h3>
                    <p className="text-black dark:text-white">Mobile: +91 1234567890</p>
                    <p className="text-black dark:text-white">Mail: xyz@gmail.com</p>
                  </div>
                </li>
                
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider sr-only">Name</label>
                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black" name="name" />
                  </div>
                  <div className="mx-0 mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider sr-only">Email</label>
                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black" name="email" />
                  </div>
                  <div className="mx-0 mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider sr-only">Message</label>
                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black"></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-black text-white px-6 py-3 font-xl rounded-md">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
