import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentPofile = () => {
	const { id } = useParams();

	const [student, setStudent] = useState({
		firstName: "",
		lastName: "",
		regd_no:"",
		email: "",
		department: "",
	});

	useEffect(() => {
		loadStudent();
	},[] );

	const loadStudent = async () => {
		const result = await axios.get(
			`http://localhost:8080/student/getbyid/${id}`
		);
		setStudent(result.data);
	};

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://scontent.fbbi1-1.fna.fbcdn.net/v/t39.30808-6/324114736_1251809522099212_8092271194089000871_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VbypHoeM-sAAX8XStMa&_nc_ht=scontent.fbbi1-1.fna&oh=00_AfC1ncEPgfVluzGlvihNwE8Y9DkCpbsc98egl-PEYt9EUQ&oe=655D525C"
									alt="avatar"
									className="-circle img-fluid"
									style={{ width: 229.9,height:182.9 }}
								/>
								<h5 className="my-3">
									{`${student.firstName} ${student.lastName}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary">
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1">
										Message
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											First Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Last Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.lastName}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Regd No
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.regd_no}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Department
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{student.department}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentPofile;