import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    role: "citizen",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    // Validation
    if (!form.name || !form.mobile || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // Mobile validation (10 digits)
    if (form.mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if mobile already registered
    const exists = users.find((u) => u.mobile === form.mobile);
    if (exists) {
      alert("Mobile number already registered");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4 text-blue-700 text-center">
          Register
        </h1>

        {/* Name */}
        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
        />

        {/* Mobile */}
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
        />

        {/* Role */}
        <select
          name="role"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        >
          <option value="admin">Admin</option>
          <option value="citizen">Citizen</option>
          <option value="observer">Observer</option>
          <option value="analyst">Analyst</option>
        </select>

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;