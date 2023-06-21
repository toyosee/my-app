import Car from './Sure';

let details = ["Honda", 'Red', 1990];

function Garage(){
    return <>
        <Car maker= {details[0]} appearance={details[1]}/>
        <h2>I live in my garage</h2>
        <li>
            {details.map((detail) => <Car brand = {detail}/>)}
        </li>
    </>
}

export default Garage;