import React from 'react'
import GrievanceView from '../grievance/GrievanceView'
import StudentView from '../student/StudentView'

const AdminView = () => {
  return (
    <div>
    <StudentView/>
    <hr/>
    <GrievanceView/>
    </div>
  )
}

export default AdminView