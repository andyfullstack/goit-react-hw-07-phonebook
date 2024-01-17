import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/operations';

import { selectError, selectIsLoading } from 'store/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1
        style={{
          position: 'relative',
          top: '50%',
          left: '41%',
          transform: 'translate(-50, -50)',
        }}
      >
        Phonebook
      </h1>
      <ContactsForm />
      <h1
        style={{
          position: 'relative',
          top: '50%',
          left: '42%',
          transform: 'translate(-50, -50)',
        }}
      >
        Contacts
      </h1>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}

      <ContactsList />
    </>
  );
};
