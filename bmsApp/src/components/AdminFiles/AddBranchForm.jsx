import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const AddBranchForm = () => {
  const [branchName, setBranchName] = useState("");
  const [branchCode, setBranchCode] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [nameStatus, setNameStatus] = useState("");
  const [codeStatus, setCodeStatus] = useState("");
  const [allBranches, setAllBranches] = useState([]);

  useEffect(() => {
    const getAllBranches = async () => {
      try {
        const response = await axiosInstance.get("/branch/allbranchlist");
          // console.log(response.data);
          
        if (response.status === 200) {
          setAllBranches(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllBranches();
  }, []);

  const handleBranchNameChange = (e) => {
    const name = e.target.value; // Do not trim while typing
    setBranchName(name);

    // Check trimmed name for validation
    const trimmedName = name.trim();
    if (trimmedName.length > 0) {
      const branchExists = allBranches.some(
        (branch) => branch.branchName.trim().toLowerCase() === trimmedName.toLowerCase()
      );
      setNameStatus(branchExists ? "unavailable" : "available");
    } else {
      setNameStatus("");
    }
  };

  const handleBranchCodeChange = (e) => {
    const code = e.target.value; // Do not trim while typing
    setBranchCode(code);

    // Check trimmed code for validation
    const trimmedCode = code.trim();
    if (trimmedCode.length > 0) {
      const codeExists = allBranches.some(
        (branch) => branch.branchIFSC.trim().toLowerCase() === trimmedCode.toLowerCase()
      );
      setCodeStatus(codeExists ? "unavailable" : "available");
    } else {
      setCodeStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate with trimmed values
    const trimmedBranchName = branchName.trim();
    const trimmedBranchCode = branchCode.trim();
    const trimmedBranchAddress = branchAddress.trim();

    if (trimmedBranchName === "" || trimmedBranchCode === "") {
      alert("Branch name and IFSC code cannot be empty.");
      return;
    }

    if (nameStatus === "unavailable") {
      alert("Branch name is already in use. Please choose a different name.");
      return;
    }

    if (codeStatus === "unavailable") {
      alert("IFSC code is already in use. Please choose a different code.");
      return;
    }

    try {
      const newBranch = {
        branchName: trimmedBranchName,
        branchIFSC: trimmedBranchCode,
        branchAddress: trimmedBranchAddress,
      };
      const response = await axiosInstance.post("/branch/addbranch", newBranch);
        console.log(response.data);
        
      if (response.status === 200) {
        alert("Branch added successfully!");
        setBranchName("");
        setBranchCode("");
        setBranchAddress("");
        setNameStatus("");
        setCodeStatus("");
      }
    } catch (error) {
      console.log(error);
      alert("Error adding branch.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Branch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="branchName" className="block text-sm font-medium text-gray-700">
            Branch Name
          </label>
          <input
            type="text"
            id="branchName"
            className="mt-1 p-1 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter branch name"
            value={branchName}
            onChange={handleBranchNameChange}
          />
          {nameStatus && (
            <p
              className={`text-sm mt-1 ${
                nameStatus === "available" ? "text-green-500" : "text-red-500"
              }`}
            >
              {nameStatus === "available" ? "Branch name is available" : "Branch name is not available"}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="branchCode" className="block text-sm font-medium text-gray-700">
            Branch IFSC Code
          </label>
          <input
            type="text"
            id="branchCode"
            className="mt-1 p-1 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter branch IFSC code"
            value={branchCode}
            onChange={handleBranchCodeChange}
          />
          {codeStatus && (
            <p
              className={`text-sm mt-1 ${
                codeStatus === "available" ? "text-green-500" : "text-red-500"
              }`}
            >
              {codeStatus === "available" ? "Branch code is available" : "Branch code is not available"}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="branchAddress" className="block text-sm font-medium text-gray-700">
            Branch Address
          </label>
          <textarea
            id="branchAddress"
            className="mt-1 p-1 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter branch address"
            rows="2"
            value={branchAddress}
            onChange={(e) => setBranchAddress(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-700 text-white py-2 rounded-md shadow hover:bg-blue-600 transition-all"
        >
          Add Branch
        </button>
      </form>
    </div>
  );
};

export default AddBranchForm;
