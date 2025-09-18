// Projects.js
import React from "react";

function Projects() {
  return (
    <div className="p-6">
      <h1 className="text-lg">Projects 📂</h1>
      <div className="grid">
        <div className="card">
          <h3>Project 1</h3>
          <p>Full Stack Web Development</p>
        </div>
        <div className="card">
          <h3>Project 2</h3>
          <p>React Dashboard Clone</p>
        </div>
        <div className="card">
          <h3>Project 3</h3>
          <p>Company Website Redesign</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;