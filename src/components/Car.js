import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

const Car = (props) => {
  const { id } = useParams();
  console.log("id", id);
  const foundCar = cars.find((car) => car.id == id);
  console.log("found", foundCar);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Card sx={{ maxWidth: "500px" }}>
        <CardContent>
          <h1>{foundCar.Name}</h1>
          <Chip label={`id: ${foundCar.id}`} />
          <Chip label={`Name: ${foundCar.Name}`} />
          <Chip label={`Miles_per_Gallon: ${foundCar.Miles_per_Gallon}`} />
          <Chip label={`Cylinders: ${foundCar.Cylinders}`} />
          <Chip label={`Displacement: ${foundCar.Displacement}`} />
          <Chip label={`Horsepower: ${foundCar.Horsepower}`} />
          <Chip label={`Weight_in_lbs: ${foundCar.Weight_in_lbs}`} />
          <Chip label={`Acceleration: ${foundCar.Acceleration}`} />
          <Chip label={`Year: ${foundCar.Year}`} />
          <Chip label={`Origin: ${foundCar.Origin}`} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Car;
