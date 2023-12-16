import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // once the navbar is invoked or created or seen on the screen or called, the useEffect hook will run any task or problem or program or function you want / set
    useEffect(() => {
       
    }, []);

    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container'>
                <a className='navbar-brand fw-bold' href='#'>
                    <em className='cc-text-color'>Readify</em>
                </a>

                {/* hamburger icon */}
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                {/* links */}
                <div className='collapse navbar-collapse gap-5' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-5'>
                        <li className='nav-item'>
                            <Link to="/about" className='nav-link cc-text-color' aria-current='page'>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/service"} className='nav-link cc-text-color'>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to= "/contact" className='nav-link cc-text-color'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className='btn cc-button text-white px-5'>Lend One</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
