import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const CarsForm = ({ getCars, carSelected, selectCar }) => {
  const { handleSubmit, register, reset } = useForm();

  const emptyCar = { brand: "", model: "", year: "", color: "", price: "" };

  useEffect(() => {
    if (carSelected) {
      reset(carSelected);
    } else {
      reset(emptyCar);
    }
  }, [carSelected]);

  const submit = (data) => {
    if (carSelected) {
      axios
        .put(`https://cars-crud.academlo.tech/cars/${carSelected.id}/`, data)
        .then(() => {
          getCars();
          selectCar(null);
        });
    } else {
      axios.post("https://cars-crud.academlo.tech/cars/", data).then(() => {
        getCars();
        reset(emptyCar);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <label htmlFor="brand">Brand</label>
        <input type="text" id="brand" {...register("brand")} />
      </div>
      <div className="input-container">
        <label htmlFor="model">model</label>
        <input type="text" id="model" {...register("model")} />
      </div>
      <div className="input-container">
        <label htmlFor="color">color</label>
        <input type="text" id="color" {...register("color")} />
      </div>
      <div className="input-container">
        <label htmlFor="year">year</label>
        <input type="number" id="year" {...register("year")} />
      </div>
      <div className="input-container">
        <label htmlFor="price">price</label>
        <input type="number" id="price" {...register("price")} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default CarsForm;
