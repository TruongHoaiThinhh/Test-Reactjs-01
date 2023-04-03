import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css';

function Navbar() {
    const [click , setClick] = useState(false)
    const [button, setButton] = useState(true)

    function handleClick() {
        return setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    // const handleClick = () => setClick(!click);
  return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    THINH <i className='fab fa-typo3'/>
                </Link>
                
                <div className="menu-icon" onClick={() => {setClick(!click)}}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
                            Service
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign-up
                        </Link>
                    </li>

                    {button && <Button buttonStyle='btn-outline'>SIGN UP</Button>}
                </ul>

            
            </div>
        </nav>
    </>
  )
}

export default Navbar
