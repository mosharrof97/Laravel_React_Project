import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav
      className="navbar navbar-expand-md navbar-dark bg-light"
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/">
          CRUD Project
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              {/* <Link className="nav-link " to="/">
                Form
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/list">
                List
              </Link> */}
            </li>
          </ul>
          <div className="d-flex">
            <Link className=" btn btn-light me-3" to="/student/login">
              Login
            </Link>
            <Link className=" btn btn-primary" to="/student/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
