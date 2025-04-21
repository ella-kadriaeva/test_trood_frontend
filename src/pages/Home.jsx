import React from "react";
import Button from "../components/Button";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoOctocat } from "react-icons/io5";
import { IoPaperPlane } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div className=" home_page">
      <div className="home_content">
        <div className="title__block">
          <h1 className="title">Welcome! Project Management System тT</h1>

          <Button text="Go to projects" isLink={true} path="/projects" />
        </div>

        <p className="home__text title__margin">
          This project is a test task for participation in the internship.
          During the task, part of the frontend &nbsp;
          <a
            className="pro__links"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ella-kadriaeva/test_trood_frontend"
          >
            part of the frontend
          </a>
          &nbsp; applications were developed using React. A &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="pro__links"
            href="https://github.com/ella-kadriaeva/test_trood_backend"
          >
            &nbsp; ready-made version of the backend
          </a>
          was used to interact with the data.
        </p>
        <p className="home__text title__margin">
          <a
            className="pro__links"
            target="_blank"
            rel="noopener noreferrer"
            href="https://test-trood-backend.onrender.com/"
          >
            Please wait for the server to wake up! Thank you!
          </a>
        </p>
        <p className="home__text title__margin">
          "Free instance will stop when idle, which can delay requests for 50
          seconds or more."
        </p>
        <p className="title__margin">
          To display projects with a past deadline as completed, the base date
          of comparison is set to "2025-07-01" so that the project 30.06 falls
          into the projects with a past deadline. For subsequent correct work,
          it will be necessary to compare the project deadline time with the
          current date.
        </p>
        <p className="title__margin home__text">
          Links to the project repository on GitHub
        </p>
        <ol>
          <li>
            <a
              className="pro__links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ella-kadriaeva/test_trood_frontend"
            >
              Frontend-project - completed part of the frontend application
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="pro__links"
              href="https://github.com/ella-kadriaeva/test_trood_backend"
            >
              Backend-project - ready version of the backend.
            </a>
          </li>
        </ol>
      </div>
      <div className="home_footer">
        <ul className="footer__title">
          <li className="footer__item">
            <IoLogoReact color="#899f9a" size={24} />
            <span className="home__text">
              Ella Kadriaieva. Frontend developer
            </span>
          </li>
          <li className="footer__item">
            <a
              href="mailto:ella.kadriaieva@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMailOpenOutline color="#899f9a" size={24} />
              &nbsp;
              <span className="home__text">ella.kadriaieva@gmail.com</span>
            </a>
          </li>
        </ul>
        <ul className="header__user-block">
          <li className="footer__item">
            <a
              href="https://t.me/Ella7solo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoPaperPlane color="#899f9a" size={24} />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/ella-kadriaeva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoOctocat color="#899f9a" size={24} />
            </a>
          </li>

          <li className="footer__item">
            <a
              href="https://www.linkedin.com/in/ella-kadriaieva-79a197259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin color="#899f9a" size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
