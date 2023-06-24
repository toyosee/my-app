import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [myCar, setMyCar] = useState("-");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
            <option value="-">-</option>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    )
  };
  

export default MyForm;