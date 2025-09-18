
import React, { useState } from "react";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import "./index.css";
import MyTasks from "./Components/MyTask";
import Projects from "./Components/Projects";
import Messages from "./Components/Message";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app-container">
      <Sidebar setActivePage={setActivePage} />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
        {activePage === "Dashboard" && <Dashboard />}
        {/* You can add more pages like: */}
        {activePage === "My Tasks" && <MyTasks />} 
        {activePage === "Projects" && <Projects />} 
        {activePage === "Messages" && <Messages/>} 
      
      </div>
    </div>
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-100">
//         <Navbar />
//         <Dashboard />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import './App.css';
//  import { Navbar } from './routing/Navbar';
// import { Route,Routes } from 'react-router-dom';
// import ContentCard from "./ContactCard/Contact";
//  import Home from './routing/Home';
//  import About from './routing/About';
//  import Nomatch from './routing/Nomatch';
// // import LocationDisplay from './routing/LocationDisplay';
//  import BlogPost from './routing/BlogPost';
// import Contact from "./Project/Contact";
// import Vision_Mission from "./Project/Vision_Mission";
// import { Navbar } from "./Project/Navbar";
// import About from "./Project/About";
// import React from 'react';
// import { ComponentC } from './hooks/ComponentC';

// export const UserContext=React.createContext()
// export const AddressContext=React.createContext()

// function App() {
// return (
//   <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//       <ContentCard
//         title="React Basics"
//         description="Learn the fundamentals of React including components, props, and state."
//         image="https://via.placeholder.com/300x180.png?text=React+Card"/>
//       <ContentCard
//         title="JavaScript ES6"
//         description="Understand modern JavaScript features like arrow functions, async/await, and destructuring."
//         image="https://via.placeholder.com/300x180.png?text=JavaScript+Card"/>

//   {/* // <div className="App">
//   //   <Navbar/>
//   //   <hr></hr>
//   //   <Routes>
//   //       <Route path='/' element={<About/>}></Route>
//   //        <Route path='about' element={<Contact/>}></Route>
//   //       <Route path='about/next' element={<Vision_Mission/>}></Route>
        
//   //      </Routes>  */}
// {/* //       <hr/>
// //      <h2>------------------output of useContext hook-----------------</h2>
// // <UserContext.Provider value={"Ram"}>
// //   <AddressContext.Provider value={'Pune'}>
// //   <ComponentC/>
// //   </AddressContext.Provider>
// // </UserContext.Provider>
// // <hr></hr>
// //      <footer>Powered By ITVEDANT </footer>
      
//       //  <LocationDisplay></LocationDisplay>
//       // <hr></hr> */}
//       {/* <Navbar/>
//       <hr></hr> */}
//       {/* <Routes>
//         <Route path='/' element={<Home/>}></Route>
//          <Route path='about' element={<About/>}></Route>
//         <Route path='about/next' element={<Home/>}></Route>
//         <Route path='*' element={<Nomatch/>}></Route>
//        </Routes>  */}
//       //  <hr></hr>
//       {/* <h1>Specifying and Reading Dynamic parameter using useParams</h1>
//       <hr></hr>
//       <Routes>
//         <Route path="/page/:id"element={<BlogPost/>}/>
//         <Route path="/"element={<Home/>}/>
//         <Route path="about"element={<About/>}></Route>
//         </Routes>
//         <hr></hr>  */}
//        {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>  */}

//  </div>
//   );
//  }

// export default App;
