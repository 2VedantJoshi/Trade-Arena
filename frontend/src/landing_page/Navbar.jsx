import React from 'react'
import { Link } from 'react-router-dom';
import HomePage from './home/HomePage';
function Navbar() {
    return (
        <>
            
                <nav class="navbar navbar-expand-lg  border-bottom p-3 " >
                    <div class="container">
                        <Link class="navbar-brand" to='/'>
                            <img src="images/logo.svg" style={{width:"25%"}} alt="" />
                        </Link>
                        
                        <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item mx-3">
                                    <Link class="nav-link active" aria-current="page" to='/signup'>SignUp</Link>
                                </li>
                                <li class="nav-item mx-3">
                                    <Link class="nav-link active" to='/about'>About</Link>
                                </li>
                                <li class="nav-item mx-3">
                                    <Link class="nav-link active" to='/products'>Products</Link>
                                </li>
                                <li class="nav-item mx-3">
                                    <Link class="nav-link active" to='/pricing'>Pricing</Link>
                                </li>
                                <li class="nav-item mx-3">
                                    <Link class="nav-link active" to='/support'>Support</Link>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link active" href="#"><i class="fa-solid fa-bars"></i></a>
                                </li>
                                
                            </ul>
                           
                        </div>
                    </div>
                </nav>
            
        </>
    );
}

export default Navbar;