import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
function Header() {

    return (
        <nav className='header'>
            <img src={logo} alt="Logo" />
            <div className='nav-links' >
                <Link to='tvshows'>Tv Shows</Link>
                <Link to='tvshows'>Movies</Link>
                <Link to='tvshows'>Recently Added</Link>
                <Link to='tvshows'>My List</Link>
            </div>
            <FaSearch style={{ color: 'white', cursor: 'pointer', fontSize: '1.5rem' }} />
        </nav>
    )
}

export default Header
