import React, { useState, useEffect } from 'react';
import './App.css';
import AddContactForm from './AddContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);
  
  // Handling Add Contact.
  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  // Handling Update Contact.
  const handleUpdateContact = (id, updatedName) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, name: updatedName } : contact
    );
    setContacts(updatedContacts);
  };

  // Handling Delete Contact.
  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>CONTACT LIST</h1>
      <AddContactForm onAddContact={handleAddContact} />
      <div className='heading'>
        <h3 id='name'>Name</h3>
        <h3 id='phone'>Contact Number</h3>
        <h3 id='email'>Email</h3>
      </div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <div className='detail'>
              <span>{contact.name}</span>
              <span>{contact.phone}</span>
              <span>{contact.email}</span>
            </div>
            <button className='edit' onClick={() => handleUpdateContact(contact.id, 'Updated Name')}>
              Edit
            </button>
            <button className='delete' onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
