import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Container from "../components/container";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { setUser } from "../store/slices/userSlice";

const Register = () => {
  const [username, setUsername] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username.length > 0) {
      dispatch(setUser(username));
      navigate("/find")
    }
  };

  return (
    <div>
      <Container>
        <div className="flex mt-14 justify-center align-center my-auto">
          <div className="p-6 flex flex-col w-1/3 rounded-lg overflow-hidden border border-slate-300">
            <h1 className="f-bold mb-3 text-2xl text-center">
              Зарегистрироваться
            </h1>
            <input
              className="p-3 my-3 border border-slate-300 w-full outline-0 "
              placeholder="Почта"
              type={"mail"}
            />
            <input
              className="p-3 my-3 border border-slate-300 w-full outline-0 "
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type={"text"}
            />
            <input
              className="p-3 my-3 border border-slate-300 w-full outline-0 "
              placeholder="Имя"
              type={"text"}
            />
            <input
              className="p-3 my-3 border border-slate-300 w-full outline-0 "
              placeholder="Фамилия"
              type={"text"}
            />
            <input
              className="p-3 my-3 border border-slate-300 w-full outline-0 "
              placeholder="Пароль"
              type={"password"}
            />
            <button
              onClick={() => handleRegister()}
              className="p-3 mt-3 bg-indigo-600 text-white w-full"
            >
              Создать аккаунт
            </button>
            <NavLink to={"/find"} className="text-sm mt-3 text-blue-500">
              Вернуться на главную
            </NavLink>
            <NavLink to={"/login"} className="text-sm mt-3 text-blue-500">
              <span className="text-black">Уже есть аккаунт?</span> Войдите
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
