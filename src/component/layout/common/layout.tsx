import React from 'react';
import '../../../resources/css/layout.css';
import Header from './header';
import Footer from './footer';
import Main from '../main/main';

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};

export default Layout