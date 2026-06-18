import { useState } from "react";
import axios from "axios";

function ManageEmployees({ employees, setEmployees }) {
  const [search, setSearch] = useState("");
  const [editEmployee, setEditEmployee] = useState(null);
  const [message, setMessage] = useState("");

  
  const handleDelete = (id) => {
    const updated = employees.filter((emp) => emp.id !== id);
    setEmployees(updated);

    setMessage("Employee Deleted Successfully ");
    setTimeout(() => setMessage(""), 2000);
  };

  
  const handleEdit = (emp) => {
    setEditEmployee({ ...emp });
  };

  
  const handleUpdate = () => {
    const updatedList = employees.map((emp) =>
      emp.id === editEmployee.id ? editEmployee : emp
    );

    setEmployees(updatedList);
    setEditEmployee(null);

    setMessage("Employee Updated Successfully ");
    setTimeout(() => setMessage(""), 2000);
  };

 
  const filteredEmployees = employees.filter((emp) =>
    `${emp.firstName || ""} ${emp.lastName || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Manage Employees</h2>

      
      {message && (
        <div className="success-toast">
          {message}
        </div>
      )}

     
      <input
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>
                {emp.firstName} {emp.lastName}
              </td>

              <td>{emp.email}</td>

              <td>
                {emp.company?.department || emp.department}
              </td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(emp)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

   
      {editEmployee && (
        <div className="modal-overlay">
          <div className="modal-box">

            <div className="form-header">
              <h3>Edit Employee</h3>

              <button
                className="close-btn"
                onClick={() => setEditEmployee(null)}
              >
                ✖
              </button>
            </div>

            <input
              type="text"
              value={editEmployee.firstName || ""}
              onChange={(e) =>
                setEditEmployee({
                  ...editEmployee,
                  firstName: e.target.value,
                })
              }
            />

            <input
              type="email"
              value={editEmployee.email || ""}
              onChange={(e) =>
                setEditEmployee({
                  ...editEmployee,
                  email: e.target.value,
                })
              }
            />

          
            <input
              type="text"
              placeholder="Department"
              value={
                editEmployee.company?.department ||
                editEmployee.department ||
                ""
              }
              onChange={(e) =>
                setEditEmployee({
                  ...editEmployee,
                  company: {
                    ...editEmployee.company,
                    department: e.target.value,
                  },
                  department: e.target.value,
                })
              }
            />

            <button onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageEmployees;