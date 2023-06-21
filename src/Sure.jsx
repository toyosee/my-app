import './App.css';

function Car(props){
    return (
            <h2>
                I am a {props.maker}!, 
                i am {props.appearance} in color 
                {props.year} model,
                {props.brand}
            </h2>
            );
}
export default Car;
