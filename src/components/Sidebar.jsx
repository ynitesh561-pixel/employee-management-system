import { Link } from "react-router-dom";
import { FaUsers, FaUserPlus, FaTasks } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      <ul>
        <li>
          <Link to="/">
            <FaUsers /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/add-employee">
            <FaUserPlus /> Add Employee
          </Link>
        </li>

        <li>
          <Link to="/manage-employees">
            <FaTasks /> Manage Employees
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;