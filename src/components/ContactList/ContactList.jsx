import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);
  // if(isError)return <p>Oops, something went wrong</p>;
  // if(isLoading)return <p>Loading...</p>;
  // if(!contacts.length)return <p>No contacts</p>;

  return (
    <ul className={css.contactList}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {Array.isArray(contacts) && contacts.length === 0 && (
        <li>There are no contacts. Please add contacts!</li>
      )}
      {Array.isArray(contacts) &&
        contacts.map(({ id, name, number }) => {
          return (
            <li className={css.contactListItem} key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })}
    </ul>
  );
};
export default ContactList;
