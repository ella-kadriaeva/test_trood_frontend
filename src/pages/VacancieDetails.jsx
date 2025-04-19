import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../components/Button";

const VacancieDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [vacancy, setVacancy] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    const allVacancies = JSON.parse(localStorage.getItem("Vacancies")) || [];
    const foundVacancy = allVacancies.find((v) => String(v.id) === String(id));
    if (foundVacancy) {
      setVacancy(foundVacancy);
      reset(foundVacancy);
    }
  }, [id, reset]);

  const onSubmit = (data) => {
    const allVacancies = JSON.parse(localStorage.getItem("Vacancies")) || [];

    const updated = allVacancies.map((v) =>
      String(v.id) === String(id) ? { ...v, ...data } : v
    );

    localStorage.setItem("Vacancies", JSON.stringify(updated));
    setIsEditing(false);

    const updatedVacancy = updated.find((v) => String(v.id) === String(id));
    setVacancy(updatedVacancy);
    reset(updatedVacancy);

    toast.success("The vacancy has been updated");
    navigate(`/projects/${vacancy.projectId}`);
  };

  if (!vacancy) return <p>Vacancy not found</p>;

  const handleEditClick = (e) => {
    e.preventDefault?.();
    setIsEditing(true);
  };

  const handleDeleteVacancy = () => {
    const allVacancies = JSON.parse(localStorage.getItem("Vacancies")) || [];
    const updatedVacancies = allVacancies.filter((v) => v.id !== vacancy.id);

    localStorage.setItem("Vacancies", JSON.stringify(updatedVacancies));
    toast.error("The vacancy has been deleted");
    navigate(`/projects/${vacancy.projectId}`);
    reset();
  };

  return (
    <div className="projects__page">
      <div className="title__block">
        <h1 className="title">{vacancy.title}</h1>
        <Button
          text="Delete vacancy"
          type="button"
          onClick={handleDeleteVacancy}
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
              {...register("experience", {
                required: "Specify experience"
              })}
            />
            {errors.experience && (
              <p className="error">{errors.experience.message}</p>
            )}
          </div>

          <div className="wrapper">
            <label htmlFor="country" className="label">
              Country
            </label>
            <input
              className="input"
              id="country"
              disabled={!isEditing}
              {...register("country", { required: "Enter country" })}
            />
            {errors.country && (
              <p className="error">{errors.country.message}</p>
            )}
          </div>

          <div className="textarea__wrapper">
            <label htmlFor="description" className="label">
              Description
            </label>
            <textarea
              className="textarea"
              id="description"
              disabled={!isEditing}
              rows={5}
              {...register("description", {
                required: "Enter description",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters"
                }
              })}
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

export default VacancieDetails;
