import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const AddEmployeeForm = () => {
  const [allBranches, setAllBranches] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [branchId, setBranch] = useState(null);

  useEffect(() => {
    const getAllBranches = async () => {
      try {
        const response = await axiosInstance.get("/branch/allbranchlist");
        console.log(response.data);
        
        if (response.status === 200) {
          setAllBranches(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllBranches();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!name || !contact || !email || !role || !branchId) {
      alert("All fields are required.");
      return;
    }

    const newEmployee = {
      name,
      contact, 
      email, 
      role,
      branchId
    };

    try {
      const response = await axiosInstance.post("/user/adduser", newEmployee);
      if (response.status === 200) {
        alert("Employee added successfully!");
        // Reset form
        setName("");
        setContact("");
        setEmail("");
        setRole("");
        setBranch(null);
      }
    } catch (error) {
      console.log(error.response.data);
      alert(`${error.response.data}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">
            Employee Name
          </label>
          <input
            type="text"
            id="employeeName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter employee name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="employeeEmail" className="block text-sm font-medium text-gray-700">
            Employee Email
          </label>
          <input
            type="email"
            id="employeeEmail"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter employee email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="employeeContact" className="block text-sm font-medium text-gray-700">
            Employee Contact
          </label>
          <input
            minLength={10}
            maxLength={10}
            type="tel"
            id="employeeContact"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter employee contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="employeeRole" className="block text-sm font-medium text-gray-700">
            Assign Role
          </label>
          <select
            id="employeeRole"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="MANAGER">MANAGER</option>
            <option value="CLERK">CLERK</option>
            <option value="CASHIER">CASHIER</option>
            <option value="HELPER">HELPER</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="employeeBranch" className="block text-sm font-medium text-gray-700">
            Assign Branch
          </label>
          <select
            id="employeeBranch"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={branchId || ""}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="">Select Branch</option>
            {allBranches.map((branch) => (
              <option value={branch.branchId} key={branch.branchId}>
                {branch.branchName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-700 text-white py-2 rounded-md shadow hover:bg-green-600 transition-all"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
