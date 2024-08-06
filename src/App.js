import React from 'react'
import Header  from './Header'
import Footer from './Footer'
import Navbar from './Navbar';
import Body from './Body';


function App() {
    const logo ="logo.jpg";
    const links = ["Log in", "Sign upp", "About"];

  return (
    <>
    <Navbar logo={logo} links={links}/>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

export default App