import NameForm from './NameForm/NameForm';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/operations';
import { ContactsList } from './ContactsList/ContactsList';
import css from '../components/App.module.css'

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
     <div className={css.container}>
        <h1>Phonebook</h1>
          <NameForm></NameForm>
        <h2>Contacts</h2>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList></ContactsList>
      </div>
  );
};
