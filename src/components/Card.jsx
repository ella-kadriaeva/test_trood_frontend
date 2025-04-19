import React from "react";
import { Link } from "react-router";
import { IoPersonSharp } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
export default function Card({ item }) {
  const {
    deadline,
    description,
    experience,
    id,
    name,
    field = "Front-end"
  } = item;
  return (
    <Link to={`projects/${id}`}>
      <div className="card">
        <h3 className="card__title">{name}</h3>

        <p></p>
        <ul className="card__list">
          <li className="card__item">Description: {description} </li>
          <li className="card__item">Steck: {field} </li>
          <li className="card__item">Deadline: {deadline} </li>
          <li className="card__item">Experience: {experience} </li>
          <li className="card__item">Project #{id} </li>
        </ul>
        <div className="card__footer">
          <div className="card__user">
            <IoPersonSharp color="#DBE3E1" size={20} />
            <p>Anna Lenram</p>
          </div>
          <div className="card__icons">
            <IoChatbox color="#DBE3E1" size={24} />
            <IoNotifications color="#DBE3E1" size={24} />
          </div>
        </div>
      </div>
    </Link>
  );
}
