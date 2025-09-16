import{Link}from'react-router-dom'
export const Navbar=() => {
    const mystyle={backgroundcolor:"gray",color:"black"}
    return(
        <div>
            <nav style={mystyle}>
            <Link to='/'>Home</Link>&nbsp;&nbsp;
            <Link to='about'>About</Link>&nbsp;&nbsp;
            <Link to='about/next'>next page</Link>&nbsp;&nbsp;
            </nav>

        </div>
    )
}