import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        userName,
        password,
      });

      if (response.status === 200) {
        sessionStorage.setItem("role", response.data.user.role);
        sessionStorage.setItem("jwttoken", response.data.jwtToken);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data || "Login failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 bg-gray-200 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2830/2830284.png"
              alt="Logo"
              className="mx-auto h-10 w-10"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Sign in</h2>
            <p className="text-gray-500">Please enter your details.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your user name"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Don't have an account?
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      <div
        className="flex-1 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3314113/pexels-photo-3314113.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      ></div>
    </div>
  );
};

export default Login;
