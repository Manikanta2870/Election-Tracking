import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!mobile || !password) {
      alert("Please enter mobile number and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.mobile === mobile && u.password === password
    );

    if (!user) {
      alert("Invalid mobile number or password");
      return;
    }

    localStorage.setItem("userRole", user.role);
    navigate(`/${user.role}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      {/* Big App Name */}
      <h1 className="text-5xl font-extrabold text-blue-800 mb-8 tracking-wide">
        Election Tracking
      </h1>

      {/* Login Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-blue-700 text-center">
          Login
        </h2>

        {/* Mobile Number */}
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm">
          New user?{" "}
          <Link to="/register" className="text-blue-700 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;