import React from "react";
import { useNavigate } from "react-router-dom";
export default function PeopleCard({ vacancy }) {
  const navigate = useNavigate();
  const { title, field, description, raiting = "9/10", id } = vacancy;
  const handleEdit = () => {
    navigate(`/vacancy/${id}`);
  };
  return (
    <>
      <div className="lead__card">
        <ul className="lead__list">
          <li className="lead__item">
            <h3 className="lead__title"> {field}</h3>
            <p className="lead__text">{title}</p>
          </li>
          <li className="lead__item">{description} </li>
          <li className="lead__item">{raiting}</li>
          <li className="lead__item">
            <button className="arrow__btn" onClick={handleEdit}>
              More &#x2192;
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
