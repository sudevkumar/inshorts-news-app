import useCategory from "../context/Category";
import categories from "../data/category";

const SideBar = ({ openSideBar, setOpenSideBar }) => {
  const { category, setCategory } = useCategory();

  const handleCategogy = (cat) => {
    if (category === "" || category !== cat) {
      setCategory(cat);
      setOpenSideBar(!openSideBar);
    } else {
      setCategory("");
      setOpenSideBar(!openSideBar);
    }
  };

  return (
    <div
      className={` lg:static absolute z-10 w-[100%] lg:w-[16%] h-auto transition duration-300 bg-gray-200   ${
        openSideBar ? "block" : "hidden"
      } dark:bg-[#171717] flex flex-col gap-3 p-3`}
    >
      {categories.map((cat, ind) => (
        <div
          className={`text-gray-600 text-2xl p-2 hover:bg-gray-300 rounded-md pl-2 cursor-pointer dark:text-white ${
            category === cat ? "bg-red-300 dark:text-white" : ""
          }`}
          onClick={() => handleCategogy(cat)}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
