import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
        <div class='top'>
        <div class="menu">
            <nav className="nav-wrapper">
                <div className="container" id="nav">
                    <ul className="right">
                     <li><a href='Homepage.html'>Home</a></li>
                     <li><a href=''>hours</a></li>
                     <li><a href=''>request a truck</a></li>
                     <li><Link to="/">menu</Link></li>
                     <li><a href=''>catering</a></li>
                     <li><a href=''>giftcards</a></li>
                     <li><Link to="../login">Login</Link></li>
                     <li><Link to="/">Shop</Link></li>
                     <li><Link to="/cart">My cart</Link></li>
                     <li><Link to="/cart"></Link></li>
                   </ul>
                </div>   
             </nav>      
             </div>
        </div>
    )
}

export default Navbar;