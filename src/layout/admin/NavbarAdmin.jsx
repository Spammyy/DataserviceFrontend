import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from '../../components/LogoutButton'

const NavbarAdmin = () => {

    useEffect( () => {

        const details = document.querySelectorAll( "details" ) // saml alle details

        // onclick på alle details
        details.forEach( detail => {

            detail.onclick = () => {

                // ved klik på en detail - fjern open fra alle details
                details.forEach( d => d.removeAttribute( "open" ) )

            }
        } );


    }, [] )

    return (
        <nav className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="text-xl btn btn-ghost">Dataservice</a>
            </div>
            <div className="flex-none">
                <menu className="px-1 menu menu-horizontal">
                    <li>
                        <NavLink to="admin">ADMIN Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Forsiden (public)</NavLink>
                    </li>
                    <li>
                        <LogoutButton />
                    </li>
                </menu>
            </div>
        </nav>
    )
}

export default NavbarAdmin