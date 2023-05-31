import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Wrapper, Phonebook, Contacts } from './App.styled';

import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      { id: nanoid(), name: 'Trevor Bangladesh', number: '956-28-76' },
      { id: nanoid(), name: 'Abdul Makharadgi', number: '127-13-34' },
      { id: nanoid(), name: 'Gabriel Gmurek', number: '000-14-88' },
    ],
    filter: '',
  };

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  addContact = data => {
    if (this.state.contacts.find(contact => data.name === contact.name )) {
      Notiflix.Notify.warning(`${data.name} is already in contacts!`, {
        position: 'center-center',
        fontSize: '25px',
      });

      return;
    }

    this.setState(oldState => ({
      contacts: [
        ...oldState.contacts, { ...data, id: nanoid(), },
      ],
    }));
  };

  //   } else {
  //     this.setState(oldState => {
  //       const list = [...oldState.contacts];

  //       list.push({
  //         id: nanoid(),
  //         name: name,
  //         number: number,
  //       });

  //       return { contacts: list };
  //     });
  //   }
  // };

  addFilterContacts = ({ target, }) => {
    this.setState({ filter: target.value });
  };

  getContactByName = () => {
    const currentFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(currentFilter)
    );
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterContact = this.getContactByName();

    return (
      <Container style={{}}>
        <Phonebook>Phonebook</Phonebook>
        <ContactForm createContact={this.addContact} />

        <Contacts>Contacts</Contacts>
        <Wrapper>
          <Filter value={filter} onFilter={this.addFilterContacts} />
          <ContactList
            contacts={filterContact}
            onRemoveContact={this.delContact}
          />
        </Wrapper>
      </Container>
    );
  }
}
