import React, {useEffect,useState} from "react";
import { useAppDispatch } from "../../hooks/hook";
import { finderBrandValue, finderModelValue } from "../../store/slices/finderSlice";

const Finder = () => {

  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(finderBrandValue(brand));
  }, [brand, dispatch]);

  useEffect(() => {
    dispatch(finderModelValue(model));
  }, [model, dispatch]);

  return (
    <div className="my-6">
      <div className="flex rounded-lg bg-white overflow-hidden border border-slate-300">
        <input
          className="p-4 w-1/6 border-r border-slate-300 outline-0 "
          placeholder="Марка"
          type={"text"}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
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
        <div className="p-2 w-1/6">
          <button className="w-full py-2 px-1 rounded-lg bg-indigo-600 text-white ">
            Подобрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finder;
