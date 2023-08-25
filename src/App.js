import React, { useState, useEffect } from 'react';
import './App.css';
import AddContactForm from './AddContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactUpdates, setContactUpdates] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const updatedData = data.map(contact => ({
          id: contact.id,
          name: contact.name,
          phone: contact.phone,
          email: contact.email,
        }));
        setContacts(updatedData);
      })
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleInputChange = (id, field, value) => {
    setContactUpdates(prevUpdates => ({
      ...prevUpdates,
      [id]: { ...prevUpdates[id], [field]: value },
    }));
  };

  const handleUpdateContact = (id, field, newValue) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, [field]: newValue } : contact
    );
    setContacts(updatedContacts);
    setContactUpdates(prevUpdates => ({ ...prevUpdates, [id]: {} }));
  };

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };


  return (
    <div className="App">
      <h1>CONTACT LIST</h1>
      <AddContactForm onAddContact={handleAddContact} />
      <div className='heading'>
        <h3>Name</h3>
        <h3>Contact Number</h3>
        <h3>Email ID</h3>
      </div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <div className='detail-display-container'>
              <span>{contact.name}</span>
              <span>{contact.phone}</span>
              <span>{contact.email}</span>
              <button id='edit-btn' >Edit</button>
              <button id='delete-btn' onClick={() => handleDeleteContact(contact.id)}>Delete</button>

            </div>

            <div className='update-input-container'>

              <div className='input-box'>
                <input
                  type="text"
                  placeholder="New Name"
                  value={contactUpdates[contact.id]?.newName || ''}
                  onChange={event =>
                    handleInputChange(contact.id, 'newName', event.target.value)
                  }
                />
                <button
                  onClick={() => handleUpdateContact(contact.id, 'name', contactUpdates[contact.id]?.newName)}
                >
                  Update Name
                </button>
              </div>
              <div className='input-box'>
                <input
                  type="text"
                  placeholder="New Phone"
                  value={contactUpdates[contact.id]?.newPhone || ''}
                  onChange={event =>
                    handleInputChange(contact.id, 'newPhone', event.target.value)
                  }
                />
                <button
                  onClick={() => handleUpdateContact(contact.id, 'phone', contactUpdates[contact.id]?.newPhone)}
                >
                  Update Phone
                </button>
              </div>
              <div className='input-box'>
                <input
                  type="text"
                  placeholder="New Email"
                  value={contactUpdates[contact.id]?.newEmail || ''}
                  onChange={event =>
                    handleInputChange(contact.id, 'newEmail', event.target.value)
                  }
                />
                <button
                  onClick={() => handleUpdateContact(contact.id, 'email', contactUpdates[contact.id]?.newEmail)}
                >
                  Update Email
                </button>
              </div>
              <button id='delete-btn'>Done</button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
