import React, { useEffect, useState } from "react";

type TProps = {
  type: string;
  active: boolean;
  setActive: (value: boolean) => void;
};

const Toaster: React.FC<TProps> = ({ type, active, setActive }) => {

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 5000);
  }, [active]);

  return type === "error" ? (
    <div
      className={`bg-red-100 border border-red-400 z-100 text-red-700 px-4 py-3 rounded fixed right-5 transition-all duration-300 top-5 ${
        active ? "translate-x-0" : "right-[-500px]"
      }`}
      role="alert"
    >
      <div className="font-bold">Ошибка</div>
      <div className="block sm:inline">Что-то пошло не так</div>
      <div
        onClick={() => setActive(false)}
        className="absolute top-0 right-4 w-4 px-4 py-3"
      >
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </div>
    </div>
  ) : type === "success" ? (
    <div
      className={`bg-green-100 shadow-lg border border-green-400 z-100 text-green-700 px-4 py-3 rounded fixed right-5 transition-all duration-300 top-5 ${
        active ? "translate-x-0" : "right-[-500px]"
      }`}
      role="alert"
    >
      <div className="font-bold">Успех</div>
      <div className="block sm:inline">Ваши изменения сохранены</div>
      <div
        onClick={() => setActive(false)}
        className="absolute top-0 right-4 w-4 px-4 py-3"
      >
        <svg
          className="fill-current h-[20px] w-[20px] text-green-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </div>
    </div>
  ) : null;
};

export default Toaster;
