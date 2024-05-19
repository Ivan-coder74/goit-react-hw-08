import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { max_Name_Len, min_Name_Len, max_Number_Len, min_Number_Len } from "../../utils/conskant";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";



 
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().required("Required").matches(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$/,
        'Name can only contain letters and spaces').min(min_Name_Len, "Too Short!").max(max_Name_Len, "Too Long!"),
        number:Yup.string().matches(/^[-+\d() ]+$/, 'Invalid phone number format').min(min_Number_Len, "Too Short!").max(max_Number_Len, "Too Long!").required("Required"),
      });
    
      const form_Contact_Form = {
        name: '',
        number: ''
    };
     
    const ContactForm = () => {
        const dispatch = useDispatch();
    
        const handleSubmit = (values, actions) => {
         dispatch(addContactThunk(values))
         actions.resetForm();
        };
    
    return(
<div className={css.formContainer}>
<Formik 
initialValues={form_Contact_Form} 
onSubmit={handleSubmit} 
validationSchema={FeedbackSchema}>
  <Form className={css.form}>
        <label className={css.label}>
          <span className={css.span}>Name</span>
          <Field type="text" name="name" className={css.field} />
          <ErrorMessage component="p" name="name" className={css.error} />
        </label>
        <label className={css.label}>
          <span className={css.span}>Number</span>
          <Field type="text" name="number" className={css.field} />
          <ErrorMessage component="p" name="number" className={css.error} />
        </label>
        <button type="submit" className={css.button}>Add contact</button>
      </Form>
</Formik>
</div>
    )}

export default ContactForm;