import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { checkDate, normalizeDate } from "../utils/checkDate";

import Form from "../components/Form";

const Projects = () => {
  const navigate = useNavigate();
  const fields = [
    {
      name: "name",
      label: "Project Name",
      validation: { required: "Please provide the project name" }
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
      validation: { required: "Please indicate the direction" }
    },
    {
      name: "experience",
      label: "Experience",
      validation: { required: "Please indicate the experience required" }
    },
    {
      name: "deadline",
      label: "Deadline",
      type: "date",
      validation: {
        required: "Please select a deadline",
        validate: (value) => {
          const normalizedDate = normalizeDate(value);
          const isValidDate = checkDate(normalizedDate);
          if (isValidDate === 1) {
            return "The selected date cannot be in the past.";
          }
          return true;
        }
      }
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      fullWidth: true,
      validation: {
        required: "Please provide a project description",
        minLength: {
          value: 10,
          message: "The description must be at least 10 characters long"
        }
      }
    }
  ];

  const onSubmit = (data, reset) => {
    const newProject = {
      id: Date.now(),
      name: data.name,
      description: data.description,
      deadline: data.deadline,
      field: data.field,
      experience: data.experience
    };

    const existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];
    const updatedProjects = [...existingProjects, newProject];

    localStorage.setItem("Projects", JSON.stringify(updatedProjects));
    toast.success("Project created");

    reset();

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="projects__page">
      <h2 className="title">Create Project</h2>
      <Form fields={fields} onSubmit={onSubmit} submitText="Create Project" />
    </div>
  );
};

export default Projects;
