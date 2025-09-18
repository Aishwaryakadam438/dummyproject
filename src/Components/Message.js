// Messages.js
import React from "react";

function Messages() {
  return (
    <div className="p-6">
      <h1 className="text-lg">Messages 💬</h1>
      <div className="grid">
        <div className="card">
          <h3>Message 1</h3>
          <p>From: John Doe — Complete the report</p>
        </div>
        <div className="card">
          <h3>Message 2</h3>
          <p>From: Jane Smith — Meeting rescheduled</p>
        </div>
        <div className="card">
          <h3>Message 3</h3>
          <p>From: Admin — Welcome to the new portal</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;