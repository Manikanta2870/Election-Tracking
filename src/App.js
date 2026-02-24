import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import CitizenDashboard from "./pages/CitizenDashboard";
import ObserverDashboard from "./pages/ObserverDashboard";
import AnalystDashboard from "./pages/AnalystDashboard";
import ReportIssue from "./pages/ReportIssue";
import AdminIssues from "./pages/AdminIssues";
import ObserverReport from "./pages/ObserverReport";
import ProtectedRoute from "./components/ProtectedRoute";

/* Hide Navbar on Login & Register pages */
function AppLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/issues"
          element={
            <ProtectedRoute role="admin">
              <AdminIssues />
            </ProtectedRoute>
          }
        />

        {/* Citizen */}
        <Route
          path="/citizen"
          element={
            <ProtectedRoute role="citizen">
              <CitizenDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/report"
          element={
            <ProtectedRoute role="citizen">
              <ReportIssue />
            </ProtectedRoute>
          }
        />

        {/* Observer */}
        <Route
          path="/observer"
          element={
            <ProtectedRoute role="observer">
              <ObserverDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/observer/report"
          element={
            <ProtectedRoute role="observer">
              <ObserverReport />
            </ProtectedRoute>
          }
        />

        {/* Analyst */}
        <Route
          path="/analyst"
          element={
            <ProtectedRoute role="analyst">
              <AnalystDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;