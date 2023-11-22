import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-2">
      <div className="container-fluid ">
        {/* Logo */}
        <Link className="navbar-brand text-white navbar-dark d-flex align-items-center" to="/">
          <img
            src="https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp"
            alt="Logo"
            width="90"
            height="130"
            className="d-inline-block align-top me-2 "
          />
          <span className='p-4 fs-2'>Grievance Management System <br/><p className='fs-6 text-center'>Empowering Education, Enriching Lives</p></span>
          
        </Link>

        {/* Navbar Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse " id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            {/* <li className="nav-item">
              <Link className="nav-link active text-white fs-4" aria-current="page" to="/view-students">
                View All Student
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link active text-white fs-4" to="/add-students">
                Add new Students
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link active text-white fs-4" to="/student-login">
                Student Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white fs-4" to="/department-login">
                Department Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white fs-4" to="/admin-login">
                Admin Dashboard
              </Link>
            </li>
          </ul>

          {/* Search Form
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
