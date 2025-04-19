import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Aside />
          <Outlet/>
        </div>
      </main>
    </>
  );
};
export default Layout;
