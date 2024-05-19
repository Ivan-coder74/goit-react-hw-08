import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkStyles = ({ isActive }) =>
    clsx(css.navLink,{ [css.active]: isActive });
const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={css.navContainer}>
            <NavLink to="/" className={getNavLinkStyles} >Home</NavLink>
            {isLoggedIn && <NavLink className={getNavLinkStyles} to="/contacts">Contacts</NavLink>}
            </div>
)}
export default Navigation;