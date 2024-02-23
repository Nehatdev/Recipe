import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import logo from './logo.png';

export const Nav = () => {
    return (
        <>
            <div>
                <div className='nav'>
                    <div className='logo'>
                        <img src={logo} style={{width: '50px'}} alt="Logo" />
                    </div>
                    <div className='head'>
                        <h1>Recipe Hub</h1>
                    </div>
                    <div className='list'>
                        <Link to='/'>Home</Link>
                        <Link to='/cat'>Categories</Link>
                        <Link to='/all'>All items</Link>
                        <Link to='/fav'>Favourite</Link>
                        <Link to='/country'>Country</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}


