import React, { useEffect, useState } from "react";
import { employees } from "./data.js";

const App = () => {
  const [employeesData, setEmployeesData] = useState(employees);
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(inputText);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputText]);

  useEffect(() => {
    if (!query) {
      setEmployeesData(employees);
      return;
    }

    const filteredData = employees.filter(
      (emp) =>
        emp?.name.toLowerCase().includes(query.toLowerCase()) ||
        emp?.email.toLowerCase().includes(query.toLowerCase()) ||
        emp?.department.toLowerCase().includes(query.toLowerCase()) ||
        emp?.role.toLowerCase().includes(query.toLowerCase()),
    );
    setEmployeesData(filteredData);
  }, [query]);

  const handleChange = (text) => {
    setInputText(text);
  };

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search here..."
          value={inputText}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <div className="container">
        {employeesData.map((emp) => (
          <div key={emp?.id} className="empData">
            <h2>{emp?.name}</h2>
            <h4>{emp?.email}</h4>
            <h4>{emp?.department}</h4>
            <h5>{emp?.role}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
