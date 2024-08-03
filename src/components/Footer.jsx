import React from "react";

const Footer = () => {
  return (
    <div className=" bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-blue-600">&lt;Password</span>
        <span className="text-green-700">OP/&gt;</span>
      </div>

      <div className="flex justify-center items-center">
        <p>Created with</p>
        <lord-icon 
          src="https://cdn.lordicon.com/ulnswmkk.json"
          trigger="hover"
          colors="primary:#c71f16"
        ></lord-icon>
        <p className="text-xl text-bold">by ARPIT</p>
      </div>
    </div>
  );
};

export default Footer;
