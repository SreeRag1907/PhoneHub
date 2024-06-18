import React from "react";

const AboutPage = () => {
  // Array of dummy image URLs
  const dummyImages = [
    { id: 1, url: "https://via.placeholder.com/400x300.png", alt: "Smartphone 1" },
    { id: 2, url: "https://via.placeholder.com/400x300.png",alt: "Smartphone 1" },
    { id: 3, url: "https://via.placeholder.com/400x300.png",alt: "Smartphone 1" },
    // Add more images as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Smartphone Store</h1>
      <p className="text-lg leading-relaxed text-center mb-8">
        Welcome to our smartphone store! We specialize in offering the latest smartphone brands and models with free shipping.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyImages.map((image) => (
          <div key={image.id} className="rounded-lg overflow-hidden shadow-md">
            <img src={image.url} alt={image.alt} className="w-full h-80 object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          At Smartphone Store, we are dedicated to providing our customers with the latest and best smartphones, combined with exceptional customer service and a hassle-free shopping experience.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Wide selection of top smartphone brands</li>
          <li>Free shipping on all orders</li>
          <li>24/7 customer support</li>
          <li>Secure online shopping experience</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          Have questions? Reach out to our customer support team at <a href="mailto:support@smartphonestore.com" className="text-blue-500 hover:underline">support@smartphonestore.com</a> or call us at <span className="text-blue-500">+123456789</span>.
        </p>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg leading-relaxed">
          Explore our latest collection of smartphones and start shopping today!
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default AboutPage;