import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const UpperNavbar = () => {
  return (
    <div className=" w-full h-[71px] shadow shadow-[#888888] flex items-center">
      <div className=" flex-[.48]">
        <GiHamburgerMenu size={23} className=" ml-3 cursor-pointer" />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt=""
        className="cursor-pointer h-[80%]"
      />
    </div>
  );
};

export default UpperNavbar;
