import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Home = () => {

    const [car, setCar] = useState({
        brand: "Toyota",
        model: "Corolla",
        year: "2023",
        color: "Aqua",
        condition: [" New ", " Old "],
        owner: {name: "Simon ", age: 55}
    });

    return (<>
        <h1>Home</h1>
        <h2>The maker of my car is {car.brand}</h2>
        <p>It's a {car.model}, {car.color} and {car.year} make</p>
        <p><strong>Car owner is {car.owner.name} and age is 
             {" "} { car.owner.age } {" "}
            condition is { car.condition[0] } <br /></strong></p>
        <button onClick={() => setCar("Red")}>Change text</button>
    </>);
  };
  
export default Home;
  