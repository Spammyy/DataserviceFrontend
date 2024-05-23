import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {


    return (
        <section className="container px-4 mx-auto">
            <Header />
            <main className="container mx-auto bg-gray-300">
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}

export default Layout