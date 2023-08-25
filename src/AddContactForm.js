import React, { useState } from 'react';

function AddContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && phone.trim() !== '' && email.trim() !== '') {
      onAddContact({ name, phone, email });
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name*"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Phone*"
        value={phone}
        onChange={event => setPhone(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email*"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <button id='add-contact-btn' type="submit">Add Contact</button>
    </form>
  );
}

export default AddContactForm;
