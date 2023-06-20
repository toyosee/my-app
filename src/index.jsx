import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ephrim from './Ephrim.js';
import Football from './Football';
import reportWebVitals from './reportWebVitals';

// const toyota = {
//     brand: 'Toyota',
//     color: 'Yellow'
// }
// //let mainCalc = `<h1>I want to use JSX ${13 + 3} </h1>`;
// function Car(props){
//     return <h2>I am a {props.maker}!, i am {props.appearance} in color</h2>
// }

// function Garage(){
//     return <>
//         <Car maker= {toyota.brand} appearance={toyota.color}/>
//         <h2>I live in my garage</h2>
//     </>
// }

// importing elements from HTML
const calc = ReactDOM.createRoot(document.getElementById('calc'));
const root = ReactDOM.createRoot(document.getElementById('root'));

// displaying to root element div
 root.render(
  <React.StrictMode>
    <App />
    <Ephrim />
   </React.StrictMode>
);


// Displaying to calc element div
calc.render(<Football />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
