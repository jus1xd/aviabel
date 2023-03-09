import React, { useState } from "react";
import TicketCard from "../components/cards/ticketCard";
import Container from "../components/container";
import Finder from "../components/finder/finder";
import Header from "../components/header/header";
import { useAppSelector } from "../hooks/hook";

// type TProps = {
//   name: string;
//   cost: number;
//   img: any;
// };

const Find = () => {

  const finderBrand = useAppSelector((state) => state.finder.brand).toLowerCase();
  const finderModel = useAppSelector((state) => state.finder.model).toLowerCase();

  const data = [
    {
      id: 1,
      brand: "Audi",
      model: "RS6",
      cost: 516999,
      img: "https://avatars.mds.yandex.net/get-autoru-vos/2147042/d3e88d3dd5626ff396b617cf1e195e53/1200x900n",
    },
    {
      id: 2,
      brand: "BMW",
      model: "M5",
      cost: 516999,
      img: "https://avatars.mds.yandex.net/get-autoru-vos/1942044/40cb02d6d7e831303f0096d52feacd5e/1200x900n",
    },
    {
      id: 3,
      brand: "Mercedes",
      model: "S63",
      cost: 516999,
      img: "https://yastatic.net/naydex/autoru/F26T0Kr86/c1e881DEc/hwRMd85aXO4Axctmw3GSrKVUWQR6Y46ZijfXwCz_Nqcv4sf1BVLmvlqCnInwbh6wVzVaUWy55M_R8IXEkNhVfcdRLW6bW1HHfYDHAq44l_n4dCFdC3PyvWKaZ0DwU7Yn3ko7cUw7_8I_m5k4UFMXXNv924wNocHGFTXl0RRtTLgXYPj3LhbdaiiVwuqb-W4c0WmFgHoKLiUyYosAXINW09Yev2WYs5PzU1eFFHkLS0jH8Vu8hWnZzhnhVUUMcUjgC3T4",
    },
    {
      id: 4,
      brand: "ВАЗ",
      model: "21115",
      cost: 219999,
      img: "https://yastatic.net/naydex/autoru/F26T0Kr86/c1e881DEc/hwRMd85aXO4Axctmw3GSrKVUWQR6Y46ZijfXwCz_Nqcv4sf1BVLqmlaajJX8b06kVnQWUDi8rMvUoJHYoMRZdJtNBWaTQ3CCMNziU8d4l_n4dCFdC3PyvWKaZ0DwU7Yn3ko7cUw7_8I_m5k4UFMXXNv924wNocHGFTXl0RRtTLgXYPj3LhbdaiiVwuqb-W4c0WmFgHoKLiUyYosAXINW09Yev2WYs5PzU1eFFHkLS0jH8Vu8hWnZzhnhVUUMcUjgC3T4",
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-full bg-blue-500 py-[60px]">
        <Container>
          <h1 className="text-3xl mb-7 text-white font-bold">
            Подобрать автомобиль
          </h1>
          <Finder />
        </Container>
      </div>
      <div className="m-9">
        <Container>
          <h1 className="text-3xl mb-7 font-bold">Каталог</h1>
          <div className="flex justify-between">
            {data
              .filter((item) =>  { return finderBrand.length > 0 ? item.brand.toLowerCase().includes(finderBrand) : true})
              .filter((item) =>  { return finderModel.length > 0 ? item.model.toLowerCase().includes(finderModel) : true})
              .map((el) => {
                return (
                  <TicketCard
                    brand={el.brand}
                    model={el.model}
                    cost={el.cost}
                    img={el.img}
                    key={el.id}
                  />
                );
              })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Find;
