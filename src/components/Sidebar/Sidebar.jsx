import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ login, setLogin }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <div className="grey-color-bg  min-vh-100 sidebar" style={{ width: (isOpen) ? '300px' : '30px' }}>
                <i className="bi bi-list light-color-text fs-2 " onClick={toggleSidebar}></i>

                {(isOpen) ?
                    <  >


                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link light-color-text p-2 text-center" to="/" onClick={toggleSidebar}>
                                    Home
                                </Link>
                            </li>
                            {
                                !login &&
                                <li className="nav-item">
                                    <Link className="nav-link light-color-text p-2 text-center" to="/login" onClick={toggleSidebar} >
                                        Login/Signup
                                    </Link>
                                </li>
                            }
                            {
                                login &&
                                <li className="nav-item">
                                <Link className="nav-link light-color-text p-2 text-center" to="/StudentForm" onClick={toggleSidebar}>
                                    Add Student
                                </Link>
                            </li>

                            }
                            {
                                login &&
                                <li className="nav-item">
                                <Link className="nav-link light-color-text p-2 text-center" to="/StudentsTable" onClick={toggleSidebar}>
                                    Students Table
                                </Link>
                            </li>

                            }
                            {
                                login &&
                                <li className="nav-item">
                                <Link className="nav-link light-color-text p-2 text-center" to="/" onClick={()=>{
                                    toggleSidebar();
                                    setLogin(false);
                                }}>
                                    Logout
                                </Link>
                            </li>

                            }
                        </ul>

                    </> :
                    ""
                }

            </div>
        </>

    );
}

export default Sidebar;
