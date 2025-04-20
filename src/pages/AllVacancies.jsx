import React, { useState, useEffect } from "react";

import SwiperBlock from "../components/SwiperBlock";
import Button from "../components/Button";

const AllVacancies = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cachedVacancies = localStorage.getItem("Vacancies");

      if (cachedVacancies) {
        setVacancies(JSON.parse(cachedVacancies));
        return;
      }

      // const data = await getAllVacancies();
      // if (data) {
      //   setVacancies(data);
      //   localStorage.setItem("Vacancies", JSON.stringify(data));
      // }
    };

    fetchData();
  }, []);



  return (
    <div className="main__page">
      <div className="title__block">
        <h1 className="title">Vacancies</h1>
        <Button text="Create Vacancies" isLink={true} path="/vacancy/create" />
      </div>

      <div className="active__block">
        {vacancies.length > 0 ? (
          <SwiperBlock projects={vacancies} />
        ) : (
          <p>There are no vacancies</p>
        )}
      </div>
    </div>
  );
};

export default AllVacancies;
