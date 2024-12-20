
// Custom hook to manage JWT token stored in sessionStorage
const useJwtToken = () => { 


   const token= sessionStorage.getItem('jwttoken');
  return token; // Return the JWT token
};

export default useJwtToken; // Export the hook as default
