import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return(
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://cdn2.iconfinder.com/data/icons/business-office-icons/256/To-do_List-512.png" alt=""/>
                </div>
                <div className="menu">
                    <div className="menuList">
                        <span><Link className="menuLisTitle" to="/">Home </Link></span>
                        <span><Link className="menuLisTitle" to="/ToDoList">List</Link></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar