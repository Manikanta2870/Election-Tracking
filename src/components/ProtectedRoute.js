import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const userRole = localStorage.getItem("userRole");

  // If no role OR wrong role → go to login
  if (!userRole || userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;