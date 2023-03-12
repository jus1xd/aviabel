import React from "react";
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
  
  const dataProducts = useAppSelector((state) => state.product);

  const finderBrand = useAppSelector(
    (state) => state.finder.brand
  ).toLowerCase();
  const finderModel = useAppSelector(
    (state) => state.finder.model
  ).toLowerCase();

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
          <div className="flex justify-start flex-wrap">
            {dataProducts
              .filter((item) => {
                return finderBrand.length > 0
                  ? item.brand.toLowerCase().includes(finderBrand)
                  : true;
              })
              .filter((item) => {
                return finderModel.length > 0
                  ? item.model.toLowerCase().includes(finderModel)
                  : true;
              })
              .map((el) => {
                return (
                  <TicketCard
                    id={el.id}
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
