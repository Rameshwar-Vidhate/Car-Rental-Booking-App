import React from "react";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const navigate = useNavigate();

  const cars = [
    { id: 1, name: "BMW X5", price: "₹5000/day" },
    { id: 2, name: "Audi A6", price: "₹4500/day" }
  ];

  return (
    <div>
      <h1>Cars Page</h1>

      {cars.map((car) => (
        <div key={car.id} onClick={() => navigate("/car-details", { state: car })}>
          <h2>{car.name}</h2>
          <p>{car.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cars;