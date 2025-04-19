import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Vacancies from "./pages/Vacancies";
import VacancieDetails from "./pages/VacancieDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<MainPage />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="projects/create" element={<Projects />} />
          <Route path="vacancy" element={<Vacancies />} />
          <Route path="vacancy/:id" element={<VacancieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
