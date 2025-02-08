import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import PrivateRoutes from '../utils/PrivateRoutes'
import RoleBaseRoutes from '../utils/RoleBaseRoutes'
import Home from '../pages/Home'
import AdminDashboard from '../pages/AdminDashboard'
import TeacherDashboard from '../pages/TeacherDashboard'
import StudentDashboard from '../pages/StudentDashboard'
import AdminSummery from '../components/admin/AdminSummery'
import TeacherList from '../components/admin/teachers/TeacherList'
import StudentList from '../components/admin/students/StudentList'
import Class from '../components/admin/Class'

export default function Layouts() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* admin  */}
        <Route path="/admin-dashboard" element={
          <PrivateRoutes >
            <RoleBaseRoutes requiredRole={['admin']}>
              <AdminDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>
          <Route path={"/admin-dashboard"}  element={<AdminSummery />}> </Route>
          <Route path={"/admin-dashboard/teacher"}  element={<TeacherList />}> </Route>
          <Route path={"/admin-dashboard/student"}  element={<StudentList />}> </Route>
          <Route path={"/admin-dashboard/library"}  element={<StudentList />}> </Route>
          <Route path={"/admin-dashboard/exam"}  element={<StudentList />}> </Route>
          <Route path={"/admin-dashboard/notice"}  element={<StudentList />}> </Route>
          <Route path={"/admin-dashboard/setting"}  element={<StudentList />}> </Route>
          <Route path={"/admin-dashboard/Attendance"}  element={<StudentList />}> </Route>
          <Route path={"/admin-dashboard/class"}  element={<Class />}> </Route>
          <Route path={"/admin-dashboard/subject"}  element={<StudentList />}> </Route>
        </Route>
        {/* teacher */}
        <Route path="/teacher-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={['admin','teacher']}>
              <TeacherDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>

        </Route>

        {/* students */}
        <Route path="/student-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={['admin','teacher', 'student']}>
              <StudentDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}