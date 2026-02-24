import { useState } from "react";

function ObserverReport() {
  const [report, setReport] = useState({
    type: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!report.type || !report.location || !report.description) {
      alert("Please fill all fields");
      return;
    }

    const existingReports =
      JSON.parse(localStorage.getItem("observerReports")) || [];

    existingReports.push(report);

    localStorage.setItem(
      "observerReports",
      JSON.stringify(existingReports)
    );

    alert("Anomaly reported successfully!");

    setReport({
      type: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Report Election Anomaly
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="type"
          placeholder="Type of anomaly (Fraud, Delay, Violence...)"
          value={report.type}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={report.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Describe the anomaly"
          value={report.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition duration-200">
  Submit Report
</button>
      </form>
    </div>
  );
}

export default ObserverReport;