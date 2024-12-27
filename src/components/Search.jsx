import React, { useState } from 'react'
import "./Search.css";
import Pie from './Pie';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  // --------------------
  // fetch Data from DataBase
  const handleSearch = async () => {
    try {
      const URL = `http://localhost:8080/api/students?name=${searchTerm}`;
      const response = await fetch(URL,{
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error("Student not found");
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ name: "Not Found", marks: "N/A" });
    }
  };

  return (
    <>
      <div style={{ Heigth:"400px", padding: "20px", margin: "auto", backgroundColor:'#646cfe',color:'white'}}>
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
          <h1>Search Student Marks</h1>
          <input
            type="text"
            placeholder="Enter student name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <button
            onClick={handleSearch}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#A1D6CB",
              color: "#FFF",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
          {result && (
            <Pie result={result}/>
          )}
        </div>
      </div>
    </>
  )};
