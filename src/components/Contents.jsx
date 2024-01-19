import React, { useEffect, useState } from "react";
import axios from "axios";
import useCategory from "../context/Category";
import { Link } from "react-router-dom";

const Contents = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useCategory();

  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9252738d55da4b0fbb83499ac7299865`
      );

      setData(res.data.articles);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [category]);

  console.log(data);

  return (
    <div className=" min-h-[90.5vh] h-auto w-[84%] dark:bg-[#171717] m-auto p-5 relative lg:static">
      {loading ? (
        <div class=" p-4 max-w-sm w-full">
          <div class="space-y-3">
            <div class="h-4 bg-slate-700 rounded-full"></div>
          </div>
        </div>
      ) : (
        <h1 className=" text-4xl font-medium dark:text-white">{category}</h1>
      )}
      {loading ? (
        <div className="w-full min-h-[100%] h-auto grid grid-cols-1 lg:grid-cols-2 mt-10 gap-3">
          <div class=" border rounded-md p-2  w-full">
            <div class="animate-pulse flex space-x-2">
              <div class="rounded-md bg-slate-700 h-56 w-56"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div class=" border rounded-md p-2  w-full">
            <div class="animate-pulse flex space-x-2">
              <div class="rounded-md bg-slate-700 h-56 w-56"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div class=" border rounded-md p-2  w-full">
            <div class="animate-pulse flex space-x-2">
              <div class="rounded-md bg-slate-700 h-56 w-56"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div class=" border rounded-md p-2  w-full">
            <div class="animate-pulse flex space-x-2">
              <div class="rounded-md bg-slate-700 h-56 w-56"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-[100%] h-auto grid grid-cols-1 lg:grid-cols-2 mt-10 gap-3">
          {data.map((ele, ind) => (
            <div
              className=" min-h-[250px] h-[auto] border-2 border-black flex p-2 dark:border-2 dark:text-white dark:border-white rounded-md"
              key={ind}
            >
              <img
                src={
                  ele.urlToImage === null
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                    : ele.urlToImage
                }
                alt=""
                className="h-full w-[50%]"
              />

              <div className=" ml-2">
                <p className=" text-sm font-bold">
                  {ele.title.substr(0, 40)}...
                </p>
                <p className="text-[10px] mt-1">
                  <span className=" text-[12px] font-bold ">Short by:- </span>
                  {ele.author} / {ele.publishedAt}
                </p>
                <p className=" mt-4 text-[12px]"> {ele.content}</p>

                <p className=" text-red-400 text-sm hover:underline mt-3">
                  <Link target="_blank" to={ele.url}>
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contents;
