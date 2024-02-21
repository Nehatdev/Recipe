import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
export const Nav = () => {
    return (
        <>
            <div>
                <div className='nav'>
                    <div className='head'>
                        <h1>Recipe Hub</h1>
                    </div>
                    <div className='list'>

                        <Link to='hom'>Home</Link>
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

