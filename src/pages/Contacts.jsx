import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from '../components/ContactsList/ContactsList';
import NameForm from '../components/NameForm/NameForm';
import { fetchContacts } from 'redux/operations';
import { selectLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <NameForm/>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}
