import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { StyledSection, SectionTitle, ContactsTitle } from './Section.styled';
import { GlobalStyle } from './Globalstyle';
import { Container } from './Container';
import { StyledNotification } from './Notification.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const isContactInList = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContactInList) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  filterContactsByName = newContactName => {
    this.setState({
      filter: newContactName,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <StyledSection>
          <Container>
            <SectionTitle>Phonebook</SectionTitle>
            <ContactForm onAdd={this.addContact} />
          </Container>
        </StyledSection>

        <StyledSection>
          <Container>
            <ContactsTitle>Contacts</ContactsTitle>
            <ContactFilter
              filter={filter}
              onfilterContactsByName={this.filterContactsByName}
            />
            {contacts.length > 0 ? (
              <ContactList
                contacts={filteredContacts}
                ondeleteContact={this.deleteContact}
              />
            ) : (
              <StyledNotification>
                There are no contacts to show! Please add some contacts to the
                phonebook
              </StyledNotification>
            )}
          </Container>
        </StyledSection>
        <GlobalStyle />
      </>
    );
  }
}
