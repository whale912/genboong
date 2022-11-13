import React from 'react';
import './layout.css';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <main>
                <h2>레이아웃이당</h2>
            </main>
            <Footer/>
        </div>
    )
};

export default Layout