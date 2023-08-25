import React, { useState } from 'react';
import './App.css';
import ContactList from './ContactList';

const App = () => {
    const [contacts, setContacts] = useState([
        { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
        { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' }
        // Add more contacts here
    ]);

    const handleAddContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    const handleUpdateContact = (updatedContact) => {
        const updatedContacts = contacts.map((contact) =>
            contact === editingContact ? updatedContact : contact
        );
        setContacts(updatedContacts);
    };

    const handleDeleteContact = (contactToDelete) => {
        const updatedContacts = contacts.filter((contact) => contact !== contactToDelete);
        setContacts(updatedContacts);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Contact List App</h1>
            </header>
            <main>
                <ContactList
                    contacts={contacts}
                    onAddContact={handleAddContact}
                    onUpdateContact={handleUpdateContact}
                    onDeleteContact={handleDeleteContact}
                />
            </main>
        </div>
    );
}

export default App;
