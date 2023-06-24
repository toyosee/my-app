import './App.css';

function Football(){
    const shoot = (a) => {
        alert(a);
    }
    return (<button onClick={() => shoot("Goal!")}>Take the shot</button>)
}

//IF - return,  &&, loggedIN ? <Profile />  : "Not found"

export default Football;
