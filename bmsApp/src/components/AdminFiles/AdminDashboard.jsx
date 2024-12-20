import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const AdminDashboard = ({handlePageChange}) => {
  const [branchesCount, setBranchesCount] = useState([]);
  const [employeesCount, setEmployeesCount] = useState(34);
  const [accountsCount, setAccountsCount] = useState(1245);
  const [loansCount, setLoansCount] = useState(237);
  const [transactionsCount, setTransactionsCount] = useState(5432);


  useEffect(() => {
    const getAllBranches = async () => {
      try {
        const response = await axiosInstance.get("/branch/allbranchlist");
          // console.log(response.data);
          
        if (response.status === 200) {
          setBranchesCount(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllBranches();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-indigo-700 text-white p-4">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm">Welcome to the admin dashboard of the banking system</p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
        onClick={()=>handlePageChange("listBranches")}
        >
          <h2 className="text-xl font-semibold text-gray-700">Branches</h2>
          <p className="text-3xl font-bold text-indigo-600">{branchesCount.length}</p>
          <p className="text-gray-500">Total number of branches</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Employees</h2>
          <p className="text-3xl font-bold text-indigo-600">{employeesCount}</p>
          <p className="text-gray-500">Total number of employees</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Accounts</h2>
          <p className="text-3xl font-bold text-indigo-600">{accountsCount}</p>
          <p className="text-gray-500">Total active accounts</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Loans</h2>
          <p className="text-3xl font-bold text-indigo-600">{loansCount}</p>
          <p className="text-gray-500">Total number of loans issued</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Transactions</h2>
          <p className="text-3xl font-bold text-indigo-600">{transactionsCount}</p>
          <p className="text-gray-500">Total number of transactions</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Pending Approvals</h2>
          <p className="text-3xl font-bold text-indigo-600">50</p>
          <p className="text-gray-500">Total pending approvals for loans and accounts</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Activity</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">New account created</td>
                <td className="py-2 px-4">2024-12-10</td>
                <td className="py-2 px-4 text-green-500">Success</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Loan approval</td>
                <td className="py-2 px-4">2024-12-09</td>
                <td className="py-2 px-4 text-red-500">Pending</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Branch opened</td>
                <td className="py-2 px-4">2024-12-08</td>
                <td className="py-2 px-4 text-green-500">Success</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
