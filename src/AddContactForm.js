import React, { useState } from 'react';

// Component To Add New Contact.
function AddContactForm({ onAddContact }) {
  // React useState To set Contact Details.
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // This handleSubmit Funtionality will Add Contact Details Into The List When Click On Submit Button.
  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && phone.trim() !== '' && email.trim() !== '') {
      onAddContact({ name, phone, email });
      // Setting Input Detail Field As Blank After Adding Details Into List.
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Taking Contact Name As Input */}
      <input
        type="text"
        placeholder="Name*"
        value={name}
        onChange={event => setName(event.target.value)}
        required
      />
      {/* Taking Phone Number As Input */}
      <input
        type="number"
        placeholder="Phone*"
        value={phone}
        onChange={event => setPhone(event.target.value)}
        required
      />
      {/* Taking Email Id As Input */}
      <input
        type="email"
        placeholder="Email*"
        value={email}
        onChange={event => setEmail(event.target.value)}
        required
      />
      {/* Add Contact Button */}
      <button id='add-contact-btn' type="submit">Add Contact</button>
    </form>
  );
}

// Default Exporting
export default AddContactForm;
