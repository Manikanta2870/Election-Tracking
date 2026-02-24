import { useEffect, useState } from "react";

function AdminIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const storedIssues =
      JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(storedIssues);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Reported Issues
      </h1>

      {issues.length === 0 ? (
        <p>No issues reported yet.</p>
      ) : (
        <div className="space-y-4">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow bg-white"
            >
              <h3 className="font-bold text-lg">{issue.title}</h3>
              <p><strong>Location:</strong> {issue.location}</p>
              <p><strong>Description:</strong> {issue.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminIssues;