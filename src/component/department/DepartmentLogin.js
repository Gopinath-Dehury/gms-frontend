import React, { useState } from 'react';

const DepartmentLogin = ({ onLogin }) => {
  const [username, setDepartmentname] = useState('');
  const [password, setDepartmentPassword] = useState('');

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
      setDepartmentname('');
      setDepartmentPassword('');
    } else {
      // Handle invalid login (show error message or perform other actions)
      console.log('Invalid login credentials');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Department Login</h2>
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
                onChange={(e) => setDepartmentname(e.target.value)}
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
                onChange={(e) => setDepartmentPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepartmentLogin;
