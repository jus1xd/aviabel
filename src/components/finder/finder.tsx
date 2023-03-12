import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hook";
import { useGetBrandByNameQuery } from "../../store/services/getBrands";
import {
  finderBrandValue,
  finderModelValue,
} from "../../store/slices/finderSlice";

const Finder = () => {
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [closeMenu, setCloseMenu] = useState<boolean>(false);

  const { data } = useGetBrandByNameQuery(brand);
  console.log();

  const dispatch = useAppDispatch();

  useEffect(() => {
    setCloseMenu(false);
    dispatch(finderBrandValue(brand));
  }, [brand, dispatch]);

  useEffect(() => {
    setCloseMenu(false);
    dispatch(finderModelValue(model));
  }, [model, dispatch]);

  const brandHandler = () => {
    setCloseMenu(true);
    // @ts-ignore
    setBrand(data?.suggestions[0].value.toLowerCase());
  };

  return (
    <div className="my-6">
      <div className="flex relative rounded-lg bg-white  border border-slate-300">
        <input
          className="p-4 w-1/6 border-r border-slate-300 outline-0 "
          placeholder="Марка"
          type={"text"}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        {!closeMenu &&
          /* @ts-ignore */
          data?.suggestions.length > 0 && (
            <div className="absolute bg-white top-[63px] z-50 w-[140px] rounded-md overflow-hidden min-h-[30px] drop-shadow-md">
              {
                /* @ts-ignore */
                <div
                  onClick={() => brandHandler()}
                  className="cursor-pointer px-3 py-2 bg-slate-200"
                  /* @ts-ignore */
                  key={data?.suggestions[0].value}
                >
                  {/* @ts-ignore */ 
                  data?.suggestions[0].value}
                </div>
              }
            </div>
          )}

        <input
          className="p-4  w-1/6 border-r border-slate-300 outline-0 "
          placeholder="Модель"
          type={"text"}
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          className="p-4  w-1/6 border-r border-slate-300 outline-0 "
          placeholder="Место получения"
          type={"text"}
        />
        <input
          className="p-4 w-1/7 border-r border-slate-300 outline-0 "
          placeholder="01/01/2021"
          type={"date"}
        />
        <input
          className="p-4 w-1/7 border-r border-slate-300 outline-0 "
          placeholder="05/01/2021"
          type={"date"}
        />
        <input
          className="p-4 w-1/6 outline-0 "
          placeholder="Тариф"
          type={"text"}
        />
        <div className="p-1 w-1/6">
          <button className="w-full py-3 px-1 rounded-lg bg-indigo-600 text-white ">
            Подобрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finder;
