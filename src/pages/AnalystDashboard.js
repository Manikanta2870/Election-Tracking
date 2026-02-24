import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function AnalystDashboard() {
  const [chartData, setChartData] = useState(null);
  const [totalIssues, setTotalIssues] = useState(0);

  useEffect(() => {
    const issues =
      JSON.parse(localStorage.getItem("issues")) || [];

    setTotalIssues(issues.length);

    // Count issues by location
    const locationCount = {};

    issues.forEach((issue) => {
      if (locationCount[issue.location]) {
        locationCount[issue.location]++;
      } else {
        locationCount[issue.location] = 1;
      }
    });

    const data = {
      labels: Object.keys(locationCount),
      datasets: [
        {
          label: "Issues by Location",
          data: Object.values(locationCount),
          backgroundColor: "rgba(37, 99, 235, 0.6)",
          borderRadius: 5
        },
      ],
    };

    setChartData(data);
  }, []);

  return (
    <DashboardLayout title="Data Analyst Dashboard" role="analyst">
      
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Total Issues Reported
        </h2>
        <p className="text-3xl font-bold text-blue-700 mt-2">
          {totalIssues}
        </p>
      </div>

      {chartData && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Issues by Location
          </h2>
          <Bar data={chartData} />
        </div>
      )}

    </DashboardLayout>
  );
}

export default AnalystDashboard;