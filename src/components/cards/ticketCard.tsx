import React from "react";
import { NavLink } from "react-router-dom";

type TProps = {
  id: number;
  brand: string;
  model: string;
  cost: number;
  img: string;
};

const TicketCard: React.FC<TProps> = ({ id, brand, model, cost, img }) => {
  return (
    <div className="w-[272.5px] mr-[20px] mb-6 bg-slate-700 relative rounded-md overflow-hidden">
      <div className="">
        <img className="h-[200px] scale-110" src={img} alt="" />
      </div>
      <div className="">
        <div className="text-xl mt-5 ml-3 font-bold text-white">
          {brand} <span>{model}</span>
        </div>
        <div className="text-lg mb-2 ml-3 text-white">{cost} руб. / сутки</div>
        <div className="">
          <NavLink to={`/product/${id}`}>
            <button className="mt-3 w-full bg-indigo-600 text-white p-3">
              Забронировать
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
