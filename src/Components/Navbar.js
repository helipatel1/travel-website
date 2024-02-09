import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from "./Button";
import "./Navbar.css"

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const links = [
        {
            id: 1,
            path: "/",
            name: "Home"
        },
        {
            id: 2,
            path: "/services",
            name: "Services"
        },
        {
            id: 3,
            path: "/products",
            name: "Products"
        },
        {
            id: 4,
            path: "/sign-up",
            name: "Sign Up"
        }
    ]
    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL
                        {/* <FontAwesomeIcon icon={fa} /> */}
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"} >
                        {links.map((items) => (
                            <li className="nav-items" key={items.id}>
                                <Link to={items.path} className={items.name === "Sign Up" ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>{items.name}</Link>
                            </li>
                        ))}
                    </ul>
                    {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar