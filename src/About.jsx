import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#9538E2]">About Gadget Heaven</h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-[#9538E2]">Gadget Heaven</span> — your one-stop destination for the latest and greatest tech gadgets.
          Our mission is to connect people with innovation by offering top-quality devices at unbeatable prices.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-xl mb-3 text-[#9538E2]">💡 Our Mission</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To deliver the most innovative, reliable, and affordable gadgets that enhance everyday life — from smart devices to cutting-edge accessories.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-xl mb-3 text-[#9538E2]">🚀 Our Vision</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To be the most trusted and beloved gadget store in the digital world, inspiring innovation and convenience for every customer.
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          Thank you for choosing <span className="text-[#9538E2] font-semibold">Gadget Heaven</span> — where technology meets passion!
        </p>
      </div>
    </div>
  );
};

export default About;
