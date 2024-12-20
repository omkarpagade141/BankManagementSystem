// components/UserInfo.js
import React from "react";

const UserInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold">Welcome, Adrian</h3>
      <p className="text-gray-500">
        Access & manage your account and transactions efficiently.
      </p>
      <div className="mt-4">
        <div className="text-2xl font-bold">$2,698.12</div>
        <p className="text-gray-400">Total Current Balance</p>
      </div>
      <button className="mt-4 text-blue-500 font-semibold">Add bank</button>
    </div>
  );
};

export default UserInfo;
