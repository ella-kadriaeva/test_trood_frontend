import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getProjectsById } from "../utils/fetchProject";

import ProjectInfo from "../components/ProjectInfo";
import Button from "../components/Button";
import PeopleCard from "../components/PeopleCard";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCreateVacancy = () => {
    navigate("/vacancy", { state: { projectId: id } });
  };

  const [project, setProject] = useState();
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const existing = JSON.parse(localStorage.getItem("Projects")) || [];
        const fromLocal = existing.find(
          (item) => String(item.id) === String(id)
        );

        if (fromLocal) {
          setProject(fromLocal);
        } else {
          const data = await getProjectsById(id);
          setProject(data);
        }

        const existingVacancies =
          JSON.parse(localStorage.getItem("Vacancies")) || [];
        const projectVacancies = existingVacancies.filter(
          (vacancy) => String(vacancy.projectId) === String(id)
        );
        setVacancies(projectVacancies);
      } catch (error) {
        setError(`Error ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (!project) return <div>Loading...</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="projects__page">
      {project && <ProjectInfo id={project.id} />}
      <div className="projects__wrapper">
        <Button text="Add vacancy" onClick={handleCreateVacancy} />
        {vacancies.length > 0 ? (
          <>
            <h2 className="title title__margin">Hired people</h2>
            <ul>
              {vacancies.map((vacancy) => (
                <li key={vacancy.id}>
                  <PeopleCard vacancy={vacancy} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="title__margin">There are no vacancies</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
