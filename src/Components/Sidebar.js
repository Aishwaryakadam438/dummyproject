// Sidebar.js
import React from "react";

function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <h1>WINGS</h1>
      <ul>
        <li onClick={() => setActivePage("Dashboard")}>Dashboard</li>
        <li onClick={() => setActivePage("My Tasks")}>My Tasks</li>
        <li onClick={() => setActivePage("Projects")}>Projects</li>
        <li onClick={() => setActivePage("Messages")}>Messages</li>
      </ul>
    </div>
  );
}

export default Sidebar;


// import React from "react";

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h1>WINGS</h1>
//       <ul>
//         <li>Dashboard</li>
//         <li>My Tasks</li>
//         <li>Projects</li>
//         <li>Messages</li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

// import React from "react";

// const Sidebar = () => {
//   const menuItems = [
//     "Dashboard",
//     "My Tasks",
//     "Projects & Courses",
//     "Interview Preparation",
//     "Job Opening Quizzes",
//     "Calendar",
//     "Refer & Earn",
//     "My Journey"
//   ];

//   return (
//     <div className="w-64 bg-black text-white p-5">
//       <h1 className="text-2xl font-bold text-green-400 mb-8">WINGZ</h1>
//       <ul className="space-y-4">
//         {menuItems.map((item, index) => (
//           <li
//             key={index}
//             className="cursor-pointer hover:bg-gray-800 p-2 rounded-lg"
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;