import axios from "axios";
import React from "react";

const CarsList = ({ carsList, selectCar, getCars }) => {
  const carsListOrd = carsList.sort((a, b) => a.brand.localeCompare(b.brand));

  const deleteCar = (car) => {
    axios
      .delete(`https://cars-crud.academlo.tech/cars/${car.id}/`)
      .then(() => getCars());
  };

  return (
    <div className="cars-list">
      <h1>CarsList</h1>
      <ul className="list">
        {carsListOrd.map((car) => (
          <li key={car.id} className="card">
            <h4>
              {car.brand}, {car.model}
            </h4>
            <ul>
              <li>
                <b>Color: </b>
                {car.color}
              </li>
              <li>
                <b>Year: </b>
                {car.year}
              </li>
              <li>
                <b>Price: </b>
                {car.price}
              </li>
            </ul>
            <button onClick={() => selectCar(car)}>Select</button>
            <button onClick={() => deleteCar(car)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
