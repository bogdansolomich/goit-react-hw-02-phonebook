import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { FormContacts } from './FormContacts/FormContacts';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitForm = (values, { resetForm }) => {
    resetForm();
    const duplicateContactName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicateContactName) {
      alert(`${duplicateContactName.name} is already in contacts`);
      return;
    }
    this.addNewContact(values);
  };

  addNewContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onChangeFilter = ({ target }) =>
    this.setState({ filter: target.value.toLowerCase() });

  filteredList = () => {
    const { filter, contacts } = this.state;
    return (
      contacts.filter(i => i.name.toLowerCase().includes(filter)) || contacts
    );
  };

  onDelete = id =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));

  render() {
    const { onChangeFilter, onSubmitForm, filteredList, onDelete } = this;
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title={'Phonebook'}>
          <FormContacts onSubmitForm={onSubmitForm} />
        </Section>
        <Section title={'Contacts'}>
          {contacts.length ? (
            <>
              <Filter filter={filter} onChangeFilter={onChangeFilter} />
              <ContactsList contacts={filteredList()} onDelete={onDelete} />
            </>
          ) : (
            <Notification message={'There is no contacts!'} />
          )}
        </Section>
      </>
    );
  }
}
