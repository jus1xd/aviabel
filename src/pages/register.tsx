import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../components/container";
import { useAppDispatch } from "../hooks/hook";
import { register } from "../store/slices/userSlice";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username.length > 0 && password.length > 0 && email.length > 0 && name.length > 0 && surname.length > 0) {
      dispatch(register({username, password, email, name, surname}));
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
              className="p-3 my-3 border border-slate-300 rounded-lg w-full outline-0 "
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"mail"}
            />
            <input
              className="p-3 my-3 border border-slate-300 rounded-lg w-full outline-0 "
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type={"text"}
            />
            <input
              className="p-3 my-3 border border-slate-300 rounded-lg w-full outline-0 "
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type={"text"}
            />
            <input
              className="p-3 my-3 border border-slate-300 rounded-lg w-full outline-0 "
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Фамилия"
              type={"text"}
            />
            <input
              className="p-3 my-3 border border-slate-300 rounded-lg w-full outline-0 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              type={"password"}
            />
            <button
              onClick={() => handleRegister()}
              className="p-3 mt-3 rounded-lg bg-indigo-600 text-white w-full"
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
