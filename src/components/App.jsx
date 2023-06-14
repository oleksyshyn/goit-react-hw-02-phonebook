import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  formSubmitHandler = ({ name, number }) => {
    const contactId = nanoid();
    const { contacts } = this.state;
    const newContact = { id: contactId, name, number }
    this.setState({
      contacts: [...contacts, newContact],
    });
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactsList contacts={filteredContacts} /> 
      </div>
    )
  }
}

export default App; 