import { Link, NavLink } from 'react-router'
import useAuth from '../../Hooks/useAuth/useAuth'

const Navbar = () => {
  const {user} = useAuth();
  const NavLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/notices">Notices</NavLink></li>
    <li><NavLink to="/events">Events</NavLink></li>
    <li><NavLink to="/jobs">Jobs</NavLink></li>
    <li><NavLink to="/institutions">Institutions</NavLink></li>
    <li><NavLink to="/donate">Donate</NavLink></li>
    {user && <><li><NavLink to="/members">Members</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li></>}
  </>
  return (
    <div className="navbar px-4 shadow-sm lg:px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden cursor-pointer p-2 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 px-3 py-4 shadow">
            {NavLinks}
          </ul>
        </div>
        <Link to='/' className="text-primary text-2xl font-bold">Amader Gram</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <Link to={`/profile`}>{user?.displayName}</Link> : <Link to='/signin' className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-all duration-500">Sign in</Link>}
      </div>
    </div>
  )
}

export default Navbar