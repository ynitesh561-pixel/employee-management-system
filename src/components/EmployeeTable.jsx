function EmployeeTable() {
  return (
    <div className="table-container">
      <h2>Employee List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Nitesh</td>
            <td>nitesh@gmail.com</td>
            <td>IT</td>
            <td>25000</td>
            <td>
              <button className="edit-btn">
                Edit
              </button>

              <button className="delete-btn">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;