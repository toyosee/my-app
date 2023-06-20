import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ephrim from './Ephrim.js';
import Football from './Football';
import Bee from './Bee';
import Car from './Sure';
import reportWebVitals from './reportWebVitals';

const myCar = {
    brand: 'Toyota',
    color: 'Yellow',
    year: 2017,
}

// importing elements from HTML
const calc = ReactDOM.createRoot(document.getElementById('calc'));
const root = ReactDOM.createRoot(document.getElementById('root'));
const ben = ReactDOM.createRoot(document.getElementById('ben'));

// displaying to root element div
 root.render(
  <React.StrictMode>
    <App />
    <Ephrim />
   </React.StrictMode>
);


// Displaying to calc element div
calc.render(
    <>
    <Football />
    <Bee />
</>)

ben.render(
            <Car 
                maker= {myCar.brand} 
                appearance={myCar.color} 
                year= {myCar.year}
            />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
