import axios from "axios";
import { useEffect, useState } from "react";
import CarsForm from "./components/CarsForm";
import CarsList from "./components/CarsList";
import "./styles.css";

function App() {
  const [carsList, setCarsList] = useState([]);
  const [carSelected, setCarSelected] = useState(null);
  // null             -> si no hay carro seleccionado
  // { id, brand ...} -> si hay un carro seleccionado

  useEffect(() => {
    axios
      .get("https://cars-crud.academlo.tech/cars/")
      .then((res) => setCarsList(res.data));
  }, []);

  const getCars = () => {
    axios
      .get("https://cars-crud.academlo.tech/cars/")
      .then((res) => setCarsList(res.data));
  };

  const selectCar = (car) => {
    setCarSelected(car);
  };

  return (
    <div className="App">
      <CarsForm
        getCars={getCars}
        carSelected={carSelected}
        selectCar={selectCar}
      />
      
      <CarsList carsList={carsList} selectCar={selectCar} getCars={getCars} />
    </div>
  );
}

export default App;
