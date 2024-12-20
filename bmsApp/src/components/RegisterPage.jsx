import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-md">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/3592799/pexels-photo-3592799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image URL
            alt="Signup Illustration"
            className="object-cover w-full h-full rounded-l-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Sign up
          </h2>
          <p className="text-center text-gray-600">
            Please enter your details.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Specific address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="state"
                placeholder="ex: Maharashtra"
                value={formData.state}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Pincode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
