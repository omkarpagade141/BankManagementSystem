import { useState, useEffect } from "react";
import { FaBars, FaHome, FaSignOutAlt, FaBuilding, FaUserPlus } from "react-icons/fa"; // Example icons
import AdminDashboard from "./AdminFiles/AdminDashboard";
import arrowimage from "../assets/arrow.png";
import AddBranchForm from "./AdminFiles/AddBranchForm";
import AddEmployeeForm from "./AdminFiles/AddEmployeeForm";
import ListAllBranches from "./AdminFiles/ListAllBranches";

const Dashboard = () => {
  const [open, setOpen] = useState(false); // Sidebar open/close for desktop
  const [activePage, setActivePage] = useState("home");
  const [userRole, setUserRole] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false); // For mobile toggle

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    setUserRole(role); 
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    setSidebarVisible(false); // Close sidebar after selection (for mobile)
  };

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return (
          <>
            {userRole === "ADMIN" && <AdminDashboard handlePageChange={handlePageChange}/>}
          </>
        );
      case "addBranch":
        return(
          <>
          {userRole == "ADMIN" && <AddBranchForm />}
          </>
        ) ;
        case "listBranches":
        return(
          <>
          {userRole == "ADMIN" && <ListAllBranches />}
          </>
        ) ;
      case "addEmployee":
        return <AddEmployeeForm />;
      case "logout":
        return <h1>Logging out...</h1>;
      default:
        return <h1>Homepage</h1>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Menu Button for Mobile */}
      <div
        className="fixed top-7 right-7 z-50 p-2 rounded-md shadow-md text-white text-3xl lg:hidden cursor-pointer"
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      >
        <FaBars />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative z-40 bg-dark-purple h-screen transition-all duration-300 
          ${isSidebarVisible || open ? "w-60" : "w-16"} 
          ${isSidebarVisible ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Toggle Button (Desktop Only) */}
        <img
          className={`absolute cursor-pointer right-3 top-9 w-7 border-2 border-dark-purple rounded-full hidden lg:block
          ${open ? "" : "transform rotate-180"}`}
          src={arrowimage}
          alt="toggle"
          onClick={() => setOpen(!open)}
        />
        <br />
        <br />

        {userRole === "ADMIN" && (
          <div className="flex flex-col items-center mt-10">
            <button
              className="w-full text-white flex items-center py-2 px-4 my-2 rounded-md hover:shadow-[0px_0px_15px_5px_rgba(0,0,255,0.5)] focus:outline-none transition-all"
              onClick={() => handlePageChange("home")}
            >
              <FaHome className="mr-3 text-xl" />
              {(open || isSidebarVisible) && <span>Home</span>}
            </button>

            <button
              className="w-full text-white flex items-center py-2 px-4 my-2 rounded-md hover:shadow-[0px_0px_15px_5px_rgba(0,0,255,0.5)] focus:outline-none transition-all"
              onClick={() => handlePageChange("addBranch")}
            >
              <FaBuilding className="mr-3 text-xl" />
              {(open || isSidebarVisible) && <span>Add New Branch</span>}
            </button>

            <button
              className="w-full text-white flex items-center py-2 px-4 my-2 rounded-md hover:shadow-[0px_0px_15px_5px_rgba(0,0,255,0.5)] focus:outline-none transition-all"
              onClick={() => handlePageChange("addEmployee")}
            >
              <FaUserPlus className="mr-3 text-xl" />
              {(open || isSidebarVisible) && <span>Add New Employee</span>}
            </button>

            <button
              className="w-full text-white flex items-center py-2 px-4 my-2 rounded-md hover:shadow-[0px_0px_15px_5px_rgba(0,0,255,0.5)] focus:outline-none transition-all"
              onClick={() => handlePageChange("logout")}
            >
              <FaSignOutAlt className="mr-3 text-xl" />
              {(open || isSidebarVisible) && <span>Logout</span>}
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
