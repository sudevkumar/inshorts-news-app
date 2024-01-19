import { useEffect, useState } from "react";
import Contents from "./components/Contents";
import SideBar from "./components/SideBar";
import UpperNavbar from "./components/UpperNavbar";
import { CategoryProvider } from "./context/Category";

import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [openSideBar, setOpenSideBar] = useState(false);
  const [category, setCategory] = useState("business");

  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <CategoryProvider value={{ category, setCategory }}>
        <UpperNavbar
          openSideBar={openSideBar}
          handleOpenSideBar={handleOpenSideBar}
        />
        <div className=" w-full flex dark:bg-[#171717]">
          <SideBar
            openSideBar={openSideBar}
            handleOpenSideBar={handleOpenSideBar}
            setOpenSideBar={setOpenSideBar}
          />
          <Contents />
        </div>
      </CategoryProvider>
    </ThemeProvider>
  );
}

export default App;
