import React, { useState } from 'react';

const ContactForm = ({ onSubmit, contactToEdit }) => {
    const [name, setName] = useState(contactToEdit ? contactToEdit.name : '');
    const [phone, setPhone] = useState(contactToEdit ? contactToEdit.phone : '');
    const [email, setEmail] = useState(contactToEdit ? contactToEdit.email : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phone, email });
        setName('');
        setPhone('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">{contactToEdit ? 'Update' : 'Add'} Contact</button>
        </form>
    );
}

export default ContactForm;
