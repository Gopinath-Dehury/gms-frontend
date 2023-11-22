import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate the login credentials (add your validation logic here)
    if (username && password) {
      // Assuming successful login, you can pass the student information to the parent component
      const studentInfo = {
        username,
        // Add other student-related information if needed
      };

      // Callback to the parent component with the student information
      onLogin(studentInfo);

      // Optionally, you can also clear the form fields
      setUsername('');
      setPassword('');
    } else {
      // Handle invalid login (show error message or perform other actions)
      console.log('Invalid login credentials');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Student Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Link to="/student-dashboard">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
