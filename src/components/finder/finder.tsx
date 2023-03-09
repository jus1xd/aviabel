import React from "react";
import Container from "../container";

const Finder = () => {
  return (
    <div className="my-6">
      <div className="flex rounded-lg bg-white overflow-hidden border border-slate-300">
        <input
          className="p-4 w-1/6 border-r border-slate-300 outline-0 "
          placeholder="Откуда"
          type={"text"}
        />
        <input
          className="p-4  w-1/6 border-r border-slate-300 outline-0 "
          placeholder="Куда"
          type={"text"}
        />
        <input
          className="p-4 w-1/6 border-r border-slate-300 outline-0 "
          placeholder="01/01/2021"
          type={"date"}
        />
        <input
          className="p-4 w-1/6 border-r border-slate-300 outline-0 "
          placeholder="05/01/2021"
          type={"date"}
        />
        <input
          className="p-4 w-1/6 outline-0 "
          placeholder="Кол-во пассажиров"
          max={9}
          maxLength={1}
          type={"number"}
        />
        <div className="p-2 w-1/6">
          <button className="w-full py-2 px-1 rounded-lg bg-indigo-600 text-white ">
            Найти билеты
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finder;
