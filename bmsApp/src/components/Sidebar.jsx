// components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-5">
      <h2 className="text-2xl font-bold mb-6">Horizon</h2>
      <ul className="space-y-4">
        <li className="text-gray-700 font-medium">Home</li>
        <li className="text-gray-700 font-medium">My Banks</li>
        <li className="text-gray-700 font-medium">Transaction History</li>
        <li className="text-gray-700 font-medium">Payment Transfer</li>
        <li className="text-gray-700 font-medium">Connect Bank</li>
      </ul>
      <div className="absolute bottom-5 text-center w-full">
        <p className="text-sm text-gray-500">Adrian Hajdin</p>
        <p className="text-sm text-gray-400">adrian@jsmastery.pro</p>
      </div>
    </div>
  );
};

export default Sidebar;
