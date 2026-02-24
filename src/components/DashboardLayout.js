import { Link, useNavigate } from "react-router-dom";

function DashboardLayout({ title, role, children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Election Tracking</h2>

        <div className="space-y-3">
          <Link
            to={`/${role}`}
            className="block hover:bg-blue-700 p-2 rounded"
          >
            Dashboard
          </Link>

          {/* Role-based links */}
          {role === "admin" && (
            <Link
              to="/admin/issues"
              className="block hover:bg-blue-700 p-2 rounded"
            >
              View Issues
            </Link>
          )}

          {role === "citizen" && (
            <Link
              to="/report"
              className="block hover:bg-blue-700 p-2 rounded"
            >
              Report Issue
            </Link>
          )}

          {role === "observer" && (
            <Link
              to="/observer/report"
              className="block hover:bg-blue-700 p-2 rounded"
            >
              Report Anomaly
            </Link>
          )}
        </div>

        <button
          onClick={logout}
          className="mt-10 bg-red-500 px-4 py-2 rounded hover:bg-red-600 w-full"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;