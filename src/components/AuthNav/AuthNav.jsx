import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';
import clsx from "clsx";
const getNavLinkStyles = ({ isActive }) => 
    clsx(css.navLink, { [css.active]: isActive });
const AuthNav = () => {
    return (
       <div className={css.container}>
        <NavLink to="/register" className={getNavLinkStyles}>Register</NavLink>
        <NavLink to="/login" className={getNavLinkStyles}>Log In</NavLink>

       </div>
    )
}
export default AuthNav;