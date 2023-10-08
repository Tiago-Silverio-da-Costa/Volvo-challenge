import axios from "axios";
import { useEffect, useState } from "react";
import { CardProps } from "vcc-ui";
import { Car } from "../type/car.interface";


export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/cars").then((res) => {
      setCars(res.data);
    });
  }, []);

  return (
    cars
  );
};
