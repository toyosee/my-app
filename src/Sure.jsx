import './App.css'

// function Garage(){
//     return <>
//         <Car maker= {toyota.brand} appearance={toyota.color}/>
//         <h2>I live in my garage</h2>
//     </>
// }

function Car(props){
    return (
            <h2>
                I am a {props.maker}!, 
                i am {props.appearance} in color 
                {props.year} model
            </h2>
            );
}
export default Car;
