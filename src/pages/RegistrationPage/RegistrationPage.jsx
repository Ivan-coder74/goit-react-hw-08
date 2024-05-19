import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";  
 const RegistrationPage = () => {
    return (
        <div className={css.registerContainer}>
        <h2 className={css.title}>Register user</h2>
        <RegistrationForm/>
      </div>
    )
  }
  
  export default RegistrationPage;
 