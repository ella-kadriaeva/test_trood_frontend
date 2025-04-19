import React from "react";
import Button from "../components/Button";
const Home = () => {
  return (
    <div className="main__page">
      <div className="title__block">
        <h1 className="title">Подождите, пока сервер проснется! Спасибо!</h1>

        <Button text="Go to projects" isLink={true} path="/projects" />
      </div>
      <p>
        Деплой проекта выполнен на бесплатный render.com который постоянно
        засыпает: "Your free instance will stop when idle, which can delay
        requests for 50 seconds or more."
      </p>

      <p className="title__margin">
        Для отображения проектов с прошедшим дедлайном, как завершённые, базовой
        датой стравнения выбрана дата "2025-07-01", чтобы проект 30.06 попадал в
        проекты с прошедшим дедлайном. Для последующей корректной работы нужно
        будет сравнивать время дедлайна проекта с текущей датой.
      </p>
    </div>
  );
};

export default Home;
