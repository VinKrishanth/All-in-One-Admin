import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBaseRoutes from './utils/RoleBaseRoutes'
import AdminSummary from './components/Dashboard/AdminSummary'
import DepartmentList from './components/Department/DepartmentList'
import AddDepartment from './components/Department/AddDepartment'
import EditDepartment from './components/Department/EditDepartment'
import List from './components/Employee/List'
import Add from './components/Employee/Add'
import View from './components/Employee/View'
import Edit from './components/Employee/Edit'
import AddSalary from './components/Salary/Add'
import ViewSalary from './components/Salary/View'
import Summary from './components/EmployeeDashboard/Summary'
import LeaveList from './components/Leave/List'
import AddLeave from './components/Leave/Add'
import Setting from './components/EmployeeDashboard/Setting'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoutes >
            <RoleBaseRoutes requiredRole={['admin']}>
              <AdminDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>
          <Route path={"/admin-dashboard"}  element={<AdminSummary />}> </Route>

          <Route path={"/admin-dashboard/departments"}  element={<DepartmentList />}> </Route>
          <Route path={"/admin-dashboard/add-department"} element={<AddDepartment />}> </Route>
          <Route path={"/admin-dashboard/department/:id"} element={<EditDepartment />}> </Route>


          <Route path={"/admin-dashboard/employees"} element={<List />}> </Route>
          <Route path={"/admin-dashboard/add-employee"} element={<Add />}> </Route>
          <Route path={"/admin-dashboard/employees/:id"} element={<View />}> </Route>
          <Route path={"/admin-dashboard/employees/edit/:id"} element={<Edit />}> </Route>


          <Route path={"/admin-dashboard/salary/add"} element={<AddSalary />}> </Route>
          <Route path={"/admin-dashboard/employees/salary/:id"} element={<ViewSalary />}> </Route>
          
        </Route>
        <Route path="/employee-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={['admin','employee']}>
              <EmployeeDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>
        <Route path={"/employee-dashboard"}  element={<Summary />}> </Route>
        <Route path={"/employee-dashboard/profile/:id"}  element={<View />}> </Route>
        <Route path={"/employee-dashboard/leaves"}  element={<LeaveList />}> </Route>
        <Route path={"/employee-dashboard/add-leave"}  element={<AddLeave />}> </Route>

        <Route path={"/employee-dashboard/salary/:id"}  element={<ViewSalary />}> </Route>

        <Route path={"/employee-dashboard/setting"}  element={<Setting />}> </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
