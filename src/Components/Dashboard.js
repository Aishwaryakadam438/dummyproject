

      import React, { useState } from "react";

function Dashboard() {
  const [progress] = useState(655);

  return (
    <div className="p-6">
      <h1 className="text-lg">Hi Aishwarya 👋 Your progress so far</h1>

      {/* Progress Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <p>You have unlocked interest in Full Stack Web Development.</p>
          <span style={{ background: "#dcfce7", color: "#166534", padding: "6px 10px", borderRadius: "6px" }}>
            {progress}/1200 Points
          </span>
        </div>

        {/* Timeline */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: '${(progress / 1200) * 100}% '}}
            ></div>
          </div>
          <div className="flex" style={{ justifyContent: "space-between", marginTop: "6px", fontSize: "13px", color: "#666" }}>
            <span>Start</span>
            <span>Dec 24, 2025</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid">
        <div className="card">
          <h3>Campus Drive - Arch</h3>
          <p>Coming soon</p>
        </div>
        <div className="card">
          <h3>Corporate Captain</h3>
          <p>Register now</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;