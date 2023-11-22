import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./component/common/NavBar";
import './App.css';
import Home from './component/Home';
import StudentView from './component/student/StudentView';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";
import StudentLogin from "./component/student/StudentLogin";
import DepartmentLogin from "./component/department/DepartmentLogin";
import AdminLogin from "./component/admin/AdminLogin";
import AdminView from "./component/admin/AdminView";
import StudentDashboard from "./component/student/StudentDashboard";
import EditGrievance from "./component/grievance/EditGrievance";
import AddGrievance from "./component/grievance/AddGrievance";
import GrievanceView from "./component/grievance/GrievanceView";

function App() {
  return (
    <main >
<Router>
      <NavBar/>
       
<Routes>
  <Route exact path="/add-students" element={<AddStudent />}></Route>		
  <Route exact path="/edit-student/:id" element={<EditStudent />}></Route>
  <Route exact path="/edit-grievance/:id" element={<EditGrievance />}></Route>
<Route exact path="/view-grievances" element={<GrievanceView/>}></Route>
<Route exact path="/add-grievance" element={<AddGrievance/>}></Route>

<Route exact path="/" element={<Home />}></Route>
<Route exact path="/student-login" element={<StudentLogin />}></Route>
<Route exact path="/department-login" element={<DepartmentLogin />}></Route>
<Route exact path="/admin-login" element={<AdminLogin />}></Route>
<Route exact path="/admin-view" element={<AdminView/>}></Route>
<Route exact path="/student-dashboard" element={<StudentDashboard />}></Route>
<Route exact path="/submit-grievance" element={<StudentLogin />}></Route>
<Route exact path="/student-profile/:id" element={<StudentProfile />}></Route>

<Route exact path="/view-students" element={<StudentView />}></Route>

</Routes> </Router>
 

    </main>
  );
}

export default App;
