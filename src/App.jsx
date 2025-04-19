import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Vacancies from "./pages/Vacancies";
import VacancieDetails from "./pages/VacancieDetails";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Aside />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="projects/">
              <Route index element={<Projects />} />
              <Route path=":id" element={<ProjectDetails />} />
            </Route>
            <Route path="/vacancy" element={<Vacancies />} />
            <Route path="/vacancy/:id" element={<VacancieDetails />} />
          </Routes>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
