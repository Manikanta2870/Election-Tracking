import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function ObserverDashboard() {
  return (
    <Layout title="Observer Dashboard">
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Report Anomaly</h2>
          <p className="text-gray-600 mb-4">
            Report fraud, delays, or any suspicious activity.
          </p>
          <Link
            to="/observer/report"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Report Now
          </Link>
        </div>

      </div>
    </Layout>
  );
}

export default ObserverDashboard;