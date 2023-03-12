import React from "react";
import TicketCard from "../components/cards/ticketCard";
import Container from "../components/container";
import Header from "../components/header/header";
import { useAppSelector } from "../hooks/hook";

const Booking = () => {
  const dataProducts = useAppSelector((state) => state.product);

  return (
    <div>
      <Header />
      <div className="m-9">
        <Container>
          <h1 className="text-3xl mb-7 font-bold">Свободные автомобили</h1>
          <div className="flex justify-start flex-wrap">
            {dataProducts.map((el) => {
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

export default Booking;
