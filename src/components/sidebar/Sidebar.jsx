import React, { useEffect, useState } from 'react';
import './sidebar.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/Vedanta-Logo-PNG.png';
import logopower from '../../assets/images/xyma.png';
import sidebarNav from '../../configs/sidebarNav';

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNav.findIndex(item => item.section === curPath);

        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)';
        setTimeout(() => {
            document.body.classList.remove('sidebar-open');
            document.querySelector('.main__content').style = '';
        }, 500);
    }

    const logout = () => {
        console.log('logout....');
        localStorage.removeItem('token')
        window.location.href = '/graph'
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="" style={{width : '13rem',height : '4rem'}}/>
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="pl-10 mt-3">
                    <span className='text-base font-extralight'>© All rights reserved by</span>
                    <img src={logopower} alt="powedbyLogo" style={{width : '9rem',height : '4rem'}}/>
                </div>
                <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt" onClick={() => logout()}>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
