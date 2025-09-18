import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Dashboard</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button>Add On Courses</button>
        <div className="profile"></div>
      </div>
    </div>
  );
}

export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="bg-white shadow-md p-4 flex justify-between items-center">
//       <h2 className="text-xl font-semibold">Dashboard</h2>
//       <div className="flex items-center space-x-4">
//         <button className="bg-yellow-400 text-black px-3 py-1 rounded-lg">
//           Add On Courses
//         </button>
//         <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;