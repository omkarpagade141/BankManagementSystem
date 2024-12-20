import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"; 
import ProtectedRoute from "./components/ProtectedRoute";
import ListAllBranches from "./components/AdminFiles/ListAllBranches";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
