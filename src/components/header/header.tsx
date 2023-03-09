import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../container";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              // plane icon svg
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
              className="h-8 w-auto"
            />
              <h1 className="text-2xl font-bold ml-2">Индекс Драйв</h1>
          </div>
          <div className="flex items-center">
            <NavLink to={'/login'} className="bg-indigo-600 text-white px-4 py-2 rounded-md mr-2">
              Войти
            </NavLink>
            <NavLink to={'/register'} className="bg-white text-indigo-600 px-4 py-2 rounded-md border border-indigo-600">
              Регистрация
            </NavLink>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
