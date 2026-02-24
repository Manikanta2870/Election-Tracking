import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  const logout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  if (!role) return null;

  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Election Tracking</h1>

      <div className="space-x-4">
        <Link to={`/${role}`} className="hover:text-gray-200">
          Dashboard
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;