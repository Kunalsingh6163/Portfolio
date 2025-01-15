import { Link, NavLink } from "react-router-dom";

function Appbar() {
  return (
    <div className="flex justify-end items-center shadow-md sticky top-0 z-50 bg-gray-50">
      <nav className="flex items-center space-x-6 p-8">
        <Link
          to="/"
          className="text-lg font-semibold text-gray-800 hover:text-orange-600 duration-200"
        >
          Login
        </Link>
        <ul className="flex space-x-6 px-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium duration-200 ${
                  isActive
                    ? "text-orange-600 underline"
                    : "text-gray-700 hover:text-orange-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `text-lg font-medium duration-200 ${
                  isActive
                    ? "text-orange-600 underline"
                    : "text-gray-700 hover:text-orange-600"
                }`
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-medium duration-200 ${
                  isActive
                    ? "text-orange-600 underline"
                    : "text-gray-700 hover:text-orange-600"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                `text-lg font-medium duration-200 ${
                  isActive
                    ? "text-orange-600 underline"
                    : "text-gray-700 hover:text-orange-600"
                }`
              }
            >
              Certificates
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Appbar;
