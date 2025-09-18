import{Link}from'react-router-dom'
export const Navbar=() => {
    const mystyle={backgroundcolor:"gray",color:"black"}
    return(
        <div>
            <nav style={mystyle}>
            <Link to='/'>About</Link>&nbsp;&nbsp;
            <Link to='about'>Contact</Link>&nbsp;&nbsp;
            <Link to='about/next'>Vision_Mission</Link>&nbsp;&nbsp;
            </nav>

        </div>
    )
}