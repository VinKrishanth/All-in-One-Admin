import React, { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import SidebarMenu from './SidebarMenu'
import Logo from './Logo'
import IconButton from "../button/IconButton";
import { IoLogOut } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({navList = []}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); 
  const { logout } = useAuth(); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth <= 768 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div style={{ overflow: "hidden", maxHeight: "100vh" }}>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenu className="scale-[1.75] h-5 w-5 m-2"/>
      </button>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        ref={sidebarRef} 
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform    ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0  `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-sb-primary relative">
          <Logo />
          <ul className="space-y-2 font-medium py-4">
            <SidebarMenu navList={navList} />
          </ul>
          <IconButton 
            Icon={IoLogOut}
            onClick={logout}
            label={'Log Out'}
          />
        </div>
      </aside> 
    </div>
  );
};

export default Sidebar;