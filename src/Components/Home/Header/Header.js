import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <div className="container">
              <NavBar />
              <Banner />
        </div>
    );
};

export default Header;