import { NavLink } from 'react-router-dom'

const Navbar = () => {


    return (

        <nav className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="text-xl btn btn-ghost">Dataservice</a>
            </div>
            <div className="flex-none">
                <menu className="px-1 menu menu-horizontal">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews">Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to="weather">Weather</NavLink>
                    </li>
                    <li>
                        <NavLink to="news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="elspotprice">Elspot Prices</NavLink>
                    </li>
                </menu>
            </div>
        </nav>


    )
}

export default Navbar