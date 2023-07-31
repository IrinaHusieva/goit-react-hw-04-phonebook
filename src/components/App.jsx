import { Component } from "react";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";



export class App extends Component {
  state = {
  contacts: [],
  filter: ''
  }

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    const dataParce = JSON.parse(localData);
    if (localData && JSON.parse(localData).length > 0)
    this.setState({ contacts: dataParce });
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts?.length !== this.state.contacts.length) {
			localStorage.setItem(
				'contacts',
				JSON.stringify(this.state.contacts)
			)
		}
  }

  addContact = (name, number) => {
  const newContact = {
    id: nanoid(),
    name,
    number,
  };
  
  if (this.findContact(name)) {
    return alert(`${name} is already in contacts`);
  }
  
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact],
  }));
};


   
  handleChange = (e) => {

     const { name, value } = e.target;
     this.setState({ [name]: value });
  };

  handleSubmit = (e)  => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
            name:name,
            id: nanoid(),
            number:number,
        }
    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts],
      name: '',
      number: ''
		}))
  }
 
  filterChange = (e) => {
  this.setState({ filter: e.target.value });
};

  filterContacts = () => this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))

  findContact = name => this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

  onDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };
  
  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
         <Section title="Contacts">
        <Filter
          filter={filter}
          handleChange={this.filterChange}
          />
          <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
      </Section>
    </>
  );  
  }
};