import React,{ useEffect, useState } from 'react';
import axios from "axios";
import {FaEdit, FaTrashAlt} from "react-icons/fa";
import {Link} from "react-router-dom";

const GrievanceView = () => {
    const[grievances, setGrievances]=useState([]);
useEffect(() =>{
    loadGrievances();
},[]);



    const loadGrievances = async()=>{
        const result = await axios.get("http://localhost:8080/grievance/getall",{
            validateStatus:()=>{
                return true;
            },
        }
        );
        setGrievances(result.data)
        // if(result.status===302){
        //     setGrievances(result.data)
        // }
        
    };

    const handleDelete = async(id)=>{
        await axios.delete(`http://localhost:8080/grievance/delete/${id}`
        );
        loadGrievances();
    }
  return (
    <section>
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

                        <button className="btn btn-danger" 
                        onClick={()=>handleDelete(grievance.id)}>
                        <FaTrashAlt/>
                        </button>

                       </td>
                </tr>  



                ))}
            </tbody>
        </table>

    </section>
  )
}

export default GrievanceView