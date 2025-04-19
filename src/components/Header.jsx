import React from "react";

import { IoChatbox } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">Trood Community</div>
      <div className="header__user-block">
        <IoChatbox color="#DBE3E1" size={24} />
        <IoNotifications color="#DBE3E1" size={24} />
        <div className="header__user-block--avatar"></div>
        <p className="header__user-block--name">Alex Smith</p>
      </div>
    </header>
  );
}
