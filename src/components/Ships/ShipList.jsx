import { Link } from 'react-router-dom';
import { useContext } from 'react';  
import ShipsContext from '../../contexts/ShipsContext'; 
import './ShipList.css';  // Assuming you have some CSS for styling

const ShipList = () => {
  const { ships, deleteShip } = useContext(ShipsContext);

  return (
    <div>
      <h2>Ships</h2>
      <Link to="/create-ship">
        <button>Add New Ship</button>
      </Link>
      <ul>
        {ships.map((ship) => (
          <li key={ship.id}>
            <Link to={`/ship/${ship.id}`}>
              <strong>{ship.name}</strong>
            </Link>
            {" - "}
            {ship.imo}
            <button onClick={() => deleteShip(ship.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShipList;
