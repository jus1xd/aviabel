import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { logout } from "../../store/slices/userSlice";
import Container from "../container";

const Header = () => {
  const username = useAppSelector((state) => state.user.username);
  const isAuth = useAppSelector((state) => state.user.isAuth);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-4 h-[70px]">
          <NavLink to={"/"}>
            <div className="flex items-center">
              <img
                // plane icon svg
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
                className="h-8 w-auto"
              />
              <h1 className="text-2xl font-bold ml-2">Индекс Драйв</h1>
            </div>
          </NavLink>
          <nav className="flex">
            <NavLink to={'/promo'} className="text-md font-bold cursor-pointer">Акции</NavLink>
            <NavLink to={'/booking'} className="text-md font-bold cursor-pointer mx-7">Бронирование</NavLink>
            {
            isAuth && <NavLink to={'/profile'} className="text-md font-bold cursor-pointer">Личный кабинет</NavLink>
            }
          </nav>
          {username ? (
            <>
              <div className="flex items-center">
                <div className="text-indigo-600 mr-5">Привет, {username}</div>
                <button
                  onClick={() => handleLogout()}
                  className="px-3 text-white py-1 rounded-md bg-red-300"
                >
                  Выйти
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center">
              <NavLink
                to={"/login"}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Войти
              </NavLink>
              <NavLink
                to={"/register"}
                className="bg-white text-indigo-600 px-4 py-2 rounded-md border border-indigo-600"
              >
                Регистрация
              </NavLink>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
