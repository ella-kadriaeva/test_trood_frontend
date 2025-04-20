import React, { useState, useEffect } from "react";

import { checkDate } from "../utils/checkDate";
import { getAllProjects } from "../utils/fetchProject";

import SwiperBlock from "../components/SwiperBlock";
import Button from "../components/Button";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cachedProjects = localStorage.getItem("Projects");

      if (cachedProjects) {
        setProjects(JSON.parse(cachedProjects));
        return;
      }

      const data = await getAllProjects();
      if (data) {
        setProjects(data);
        localStorage.setItem("Projects", JSON.stringify(data));
      }
    };

    fetchData();
  }, []);

  const activeProjects = projects.filter(
    (project) => checkDate(project.deadline) === 0
  );

  const passedProjects = projects.filter(
    (project) => checkDate(project.deadline) === 1
  );

  return (
    <div className="main__page">
      <div className="title__block">
        <h1 className="title">Active projects</h1>
        <Button text="Create project" isLink={true} path="/projects/create" />
      </div>

      <div className="active__block">
        {activeProjects.length > 0 ? (
          <SwiperBlock projects={activeProjects} />
        ) : (
          <p>There are no active projects</p>
        )}
      </div>

      <div>
        <h2 className="title">Passed projects</h2>
        <div className="passed__block">
          {passedProjects.length > 0 ? (
            <SwiperBlock projects={passedProjects} />
          ) : (
            <p>No past projects</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
