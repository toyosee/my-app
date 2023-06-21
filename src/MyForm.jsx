import { useState } from "react";

function MyForm(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
        alert(`Are you sure you want to ${name} ?`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return(
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
            <input type="text" 

                name ="username"
                value={inputs.username || ""}
                onChange={handleChange}
            />
        </label>
        <input type="Submit" />
    </form>
    )
};

export default MyForm;