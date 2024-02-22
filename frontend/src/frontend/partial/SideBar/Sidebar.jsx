import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light  side-bar">
      <div className=" d-flex justify-content-center"></div>
      <hr />
      <div className="accordion" id="accordionExample">
        <div className="side-body bg-light">
          <div className="">
            <Link className="btn btn-block" to="/">
              <i className="fa-sharp fa-solid fa-users"></i>Dashboard
            </Link>
          </div>
          <div className="">
            <Link className="btn btn-block" to="/list">
              <i className="fa-sharp fa-solid fa-users"></i>Student List
            </Link>
          </div>
          <hr />
          <h6>Event</h6>
          <hr />
          <div className="">
            <Link className="btn btn-block" to="/event/list">
              <i className="fa-sharp fa-solid fa-users"></i>Event List
            </Link>
          </div>
          <div className="">
            <Link className="btn btn-block" to="/event/create">
              <i className="fa-sharp fa-solid fa-users"></i>Create Event
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-2 text-light">
        <p>@</p>
      </div>
    </div>
  );
};

export default Sidebar;
