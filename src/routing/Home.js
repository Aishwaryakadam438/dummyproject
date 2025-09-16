import { use } from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>
{
    const navigate=useNavigate();//Initialize the useNavigate hook
    const goToAbout = ()=>{
        navigate("/about");//Navigate to the "About" page
    };
    return(
        <div>
            <h2>Home page</h2>
            <button onClick={goToAbout}>GO to About Page</button>
            </div>
    );
    // return(<div
    //     style={{color:"maroon",backgroundColor:"orange"}}>
    //         <h1>This is home page</h1>
    //         {/* <img src={require('/.image1.jpeg')}
    //         alt="Image Not Found" width={400} height={300}/> */}
    //     </div>
    
}
export default Home;