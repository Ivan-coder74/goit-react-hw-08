import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { selectUserName, selectUserEmail } from "../../redux/auth/selectors";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name =useSelector(selectUserName);
    const email =useSelector(selectUserEmail);

    const handleLogOut = () => {
        dispatch(logOut());
    }
    return (
        <div className={css.userMenuContainer}>
        <div className={css.user}>
          <p>Hello, {name}</p>
          <p>{email}</p>
        </div>
        <button type="button" onClick={handleLogOut} className={css.button}>Logout</button>
      </div>
    )
}
export default UserMenu;