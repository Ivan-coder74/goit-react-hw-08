import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import  css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
 
const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <>
        <header className={css.header}>
            <nav className={css.nav}>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </nav>
        </header>
        </>
    )
}
export default AppBar;