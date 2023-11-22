import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditGrievance = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [grievance, setGrievance] = useState({
		department: "",
		student_regd_no: "",
		subject:"",
        description:"",
		status: "",
		createdDate: "",
        resolvedDate:"",
	});
	const {
		department,
		student_regd_no,
		subject,
		description,
        status,
        createdDate,
        resolvedDate,
	} = grievance;
    
    
    useEffect(() => {
        loadGrievance();
    }, []);
	const loadGrievance = async () => {
        const result = await axios.get(
            `http://localhost:8080/grievance/getbyid/${id}`
            );
            setGrievance(result.data);
        };
        
        const handleInputChange = (e) => {
            setGrievance({
                ...grievance,
                [e.target.name]: e.target.value,
            });
        };
        const updateGrievance = async (e) => {
            e.preventDefault();
            await axios.put(
                `http://localhost:8080/grievance/updatebyid/${id}`,
                grievance
                );
                navigate("/view-grievances");
            };
            
            return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Grievance</h2>
			<form onSubmit={(e) => updateGrievance(e)}>
            <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="department">
						Department
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="department"
						id="department"
						required
						value={department}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="student_regd_no">
						Student Registration no
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="student_regd_no"
						id="student_regd_no"
						required
						value={student_regd_no}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="subject">
						Subject
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="subject"
						id="subject"
						required
						value={subject}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="description">
						Your description
					</label>
					<input
						className="form-control col-sm-6"
						type="description"
						name="description"
						id="description"
						required
						value={description}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="status">
						status
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="status"
						id="status"
						required
						value={status}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="createdDate">
						created Date
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="createdDate"
						id="createdDate"
						required
						value={createdDate}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="resolvedDate">
						resolved Date
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="resolvedDate"
						id="resolvedDate"
					
						value={resolvedDate}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Update
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-grievances"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditGrievance;