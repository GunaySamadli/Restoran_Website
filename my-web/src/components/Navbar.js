import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const [active, setActive] = useState(false)

    const toogleNavbar = () => {
        setActive(!active)
    }

    return (
        <div className='navbar'  >
            <div className='leftSide'>
                <h1 className='navbar-brand'>
                    <i className="fa fa-utensils me-3"></i>
                    Restoran
                </h1>
            </div>
            <div className={active ? "rightSide active" : "rightSide "}>
                <Link to="/" >
                    <h1>Home</h1>
                </Link>
                <Link to="/about" >
                    <h1>About</h1>
                </Link>
                <Link to="/service" >
                    <h1>Service</h1>
                </Link>
                <Link to="/menu" >
                    <h1>Menu</h1>
                </Link>
                <Link to="/contact" >
                    <h1>Contact</h1>
                </Link>
                <a className='btn btn-primary book-table' href='*'>BOOK A TABLE</a>
            </div>
            <button onClick={toogleNavbar}>
                <i className="fa-solid fa-bars"></i>
            </button>

        </div>
    )
}

export default Navbar