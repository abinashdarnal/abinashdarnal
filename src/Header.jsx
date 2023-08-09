import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import "./index.css";
// import Categories from "./components/Categories";

function Header() {
  const [catData, setData] = useState([""]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((resolve) => resolve.json())
      .then((categories) => setData(categories));
  });

  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const [cat, setcat] = useState(false);
  const toggleCat = () => {
    setcat(!cat);
  };

  const [search, setSearch] = useState(" ");
  const searchContent = (e) => {
    setSearch(e.target.value);
  };

  const searchButton = () => {
    setSearch(search);
    console.log(search);
  };

  return (
    <div className="fixed top-0 flex justify-between items-center w-full h-[50px] bg-red-700 px-4  z-[99]">
      <div className="text-2xl ">Mediumish</div>
      <div className="md:hidden  block">
        {nav ? (
          <>
            <FaTimes
              className="absolute top-3 right-3  z-[99] sm:flex cursor-pointer"
              onClick={toggleNav}
            />
            <div className="absolute left-0 top-[50px] shadow-lg p-3 flex flex-col gap-3 w-full bg-white">
              <ul className="flex flex-col ">
                <li className=" py-3" onClick={toggleNav}>
                  <Link to="/">
                    <div>Home</div>
                  </Link>
                </li>
                <li className=" py-3" onClick={toggleNav}>
                  <Link to="/about us">
                    <div>About Us</div>
                  </Link>
                </li>
                <li className=" py-3">
                  <div
                    className="flex items-center relative cursor-pointer"
                    onClick={toggleCat}
                  >
                    <div className="pr-3">Categories</div>

                    <BiSolidDownArrow className="" />
                  </div>
                  {cat ? (
                    <ul className="flex flex-col   ">
                      {catData.map((catItems) => (
                        <li
                          className=" p-2  uppercase text-sm "
                          onClick={toggleNav}
                        >
                          <Link to={`/Categories/${catItems}`}>
                            <div>{catItems}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
              <div className="flex rounded-2xl bg-gray-400 p-[3px]">
                <input
                  type="search"
                  name="search"
                  id="search"
                  onChange={searchContent}
                  placeholder="Search..."
                  className="w-full rounded-l-2xl pl-3 px-2 focus:outline-none"
                />
                <button className="px-2" onClick={searchButton}>
                  <FaMagnifyingGlass className="" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <AiOutlineBars
            className="absolute top-3 right-3 cursor-pointer"
            onClick={toggleNav}
          />
        )}
      </div>
      <div className="md:block hidden ">
        <div className=" flex gap-4">
          <ul className="flex gap-4">
            <li>
              <Link to="/">
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link to="/about us">
                <div>About Us</div>
              </Link>
            </li>

            <li>
              <div
                className="flex items-center relative cursor-pointer"
                onClick={toggleCat}
              >
                <div className="pr-3 ">Categories</div>
                <BiSolidDownArrow className="" />
              </div>
              {cat ? (
                <ul className="flex flex-col gap-2 absolute top-[50px] shadow-lg rounded-xl bg-white overflow-hidden ">
                  {catData.map((catItems) => (
                    <li
                      className="hover:bg-slate-500 py-2 px-2 uppercase text-sm"
                      onClick={toggleCat}
                    >
                      <Link to={`/Categories/${catItems}`}>
                        <div>{catItems}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </li>
          </ul>
          <div className=" rounded-2xl bg-gray-200 p-[3px] ">
            <input
              type="search"
              name="search"
              id="search"
              onChange={searchContent}
              placeholder="Search..."
              className="rounded-l-2xl pl-3 px-2 focus:outline-none"
            />
            <button className="px-2 " onClick={searchButton}>
              <FaMagnifyingGlass className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
