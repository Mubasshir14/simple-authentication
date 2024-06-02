import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AUthContext } from "../AuthProvider/AuthProvider";


const Header = () => {

    const {user, logout} = useContext(AUthContext);
    console.log(user);

    const navlist = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    {
    user ? (
        <>
            <li key="about"><NavLink to='/about'>About</NavLink></li>
            <li key="personal"><NavLink to='/personal'>Personal Data</NavLink></li>
        </>
    ) : null
}

    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlist}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navlist}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    (<div>
                        {user.email}
                        <button onClick={() => logout()} className="btn btn-ghost">Log Out</button>
                    </div>)
                    :
                    ""
                }
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;