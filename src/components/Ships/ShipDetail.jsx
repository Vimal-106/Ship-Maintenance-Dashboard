
import { useContext } from 'react';
import { useParams } from 'react-router-dom';  
import ShipsContext from '../../contexts/ShipsContext';  
import '../../styles/ShipDetail.css';  

const ShipDetail = () => {
  const { shipId } = useParams();  
  const { ships } = useContext(ShipsContext);  

  const ship = ships.find((s) => s.id === shipId);

  if (!ship) {
    return <div>Ship not found</div>;  
  }

  return (
    <div className="ship-detail">
      <h2>Ship Details</h2>
      <p><strong>Name:</strong> {ship.name}</p>
      <p><strong>IMO Number:</strong> {ship.imo}</p>
      <p><strong>Flag:</strong> {ship.flag}</p>
      <p><strong>Status:</strong> {ship.status}</p>
    </div>
  );
};

export default ShipDetail;
