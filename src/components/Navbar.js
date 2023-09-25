import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import sparkly from './pages/images/sparkle.png'
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState (false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
        }
    };

    return(
        <>
        <nav className="navbar">
            <Link to='/'
            className='navbar-logo'>
                <img className="logo" src={sparkly} width={110}  alt='upang'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ?  'fas fa-bars' : 'fa-solid fa-xmark'} />
                </div>
                <ul  className= {!click ? 'nav-menu active':'nav-menu' }>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            SERVICES
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            ABOUT US
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/book-now' className='nav-links' onClick={closeMobileMenu}>
                            BOOK NOW
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </>
    );
}

export default Navbar;