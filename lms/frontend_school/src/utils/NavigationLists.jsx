import { MdDashboard } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiBuildingLibrary } from "react-icons/hi2";
import { PiExamDuotone } from "react-icons/pi"
import { LuNotepadText } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";


export const AdminList = [
    {
        title: "Dashboard",
        path: "/admin-dashboard",
        icon: MdDashboard ,
        delay: 0.1,
    },
    {
        title: "Teacher",
        path: "/admin-dashboard/teacher",
        icon: FaChalkboardTeacher ,
        delay: 0.3,
    },
    {
        title: "Students",
        path: "/admin-dashboard/student",
        icon: PiStudentDuotone ,
        delay: 0.3,
    },
    {
        title: "Library",
        path: "/admin-dashboard/library",
        icon: HiBuildingLibrary ,
        delay: 0.3,
    },
    {
        title: "Attendance",
        path: "/admin-dashboard/attendance",
        icon: GrNotes ,
        delay: 0.5,
    },
    {
        title: "Exam",
        path: "/admin-dashboard/exam",
        icon: PiExamDuotone ,
        delay: 0.6,
    },
    {
        title: "Notice",
        path: "/admin-dashboard/notice",
        icon: LuNotepadText ,
        delay: 0.7,
    },
    {
        title: "Setting",
        path: "/admin-dashboard/setting",
        icon: IoSettings ,
        delay: 0.8,
    },
]