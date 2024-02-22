import "./style.css";
import Navbar from "./partial/Header";
import Sidebar from "./partial/SideBar/Sidebar";
import { Outlet } from "react-router-dom";
const Dashbord = () => {
  return (
    <div className="bg-white">
      <section>
        <div className="bg-dark sticky-top">
          <Navbar />
        </div>
        <div className="innder_body row ">
          <div className="sidebar col-sm-3 col-md-2 col-xxl-2  bg-light">
            <Sidebar />
          </div>
          <div className="content col-sm-9 col-md-10 col-xxl-10">
            <div className="me-2 mt-5">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashbord;
