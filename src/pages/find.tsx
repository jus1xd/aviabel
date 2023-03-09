import React from "react";
import Container from "../components/container";
import Finder from "../components/finder/finder";
import Header from "../components/header/header";

const Find = () => {
  return (
    <div>
      <Header />
      <div className="w-full bg-blue-500 py-[60px]">
        <Container>
          <h1 className="text-3xl mb-7 text-white font-bold">Подобрать билеты</h1>
          <Finder />
        </Container>
      </div>
      <div className="">
        <Container>
          
          </Container>
      </div>
    </div>
  );
};

export default Find;
