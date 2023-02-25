import React from "react";
import logo from '../assets/logo.svg'
import './styles/navbar.css'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
        <img src ={logo} className = 'logo'/>


        <h1>Jcode</h1>
      
     <Link to = './playground.jsx'><h3>Community</h3></Link>

        <h4>Pricing</h4>
        <h6>Feature</h6>
        <h9>Support</h9>



        <button className="start">
            <h7>Get started</h7>
        </button>

        <button className="login">
            <h8>Log in</h8>
        </button>

        </div>
    )
}




const Navbar = () => {
    return(
        <div className="nav">
    
                <Navigation/>

 
        </div>
    )
}

export default Navbar

