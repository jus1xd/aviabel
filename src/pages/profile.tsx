import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/container";
import Header from "../components/header/header";
import ProfileMenu from "../components/profileMenu";
import Toaster from "../components/toaster";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { editUser } from "../store/slices/userSlice";

const Profile = () => {
  const profileData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>(profileData.name || "");
  const [surname, setSurname] = useState<string>(profileData.surname || "");
  const [email, setEmail] = useState<string>(profileData.email || "");
  const [password, setPassword] = useState<string>(profileData.password || "");

  const [toastActive, setToastActive] = useState<boolean>(false);
  const [toastStatus, setToastStatus] = useState<string>("error");

  const editUserHandler = () => {
    const data = {
      email: email,
      name: name,
      surname: surname,
      password: password,
    };

    try {
      dispatch(editUser(data));
      setToastActive(true);
      setToastStatus("success");
    } catch (error) {
      setToastActive(true);
      setToastStatus("error");
    }
  };

  console.log(profileData);

  return (
    <div>
      <Toaster type={toastStatus} active={toastActive} setActive={setToastActive} />
      <Header />
      <Container>
        <h1 className="text-2xl font-bold mt-9">Личный кабинет</h1>
        <div className="flex mt-7">
          <ProfileMenu />
          {
            <div className="flex flex-col w-1/4">
              <div className="text-lg">
                <div className="text-sm">Логин</div>
                <input
                  type="text"
                  className="border border-slate-300 px-2 py-1 mt-1  rounded-md outline-none w-full"
                  value={profileData.username}
                  disabled
                />{" "}
              </div>
              <div className="text-lg mt-2">
                <div className="text-sm">Имя</div>
                <input
                  type="text"
                  className="border border-slate-300 px-2 py-1 mt-1  rounded-md outline-none w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
              </div>
              <div className="text-lg mt-2">
                <div className="text-sm">Фамилия</div>
                <input
                  type="text"
                  className="border border-slate-300 px-2 py-1 mt-1  rounded-md outline-none w-full"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="text-lg mt-2">
                <div className="text-sm">Почта</div>
                <input
                  type="email"
                  className="border border-slate-300 px-2 py-1 mt-1  rounded-md outline-none w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-lg mt-2">
                <div className="text-sm">Пароль</div>
                <input
                  type="text"
                  className="border border-slate-300 px-2 py-1 mt-1  rounded-md outline-none w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={() => editUserHandler()}
                className="p-3 mt-5 bg-indigo-600 text-white w-full rounded-md"
              >
                Сохранить
              </button>
            </div>
          }
        </div>
      </Container>
    </div>
  );
};

export default Profile;
