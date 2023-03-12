import React from "react";
import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="flex flex-col rounded-md bg-white border border-slate-300 w-1/5 h-max py-3 mr-10">
      <NavLink to={'/profile'} className="cursor-pointer px-4 py-2 transition hover:bg-slate-100">
        Профиль
      </NavLink>
      <NavLink
        to={"/billing"}
        className="transition hover:bg-slate-100 px-4 py-2"
      >
        Банковские карты
      </NavLink>
    </div>
  );
};

export default ProfileMenu;
