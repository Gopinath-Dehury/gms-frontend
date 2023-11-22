import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaEdit, FaTrashAlt} from "react-icons/fa";


const StudentDashboard = ({ id }) => {
    const [studentInfo, setStudentInfo] = useState({});
    const [grievances, setGrievances] = useState([]);
  
    useEffect(() => {
      // Fetch student information
      axios.get(`http://localhost:8080/student/getbyid/${id}`)
        .then(response => setStudentInfo(response.data))
        .catch(error => console.error('Error fetching student information:', error));
  
      // Fetch grievances for the student
      axios.get(`http://localhost:8080/grievance/regdno/${id}`)
        .then(response => setGrievances(response.data))
        .catch(error => console.error('Error fetching grievances:', error));
    }, [id]);
  
    
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Student Dashboard</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Student Information</h5>
            <p className="card-text">
              <strong>Name:</strong> {studentInfo.firstName} {studentInfo.lastName}
              <br />
              <strong>Email:</strong> {studentInfo.email}
              <br />
              <strong>Department:</strong> {studentInfo.department}
            </p>
          </div>
        </div>
  
        <div className="mt-4">
          <h5>Your Grievances</h5>
          {grievances.length === 0 ? (
            <p>No grievances submitted yet.</p>
          ) : (
            <ul className="list-group">
              {grievances.map(grievance => (
                <li key={grievance.id} className="list-group-item">
                  <strong>{grievance.title}</strong>
                  <p>{grievance.description}</p>
                  {/* Add more details as needed */}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
        <Link to="/add-grievance">
              <button type="submit" className="btn btn-primary">
                Submit Grievance
              </button>
            </Link>
        </div>
        <hr/><hr/>
        <div>
                {/* add grievance with student regd no table here */}
                <table className="table table-bordered table-hover shadow">
            <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Department</th>
                    <th>Student Regd.No</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>createdDate</th>
                    <th>resolvedDate</th>
                    <th colSpan="3">Actions</th>
                </tr>
            </thead>

            <tbody className="text-center">
                {grievances.map((grievance,index)=>(

                <tr key={grievance.id}>
                    <th scope="row" key={index}>
                        {index+1}
                    </th>
                    <td>{grievance.department}</td>
                    <td>{grievance.student_regd_no}</td>
                    <td>{grievance.subject}</td>
                    <td>{grievance.description}</td>
                    <td>{grievance.status}</td>
                    <td>{grievance.createdDate}</td>
                    <td>{grievance.resolvedDate}</td>
                    
                       <td className="mx-2">
                        <Link to={`/edit-grievance/${grievance.id}`} className="btn btn-warning">
                        <FaEdit/>
                        </Link>
                       </td>
                       <td className="mx-2">

                        {/* <button className="btn btn-danger" 
                        onClick={()=>handleDelete(grievance.id)}>
                        <FaTrashAlt/>
                        </button> */}

                       </td>
                </tr>  



                ))}
            </tbody>
        </table>

 
        </div>
      </div>
    );
  };
  
  export default StudentDashboard;