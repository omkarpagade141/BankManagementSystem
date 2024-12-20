import React from "react";

const HomePage = () => {
  const bankName = "Global Bank"; // Example bank name
  const branchName = "Main Branch"; // Example branch name
  const userName = "John Doe"; // Example user name

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome to {bankName}</h1>
          <div className="text-lg">Branch: {branchName}</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome, {userName}!
            </h2>
            <p className="text-lg text-gray-600">
              We're glad to have you on board. This is your bank's main dashboard. You can explore various functionalities from here based on your role.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Account Overview</h3>
                <p className="mt-2">View your account balance and details.</p>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Branch Services</h3>
                <p className="mt-2">Learn about services offered by the branch.</p>
              </div>
              <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Customer Support</h3>
                <p className="mt-2">Get help with your banking inquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} {bankName}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
