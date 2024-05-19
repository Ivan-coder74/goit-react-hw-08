import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <div>
            {isLoggedIn ? children : <Navigate to="/login" replace/>}
        </div>
    )
}
export default PrivateRoute;