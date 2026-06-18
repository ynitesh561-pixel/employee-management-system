function Dashboard({ employees }) {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Employees</h3>
          <p>{employees.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;