import React from "react";
import useTheme from "../context/theme";

const ThemeBtn = () => {
  const { darkTheme, lightTheme, themeMode } = useTheme();

  const handleThemeChange = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };
  return (
    <div className="" onClick={handleThemeChange}>
      {themeMode === "light" ? (
        <img
          src="https://downloadr2.apkmirror.com/wp-content/uploads/2019/10/5db102cb08750.png"
          alt=""
          className="h-10 cursor-pointer"
        />
      ) : (
        <img
          src="https://static-00.iconduck.com/assets.00/mode-light-icon-512x512-yuubs6qt.png"
          alt=""
          className="h-10 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeBtn;
