import { DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ contact, ondeleteContact }) => {
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <DeleteBtn onClick={() => ondeleteContact(contact.id)}>Delete</DeleteBtn>
    </>
  );
};
