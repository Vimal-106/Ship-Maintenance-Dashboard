// src/contexts/ShipsContext.jsx
import React, { createContext, useState, useEffect } from 'react';

const ShipsContext = createContext();

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const savedShips = JSON.parse(localStorage.getItem('ships')) || [];
    setShips(savedShips);
  }, []);

  const addShip = (newShip) => {
    const updatedShips = [...ships, newShip];
    setShips(updatedShips);
    localStorage.setItem('ships', JSON.stringify(updatedShips));
  };

  const deleteShip = (shipId) => {
    const updatedShips = ships.filter((ship) => ship.id !== shipId);
    setShips(updatedShips);
    localStorage.setItem('ships', JSON.stringify(updatedShips));
  };

  return (
    <ShipsContext.Provider value={{ ships, addShip, deleteShip }}>
      {children}
    </ShipsContext.Provider>
  );
};

export default ShipsContext;
