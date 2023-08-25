import React, { useState } from 'react';

function AddContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '') {
      onAddContact({ name });
      setName('');
    }
    if (phone.trim() !== '') {
        onAddContact({ phone });
        setPhone('');
    }
    if (email.trim() !== '') {
        onAddContact({ email });
        setEmail('');
      }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Contact Number"
        value={phone}
        onChange={event => setPhone(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email id"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <button  id='submit' type="submit">Add Contact</button>
    </form>
  );
}

export default AddContactForm;
