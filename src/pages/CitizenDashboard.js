import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function CitizenDashboard() {
  return (
    <Layout title="Citizen Dashboard">
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Report Issue</h2>
          <p className="text-gray-600 mb-4">
            Report any election fraud or irregularities.
          </p>
          <Link
            to="/report"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Report Now
          </Link>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Civic Participation</h2>
          <p className="text-gray-600">
            Stay informed and participate responsibly.
          </p>
        </div>

      </div>
    </Layout>
  );
}

export default CitizenDashboard;