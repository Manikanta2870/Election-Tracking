import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { FaExclamationTriangle, FaUserShield, FaCheckCircle } from "react-icons/fa";

function AdminDashboard() {
  const [totalIssues, setTotalIssues] = useState(0);
  const [totalObserverReports, setTotalObserverReports] = useState(0);

  useEffect(() => {
    const issues =
      JSON.parse(localStorage.getItem("issues")) || [];
    const observerReports =
      JSON.parse(localStorage.getItem("observerReports")) || [];

    setTotalIssues(issues.length);
    setTotalObserverReports(observerReports.length);
  }, []);

  return (
    <DashboardLayout title="Admin Dashboard" role="admin">
      
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">

        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition flex items-center gap-4">
          <FaExclamationTriangle className="text-red-500 text-3xl" />
          <div>
            <p className="text-gray-600">Total Issues</p>
            <h2 className="text-2xl font-bold text-blue-700">
              {totalIssues}
            </h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition flex items-center gap-4">
          <FaUserShield className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-gray-600">Observer Reports</p>
            <h2 className="text-2xl font-bold text-blue-700">
              {totalObserverReports}
            </h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition flex items-center gap-4">
          <FaCheckCircle className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-600">System Status</p>
            <h2 className="text-green-600 font-bold">
              Active
            </h2>
          </div>
        </div>

      </div>

      {/* Actions */}
      <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-4">
          Admin Actions
        </h2>

        <Link
          to="/admin/issues"
          className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition"
        >
          View Reported Issues
        </Link>
      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;