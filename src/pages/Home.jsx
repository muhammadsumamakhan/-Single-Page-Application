import React from "react";

const Home = () => {
  const messages = ["Welcome", "Hello Home", "Enjoy Your Stay"];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
        {messages.map((message, index) => (
          <h1 key={index} className="text-center text-[50px] font-bold text-white shadow-lg mb-4">
            {message}
          </h1>
        ))}
      </div>
    </>
  );
};

export default Home;
