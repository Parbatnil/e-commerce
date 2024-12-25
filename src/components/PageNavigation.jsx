import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <div className="h-[6rem] bg-violet-100 flex justify-start items-center text-2xl pl-5">
      <NavLink to="/" className="text-blue-900">
        Home
      </NavLink>
      /{title}
    </div>
  );
};

export default PageNavigation;
