import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./components/Layout";
import AllProjects from "./pages/AllProjects";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import AllVacancies from "./pages/AllVacancies";
import Vacancy from "./pages/Vacancy";
import VacancyDetails from "./pages/VacancyDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="projects/create" element={<Project />} />
          <Route path="vacancy" element={<AllVacancies />} />
          <Route path="vacancy/create" element={<Vacancy />} />
          <Route path="vacancy/:id" element={<VacancyDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
