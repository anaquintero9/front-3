import React from "react";

const Card = ({pets}) => {
  return <div>
      <h2 className="title">Mascotas</h2>
      {pets.map((pet, index) => (
        <div key={index} className="card">
          <p>Mascota: {pet.petName}</p>
          <p>Raza: {pet.petBreed}</p>
        </div>
      ))}
    </div>
};
export default Card;
