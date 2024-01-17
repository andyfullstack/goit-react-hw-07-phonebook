import { useDispatch, useSelector } from 'react-redux';
import { Button, Li, Ul } from './ContactsList.styled';

import { selectVisibleContacts } from 'store/selectors';
import { deleteContact } from 'store/operations';

// import { getContacts, getFilter } from 'store/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Ul>
      {contacts &&
        contacts.map(contact => (
          <Li key={contact.id}>
            {contact.name}: {contact.number}
            <Button type="button" onClick={() => handleClick(contact.id)}>
              Delete
            </Button>
          </Li>
        ))}
    </Ul>
  );
};

export default ContactsList;
