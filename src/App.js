import logo from "./logo.svg";
import "./App.css";

function App() {
  let name = "Сергей";

  const handleClick = () => {
    name = "Екатерина";
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
