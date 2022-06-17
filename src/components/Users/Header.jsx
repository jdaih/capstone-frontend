import React from "react"
import { Link } from 'react-router-dom'

const Home = () => {
    return(
         <div className='header'>
            <nav className="navbar">
                <ul className ='header-list'>
                    <li><Link to="/register"> Register </Link></li>
                    <li><Link to="/login"> Login </Link></li>
                    {/* <li className="logout" onClick={handleLogout}>Logout</li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Home