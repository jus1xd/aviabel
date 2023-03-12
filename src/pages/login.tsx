import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../components/container";
import { useAppDispatch } from "../hooks/hook";
import { login } from "../store/slices/userSlice";

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (email.length > 4 && password.length > 8) {
      dispatch(login({email, password}));
      navigate("/find");
    }
  };

  return (
    <div>
      <Container>
        <div className="flex mt-14 justify-center align-center my-auto">
          <div className="p-6 flex flex-col w-1/3 rounded-lg overflow-hidden border border-slate-300">
            <h1 className="f-bold mb-3 text-2xl text-center">
              Войти в аккаунт
            </h1>
            <input
              className="p-3 my-3 border rounded-lg border-slate-300 w-full outline-0 "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"text"}
            />
            <input
              className="p-3 my-3 border rounded-lg border-slate-300 w-full outline-0 "
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
            />
            <button onClick={() => handleAuth()} className="p-3 mt-3 rounded-lg bg-indigo-600 text-white w-full">
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
