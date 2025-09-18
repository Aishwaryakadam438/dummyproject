// MyTasks.js
import React from "react";

function MyTasks() {
  return (
    <div className="p-6">
      <h1 className="text-lg">My Tasks 📝</h1>
      <div className="grid">
        <div className="card">
          <h3>Task 1</h3>
          <p>Complete Dashboard integration</p>
        </div>
        <div className="card">
          <h3>Task 2</h3>
          <p>Fix Navbar CSS issues</p>
        </div>
        <div className="card">
          <h3>Task 3</h3>
          <p>Prepare project report</p>
        </div>
      </div>
    </div>
  );
}

export default MyTasks;