import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="display-4 mb-4">Welcome to Centurion University's Grievance Management System</h2>
          <p className="lead">
            At Centurion University, we prioritize the well-being and concerns of our students. The Grievance
            Management System is designed to provide a platform for students to address and resolve their grievances
            effectively.
          </p>
          <p>
            Whether you have concerns about academics, facilities, or any other aspects of university life, our
            Grievance Management System is here to ensure that your voice is heard. We are committed to creating a
            positive and conducive environment for your academic journey.
          </p>
          <p className="lead">
            <Link to="/submit-grievance" className="btn btn-primary btn-lg">
              Submit a Grievance
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
