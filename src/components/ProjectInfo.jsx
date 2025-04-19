import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { normalizeDate } from "../utils/checkDate";
import Button from "./Button";

const ProjectInfo = ({ id }) => {
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    const allProjects = JSON.parse(localStorage.getItem("Projects")) || [];
    const foundProject = allProjects.find((p) => String(p.id) === String(id));
    if (foundProject) {
      setProject(foundProject);
      reset({
        name: foundProject.name,
        field: foundProject.field,
        experience: foundProject.experience,
        deadline: normalizeDate(foundProject.deadline),
        description: foundProject.description
      });
    }
  }, [id, reset]);

  const onSubmit = (data) => {
    const allProjects = JSON.parse(localStorage.getItem("Projects")) || [];

    const updated = allProjects.map((p) =>
      String(p.id) === String(id) ? { ...p, ...data } : p
    );

    localStorage.setItem("Projects", JSON.stringify(updated));
    setIsEditing(false);

    const updatedProject = updated.find((p) => String(p.id) === String(id));
    setProject(updatedProject);
    reset({
      ...updatedProject,
      deadline: normalizeDate(updatedProject.deadline)
    });
    toast.success("The project has been updated");
  };

  if (!project) return <p>Project not found</p>;

  const handleEditClick = (e) => {
    e.preventDefault?.();
    setIsEditing(true);
  };

  const handleDeleteProject = () => {
    const existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];

    const updatedProjects = existingProjects.filter(
      (item) => item.id !== project.id
    );

    localStorage.setItem("Projects", JSON.stringify(updatedProjects));
    toast.error("The project has been deleted");
    navigate(`/`);
    reset();
  };

  return (
    <div>
      <div className="title__block">
        <h1 className="title">{project.name}</h1>
        <Button
          text="Delete project"
          type="button"
          onClick={handleDeleteProject}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="edit_form__wrapper">
          <div className="select__wrapper">
            <label className="label">Field</label>
            <select
              className="select"
              disabled={!isEditing}
              {...register("field", { required: "Select a field" })}
            >
              <option value=""></option>
              <option value="Design">Design</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="UI/UX">UI/UX</option>
            </select>
            {errors.field && (
              <span className="error">{errors.field.message}</span>
            )}
          </div>

          <div className="wrapper">
            <label htmlFor="experience" className="label">
              Experience
            </label>
            <input
              className="input"
              id="experience"
              disabled={!isEditing}
              {...register("experience", { required: "Enter experience" })}
            />
            {errors.experience && (
              <p className="error">{errors.experience.message}</p>
            )}
          </div>

          <div className="wrapper">
            <label htmlFor="deadline" className="label">
              Deadline
            </label>
            <input
              className="input"
              id="deadline"
              type="date"
              disabled={!isEditing}
              {...register("deadline", {
                required: "Specify a deadline",
                validate: (value) => {
                  const today = new Date().setHours(0, 0, 0, 0);
                  const selected = new Date(value).setHours(0, 0, 0, 0);
                  return selected >= today || "You cannot select a past date";
                }
              })}
            />
            {errors.deadline && (
              <p className="error">{errors.deadline.message}</p>
            )}
          </div>

          <div className="edit_form_textarea__wrapper">
            <label htmlFor="description" className="label">
              Description
            </label>
            <textarea
              className="textarea"
              id="description"
              disabled={!isEditing}
              {...register("description", { required: "Enter a description" })}
              rows={5}
              style={{ width: "100%" }}
            />
            {errors.description && (
              <p className="error">{errors.description.message}</p>
            )}
          </div>
          <div className="edit_form_buttonWrapper">
            {isEditing ? (
              <Button type="submit" text="Save" />
            ) : (
              <Button type="button" text="Edit" onClick={handleEditClick} />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectInfo;
