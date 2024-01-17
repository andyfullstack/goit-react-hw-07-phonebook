import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <h1
        style={{
          position: 'relative',
          top: '50%',
          left: '42%',
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
      <ContactsList />
    </>
  );
};
