import React from 'react'
import Container from '../components/Container'
import Footer from '../components/Footer/Footer.module'
import Navbar from '../components/Navbar/Navbar.module'

function Layout(props) {
  return (
    <>
        <Navbar />
            <main>
                <Container>{props.children}</Container>  
            </main>
        <Footer />
    </>
    )
}

export default Layout