import React, { useState } from 'react';
import ContactForm from './ContactForm';

const ContactList = ({ contacts, onAddContact, onUpdateContact, onDeleteContact }) => {
    const [editingContact, setEditingContact] = useState(null);

    const handleEditClick = (contact) => {
        setEditingContact(contact);
    };

    const handleUpdateClick = (updatedContact) => {
        onUpdateContact(updatedContact);
        setEditingContact(null);
    };

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <strong>{contact.name}</strong>
                        <p>Phone: {contact.phone}</p>
                        <p>Email: {contact.email}</p>
                        <button onClick={() => handleEditClick(contact)}>Edit</button>
                        <button onClick={() => onDeleteContact(contact)}>Delete</button>
                    </li>
                ))}
            </ul>
            <ContactForm onSubmit={onAddContact} contactToEdit={editingContact} />
        </div>
    );
}

export default ContactList;
