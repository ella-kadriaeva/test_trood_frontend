import React from "react";
import { NavLink } from "react-router";

const setActiveLink = ({ isActive }) =>
  isActive ? "navbar__item navbar__item-active" : "navbar__item";
const Aside = () => {
  return (
    <div className="aside">
      <nav className="navbar">
        <ul className="navbar-list">
          <NavLink className={setActiveLink} to="/">
            Main page
          </NavLink>
          <NavLink className={setActiveLink} to="/projects" end={false}>
            Projects
          </NavLink>
          <NavLink className={setActiveLink} to="/vacancy">
            Vacancies
          </NavLink>
          <NavLink className={setActiveLink} to="/people">
            People
          </NavLink>
          <NavLink className={setActiveLink} to="/tests">
            Tests
          </NavLink>
          <NavLink className={setActiveLink} to="/activities">
            Activities
          </NavLink>
          <NavLink className={setActiveLink} to="/settings">
            Settings
          </NavLink>
        </ul>
      </nav>
      <button className="btn-logout">Log out</button>
    </div>
  );
};

export default Aside;
