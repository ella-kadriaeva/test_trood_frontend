import React from "react";
import { useForm } from "react-hook-form";

import { checkDate, normalizeDate } from "../utils/checkDate";

import Button from "./Button";
export default function Form({
  fields,
  onSubmit,
  submitText = "Submit"
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const internalSubmit = (data) => {
    onSubmit(data, reset);
  };

  const getWrapperClass = (type, fullWidth = false) => {
    if (fullWidth) return "textarea__wrapper";
    if (type === "select") return "select__wrapper";
    return "wrapper";
  };

  return (
    <form onSubmit={handleSubmit(internalSubmit)} className="form">
      <div className="form__wrapper">
        {fields.map((field) => (
          <div
            key={field.name}
            className={`${getWrapperClass(field.type, field.fullWidth)}`}
          >
            <label htmlFor={field.name} className="label">
              {field.label}
            </label>

            {/* Input types */}
            {field.type === "textarea" ? (
              <textarea
                className="textarea"
                id={field.name}
                {...register(field.name, field.validation)}
                rows={5}
              />
            ) : field.type === "select" ? (
              <select
                className="select"
                {...register(field.name, field.validation)}
              >
                <option value=""></option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : field.type === "date" ? (
              <input
                type="text"
                className="input"
                id={field.name}
                {...register(field.name, {
                  ...field.validation,
                  validate: (value) => {
                    const normalizedDate = normalizeDate(value);
                    const isValidDate = checkDate(normalizedDate);
                    if (isValidDate === 1) {
                      return "The selected date cannot be in the past.";
                    }
                    return true;
                  }
                })}
                placeholder="dd.mm.yyyy"
              />
            ) : (
              <input
                type={field.inputType || "text"}
                className="input"
                id={field.name}
                {...register(field.name, field.validation)}
                defaultValue={field.defaultValue || ""}
              />
            )}

            {errors[field.name] && (
              <p className="error">{errors[field.name]?.message}</p>
            )}
          </div>
        ))}
      </div>

      <div className="form_buttonWrapper">
        <Button type="submit" text={submitText} />
      </div>
    </form>
  );
}
