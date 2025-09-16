
import React from "react";
import './App.css';
 import { Navbar } from './routing/Navbar';
import { Route,Routes } from 'react-router-dom';
 import Home from './routing/Home';
 import About from './routing/About';
 import Nomatch from './routing/Nomatch';
// import LocationDisplay from './routing/LocationDisplay';
// import BlogPost from './routing/BlogPost';
// import React from 'react';
// import { ComponentC } from './hooks/ComponentC';

// export const UserContext=React.createContext()
// export const AddressContext=React.createContext()

function App() {
return (
  <div className="App">
{/* //       <hr/>
//      <h2>------------------output of useContext hook-----------------</h2>
// <UserContext.Provider value={"Ram"}>
//   <AddressContext.Provider value={'Pune'}>
//   <ComponentC/>
//   </AddressContext.Provider>
// </UserContext.Provider>
// <hr></hr>
//      <footer>Powered By ITVEDANT </footer>
      
      //  <LocationDisplay></LocationDisplay>
      // <hr></hr> */}
      <Navbar/>
      <hr></hr>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='about' element={<About/>}></Route>
        <Route path='about/next' element={<Home/>}></Route>
        <Route path='*' element={<Nomatch/>}></Route>
       </Routes> 
       <hr></hr>
      <h1>Specifying and Reading Dynamic parameter using useParams</h1>
      <hr></hr>
      <Routes>
        <Route path="/page/:id"element={<BlogPost/>}/>
        <Route path="/"element={<Home/>}/>
        <Route path="about"element={<About/>}></Route>
        </Routes>
        <hr></hr> 
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}

 </div>
  );
 }

export default App;
