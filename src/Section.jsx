import React from "react";
import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";

function Section() {
  return (
    <>
      <div className="relative top-[50px] mb-[50px]">
        <Routes>
          <Route path="/categories/:CategoriesItem" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}
export default Section;
