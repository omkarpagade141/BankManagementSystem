import axios from 'axios';
import useJwtToken from './useJwtToken'; // Import the custom hook for retrieving JWT token

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
  },
});

// Request interceptor to dynamically attach the Bearer token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useJwtToken(); // Get the latest token using the custom hook
    if (token) {
      // console.log(`@#@#@#@#@#@#  Bearer ${token}`);
      config.headers['Authorization'] = `Bearer ${token}`; // Attach the Bearer token
    } else {
      console.log('No token found');
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses and errors
axiosInstance.interceptors.response.use(
  (response) => response, // Allow successful responses
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., expired or invalid token)
      window.location.href = '/'; // Redirect to the login page
    }
    return Promise.reject(error); // Reject the error for further handling
  }
);

export default axiosInstance; // Export the Axios instance as default
