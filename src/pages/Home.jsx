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
    </div>
  );
};

export default Home;
