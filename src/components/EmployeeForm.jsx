function EmployeeForm() {
  return (
    <div className="employee-form">
      <h2>Add Employee</h2>

      <form>
        <input type="text" placeholder="Enter Name" />

        <input type="email" placeholder="Enter Email" />

        <input type="text" placeholder="Enter Department" />

        <button type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;