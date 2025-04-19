import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";
import Button from "../components/Button";

const Vacancies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.state?.projectId;
  const fields = [
    {
      name: "title",
      label: "Title of job position",
      validation: { required: "Enter title" }
    },
    {
      name: "field",
      label: "Field",
      type: "select",
      options: [
        { value: "Design", label: "Design" },
        { value: "Front-end", label: "Front-end" },
        { value: "Back-end", label: "Back-end" },
        { value: "UI/UX", label: "UI/UX" }
      ],
      validation: { required: "Select a field" }
    },
    {
      name: "experience",
      label: "Experience",
      validation: { required: "Specify experience" }
    },
    {
      name: "country",
      label: "Country",
      validation: { required: "Enter country" }
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      fullWidth: true,
      validation: {
        required: "Add a description",
        minLength: { value: 10, message: "Minimum 10 characters" }
      }
    }
  ];

  const onSubmit = (data, reset) => {
    const newVacancy = { id: Date.now(), projectId, ...data };
    const existing = JSON.parse(localStorage.getItem("Vacancies")) || [];
    localStorage.setItem(
      "Vacancies",
      JSON.stringify([...existing, newVacancy])
    );
    toast.success("Vacancy created");
    reset();
    setTimeout(() => navigate(`/projects/${projectId}`), 1500);
  };
  const handleGoClick = () => {
    navigate(`/projects`);
  };
  return (
    <div className="projects__page">
      <div className="title__block">
        <h2 className="title">
          Create a vacancy for project #{" "}
          {projectId ? (
            <span className="title">{projectId}</span>
          ) : (
            <>
              <span className="error ">project number is missing.</span>
            </>
          )}
        </h2>
        {!projectId && (
          <Button type="button" text="Go to projects" onClick={handleGoClick} />
        )}
      </div>
      <Form fields={fields} onSubmit={onSubmit} submitText="Create vacancy" />
    </div>
  );
};

export default Vacancies;
