import { MdDashboard } from "react-icons/md";
import { PiStudentDuotone, PiExamDuotone } from "react-icons/pi";
import { HiBuildingLibrary } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { IoSettings , IoLogOut } from "react-icons/io5";
import {  FaAward , FaChalkboardTeacher } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";

export const AdminList = [
  {
    title: "Dashboard",
    path: "/admin-dashboard",
    icon: MdDashboard,
    delay: 0.1,
  },
  {
    title: "Teacher",
    path: "/admin-dashboard/teacher",
    icon: FaChalkboardTeacher,
    delay: 0.3,
  },
  {
    title: "Students",
    path: "/admin-dashboard/student",
    icon: PiStudentDuotone,
    delay: 0.3,
  },
  {
    title: "Library",
    path: "/admin-dashboard/library",
    icon: HiBuildingLibrary,
    delay: 0.3,
  },
  {
    title: "Attendance",
    path: "/admin-dashboard/attendance",
    icon: GrNotes,
    delay: 0.5,
  },
  {
    title: "Exam",
    path: "/admin-dashboard/exam",
    icon: PiExamDuotone,
    delay: 0.6,
  },
  {
    title: "Notice",
    path: "/admin-dashboard/notice",
    icon: LuNotepadText,
    delay: 0.7,
  },
  {
    title: "Setting",
    path: "/admin-dashboard/setting",
    icon: IoSettings,
    delay: 0.8,
  },
  {
    title: "Logout",
    path: "/login",
    icon: IoLogOut,
    delay: 0.8,
  },
];

export const TeacherList = [
  {
    title: "Dashboard",
    path: "/teacher-dashboard",
    icon: MdDashboard,
    delay: 0.1,
  },
  {
    title: "Library",
    path: "/teacher-dashboard/library",
    icon: HiBuildingLibrary,
    delay: 0.3,
  },
  {
    title: "Attendance",
    path: "/teacher-dashboard/attendance",
    icon: GrNotes,
    delay: 0.5,
  },
  {
    title: "Exam",
    path: "/teacher-dashboard/exam",
    icon: PiExamDuotone,
    delay: 0.6,
  },
  {
    title: "Notice",
    path: "/teacher-dashboard/notice",
    icon: LuNotepadText,
    delay: 0.7,
  },
  {
    title: "Setting",
    path: "/teacher-dashboard/setting",
    icon: IoSettings,
    delay: 0.8,
  },
  {
    title: "Logout",
    path: "/login",
    icon: IoLogOut,
    delay: 0.8,
  },
];
export const StudentList = [
  {
    title: "Dashboard",
    path: "/student-dashboard",
    icon: MdDashboard,
    delay: 0.1,
  },
  {
    title: "Library",
    path: "/student-dashboard/library",
    icon: HiBuildingLibrary,
    delay: 0.3,
  },
  {
    title: "Attendance",
    path: "/student-dashboard/attendance",
    icon: GrNotes,
    delay: 0.5,
  },
  {
    title: "Exam",
    path: "/student-dashboard/exam",
    icon: PiExamDuotone,
    delay: 0.6,
  },
  {
    title: "Notice",
    path: "/student-dashboard/notice",
    icon: LuNotepadText,
    delay: 0.7,
  },
  {
    title: "Setting",
    path: "/student-dashboard/setting",
    icon: IoSettings,
    delay: 0.8,
  },
  {
    title: "Logout",
    path: "/login",
    icon: IoLogOut,
    delay: 0.8,
  },
];

export const cardData = [
  {
    title: "Students",
    subtitle: "1500",
    Icon: PiStudentDuotone,
    color: "text-blue-600",
  },
  {
    title: "Teachers",
    subtitle: "75",
    Icon: FaChalkboardTeacher,
    color: "text-purple-500",
  },
  { title: "Awards", subtitle: "210", Icon: FaAward, color: "text-orange-400" },
  {
    title: "Books",
    subtitle: "3.5k",
    Icon: FaBookAtlas,
    color: "text-green-600",
  },
];

export const cardDataStudent = [
  {
    title: "Grade 05",
    subtitle: "450",
    Icon: PiStudentDuotone,
    color: "text-blue-600",
  },
  {
    title: "O/L",
    subtitle: "750",
    Icon: PiStudentDuotone,
    color: "text-purple-500",
  },
  {
    title: "A/L",
    subtitle: "300",
    Icon: PiStudentDuotone,
    color: "text-green-600",
  },
];
