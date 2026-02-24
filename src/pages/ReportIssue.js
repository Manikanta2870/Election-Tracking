import { useState } from "react";

function ReportIssue() {
  const [issue, setIssue] = useState({
    title: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!issue.title || !issue.location || !issue.description) {
      alert("Please fill all fields");
      return;
    }

    // Get existing issues
    const existingIssues =
      JSON.parse(localStorage.getItem("issues")) || [];

    // Add new issue
    existingIssues.push(issue);

    // Save back
    localStorage.setItem("issues", JSON.stringify(existingIssues));

    alert("Issue reported successfully!");

    // Clear form
    setIssue({
      title: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        Report Election Issue
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Issue Title"
          value={issue.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Polling Location"
          value={issue.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Describe the issue"
          value={issue.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

      <button className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition duration-200">
  Submit Issue
</button>
      </form>
    </div>
  );
}

export default ReportIssue;