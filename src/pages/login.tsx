import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/container";

const Login = () => {
  return (
    <div>
      <Container>
        <div className="flex mt-14 justify-center align-center my-auto">
          <div className="p-6 flex flex-col w-1/3 rounded-lg overflow-hidden border border-slate-300">
            <h1 className="f-bold mb-3 text-2xl text-center">
              Войти в аккаунт
            </h1>
            <input
              className="p-3 my-3 border border-slate-300 w-full outline-0 "
              placeholder="example@gmail.com"
              type={"mail"}
            />
            <input
              className="p-3 my-3 border border-slate-300 w-full outline-0 "
              placeholder="Пароль"
              type={"password"}
            />
            <button className="p-3 mt-3 bg-indigo-600 text-white w-full">
              Войти
            </button>
            <NavLink to={"/find"} className="text-sm mt-3 text-blue-500">
              Вернуться на главную
            </NavLink>
            <NavLink to={"/register"} className="text-sm mt-3 text-blue-500">
              <span className="text-black">Нет аккаунта?</span>  Зарегистрируйтесь
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
