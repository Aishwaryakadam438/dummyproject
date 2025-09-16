import React from "react";
import { Link } from "react-router-dom";

function Aboutt1() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: "20px", background: "#f0f0f0", padding: "10px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/aboutt1" style={{ marginRight: "15px" }}>Aboutt1</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* About Page Content */}
      <h1>About Page</h1>
      <h2> Aishwarya Ashok Kadam</h2>
    </div>
  );
}

export default Aboutt1;