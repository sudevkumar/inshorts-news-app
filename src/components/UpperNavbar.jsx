import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import useTheme from "../context/theme";
import ThemeBtn from "./ThemeBtn";

const UpperNavbar = ({ openSideBar, handleOpenSideBar }) => {
  const { themeMode } = useTheme();

  return (
    <>
      <div className=" w-full h-[71px] shadow shadow-[#888888] flex items-center dark:bg-[#171717] dark:text-white">
        <div className=" flex-[.48]">
          {!openSideBar ? (
            <GiHamburgerMenu
              size={23}
              className=" ml-3 cursor-pointer"
              onClick={handleOpenSideBar}
            />
          ) : (
            <RxCross2
              size={23}
              className=" ml-3 cursor-pointer"
              onClick={handleOpenSideBar}
            />
          )}
        </div>
        <div className=" flex-[.48] h-full">
          <img
            src={
              themeMode === "light"
                ? "https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                : "https://the-media-ant.mo.cloudinary.net/medias/58bfd10f272d430ee15e1ac8/1663309408318/Inshorts%20logo_logo.png?tx=w_350"
            }
            alt=""
            className="cursor-pointer h-[80%]"
          />
        </div>
        <ThemeBtn />
      </div>
    </>
  );
};

export default UpperNavbar;
