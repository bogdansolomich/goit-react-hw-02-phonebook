import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactsList, ContactsListItem } from './ContactList.styled';
export const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactsListItem key={contact.id}>
          <ContactListItem
            contact={contact}
            ondeleteContact={ondeleteContact}
          />
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
