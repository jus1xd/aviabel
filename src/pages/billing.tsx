import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Container from '../components/container';
import Header from '../components/header/header';
import ProfileMenu from '../components/profileMenu';

const Billing = () => {
   
  const [toastActive, setToastActive] = useState<boolean>(false);
  const [toastStatus, setToastStatus] = useState<string>("error");


  return (
    <div>
      {/* <Toaster type={toastStatus} active={toastActive} setActive={setToastActive} /> */}
      <Header/>
      <Container>
        <h1 className="text-2xl font-bold mt-9">Личный кабинет</h1>
        <div className="flex mt-7">
          <ProfileMenu />
        
        </div>
      </Container>
    </div>
  );
}

export default Billing