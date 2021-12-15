import React, { useState } from 'react'
import '../assets/sass/layout/_header.scss'

const Header = () => {
    
    const [name, setName] = useState('route')
    
    const changeNavigationHandler = (navigation) => setName(navigation)
    
    return (
        <header className='header'>
            <nav className='header__navigation'>
                <li onClick={() => changeNavigationHandler('route')} className={`header__navigation-item ${name === 'route' && 'selected'}`}>Manage Routes</li>
                <li onClick={() => changeNavigationHandler('driver')} className={`header__navigation-item ${name === 'driver' && 'selected'}`}>Drivers</li>
                <li onClick={() => changeNavigationHandler('premium')} className={`header__navigation-item ${name === 'premium' && 'selected'}`}>Manage Premiums</li>
                <li onClick={() => changeNavigationHandler('citizen')} className={`header__navigation-item ${name === 'citizen' && 'selected'}`}>Citizens</li>
                <div>
                    <li className='header__navigation-item'>Image Logo</li>
                </div>
            </nav>
        </header>
    )
}

export default Header
