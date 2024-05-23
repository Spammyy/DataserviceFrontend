import { useContext } from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Navigate, Outlet } from 'react-router-dom'

import { LoginContext } from '../../context/LoginContext'

const LayoutAdmin = () => {


    const { user } = useContext( LoginContext )

    // Skrid hvis der ikke er en user!!!
    if ( !user ) return <Navigate to="/login" replace />


    return (
        <section className="container px-4 mx-auto">


            <HeaderAdmin />
            <h1 className="text-3xl">{ user }</h1>

            <main className="container mx-auto">
                <Outlet />
            </main>

        </section>
    )
}

export default LayoutAdmin