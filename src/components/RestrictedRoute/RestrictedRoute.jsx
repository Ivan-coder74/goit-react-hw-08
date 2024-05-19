import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const RestrictedRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // console.log(isLoggedIn);
    return(
        <div>
            {isLoggedIn ? <Navigate to="/contacts" replace/> : children}
        </div>
    )
}
export default RestrictedRoute;