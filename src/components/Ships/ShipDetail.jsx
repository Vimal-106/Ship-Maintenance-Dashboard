// src/components/Ships/ShipDetail.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';  // To read the dynamic shipId from the URL
import ShipsContext from '../../contexts/ShipsContext';  // To access the ships data
import './ShipDetail.css';  // Assuming you have some CSS for styling

const ShipDetail = () => {
  const { shipId } = useParams();  // Get the shipId from the URL
  const { ships } = useContext(ShipsContext);  // Get the ships data from context

  // Find the ship with the matching ID
  const ship = ships.find((s) => s.id === shipId);

  if (!ship) {
    return <div>Ship not found</div>;  // If no ship matches, display a not found message
  }

  return (
    <div className="ship-detail">
      <h2>Ship Details</h2>
      <p><strong>Name:</strong> {ship.name}</p>
      <p><strong>IMO Number:</strong> {ship.imo}</p>
      <p><strong>Flag:</strong> {ship.flag}</p>
      <p><strong>Status:</strong> {ship.status}</p>
      {/* Add other details like maintenance history or components if needed */}
    </div>
  );
};

export default ShipDetail;
