import React from 'react';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

require('./Main.css');

var Main = (props) => {
  return (
    <div className="container">
      <Header />
      <Nav/>
      {props.children}
      <Footer />
    </div>
  );
}

module.exports = Main;
