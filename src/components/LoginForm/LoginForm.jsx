 import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
 const loginUserSchema = Yup.object().shape({
    email: Yup.string()
    .email("You must enter valid email address!")
    .required("Email address is required!"),
  password: Yup.string()
    .min(7, "Your password must contain at least 7 characters!")
    .max(20, "Your password must contain no more than 20 characters!")
    .required("Password is required!"),
 });
 const initialValues = {
    email: "",
    password: "",
 };
 const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginUserSchema}>
        <Form className={css.form}>
        <label className={css.label}>
          <span className={css.span}>Email:</span>
          <Field type="email" name="email" placeholder="IvanovIvan@gmail.com" className={css.field} />
          <ErrorMessage component="p" name="email" className={css.error}/>
        </label>
        <label className={css.label}>
          <span className={css.span}>Password:</span>
          <Field type="password" name="password"  placeholder="Enter your password" className={css.field} />
          <ErrorMessage component="p" name="password" className={css.error}/>
        </label>
        <button type="submit" className={css.button}>Add new user</button>
          </Form>
    </Formik>
    )
 }
 export default LoginForm;