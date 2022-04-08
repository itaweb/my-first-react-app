import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Сергей");

  const handleClick = () => {
    setName("Екатерина");
    console.log(name);
  };

  return (
    <div className="App">
      <h1>Меня зовут {name}</h1>
      <button onClick={handleClick}>Сменить имя</button>
    </div>
  );
}

export default App;
