import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
function Categories() {
  let { CategoriesItem } = useParams();
  const [catData, setData] = useState([""]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((cat) => setData(cat));
  });

  let CategoryList = catData.filter(
    (items) => items.category == CategoriesItem
  );
  return (
    <>
      <div className="mb-[100px]">
        <h2 className="uppercase">{CategoriesItem}</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 px-7">
          {CategoryList.map((list) => (
            <div className="flex gap  w-full h-[150px] border  rounded-2xl shadow-xl  shadow-slate-300">
              <div className="w-[35%]">
                <img
                  src={list.image}
                  alt=""
                  className="h-full object-contain"
                />
              </div>
              <div className="w-[65%] px-3 py-2 relative">
                <div className="card-info">
                  <div className="text-lg font-bold">
                    {list.title.substring(0, 15)}..
                  </div>
                  <div className=" text-xs font">
                    {list.description.substring(0, 130)}....
                  </div>
                  <div className="flex justify-between absolute bottom-3 w-[90%] ">
                    <div className="text-red-600">${list.price}</div>
                    <div className="text-blue-400 flex items-center">
                      <FaStar />
                      {list.rating.rate}
                    </div>
                    <div className="text-slate-600">{list.rating.count}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Categories;
