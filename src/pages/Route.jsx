import React from 'react'
import Header from '../layout/Header'
import '../assets/sass/pages/_route.scss'

const Route = () => {
    return (
        <>
            <Header />
            <div className='route__container'>
                <nav className='route__navigation'>
                    <li className='route__navigation-item selected'>Routes</li>
                    <li className='route__navigation-item'>Ride Schedule</li>
                </nav>
            </div>
        </>
    )
}

export default Route
