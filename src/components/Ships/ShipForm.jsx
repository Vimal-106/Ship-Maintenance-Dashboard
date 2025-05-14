import React, { useState, useContext } from 'react';
import ShipsContext from '../../contexts/ShipsContext';
import './ShipForm.css';  // Assuming you have some CSS for styling

const ShipForm = () => {
  const { addShip } = useContext(ShipsContext);
  
  // Local state to hold form data
  const [name, setName] = useState('');
  const [imo, setImo] = useState('');
  const [flag, setFlag] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new ship object
    const newShip = {
      id: `s${Date.now()}`,  // Generate a unique id
      name,
      imo,
      flag,
      status,
    };

    // Add ship to the context (which will also update localStorage)
    addShip(newShip);

    // Reset the form fields
    setName('');
    setImo('');
    setFlag('');
    setStatus('');
  };

  return (
    <div className="ship-form">
      <h2>Create New Ship</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ship Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="IMO Number"
          value={imo}
          onChange={(e) => setImo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Flag"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Under Maintenance">Under Maintenance</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">Add Ship</button>
      </form>
    </div>
  );
};

export default ShipForm;
