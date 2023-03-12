import React from "react";
import { useAppSelector } from "../../hooks/hook";
import Header from "../../components/header/header";
import { useParams } from "react-router";
import Container from "../../components/container";

const Product: React.FC = () => {
  const data = useAppSelector((state) => state.product);

  let productId = useParams();
  console.log(productId);

  return (
    <div>
      {data
        .filter((car) => car.id === parseInt(productId.id?.toString() || "0"))
        .map((car) => {
          return (
            <div className="">
              <Header />
              <div className="mt-7">
                <Container>
                  <div className="flex justify-between">
                    <div className="w-1/2">
                      <img className="w-full rounded-xl" src={car.img} alt="" />
                    </div>
                    <div className="w-1/2 p-7">
                      <div className="text-3xl mt-5  font-bold">
                        {car.brand} <span>{car.model}</span>
                      </div>
                      <div className="text-2xl mb-2  ">
                        {car.cost} руб. / сутки
                      </div>
                      <div className="text-red-500">
                        {car.crash && <span>Не на ходу</span>}
                      </div>
                      <div className="w-1/2 mt-5">
                        <button className="mt-3 w-full bg-indigo-600 rounded-md text-white p-3">
                          Забронировать
                        </button>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
