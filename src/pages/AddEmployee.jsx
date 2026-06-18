import { useState } from "react";
import axios from "axios";

function AddEmployee({ employees, setEmployees }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://dummyjson.com/users/add",
        {
          firstName: name,
          email: email,
          company: {
            department: department,
          },
        }
      );

      const newEmployee = {
        id: res.data.id || Date.now(),
        firstName: name,
        email,
        company: {
          department,
        },
        salary,
      };

      setEmployees([...employees, newEmployee]);

      setMessage("Employee Added Successfully ✅");

      setTimeout(() => {
        setMessage("");
      }, 2000);

      setName("");
      setEmail("");
      setDepartment("");
      setSalary("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="employee-form">

     
      <div className="form-header">
        <h2>Add Employee</h2>
      </div>

    
      {message && (
        <div className="success-toast">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />


        <button type="submit">
          Add Employee
        </button>

      </form>
    </div>
  );
}

export default AddEmployee;