import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-center text-[50px] font-bold text-white shadow-lg mb-10">
        Contact Us
      </h1>
      <p className="text-lg text-white mb-4">We would love to hear from you!</p>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <input type="text" placeholder="Your Name" className="border rounded-lg w-full p-2 mb-4" />
        <input type="email" placeholder="Your Email" className="border rounded-lg w-full p-2 mb-4" />
        <textarea placeholder="Your Message" className="border rounded-lg w-full p-2 mb-4" rows="4"></textarea>
        <button className="bg-blue-500 text-white rounded-lg p-2 w-full">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
