import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Сергей");
  const [events, setEvents] = useState([
    { title: "гулянка на ДР Сергея", id: 1 },
    { title: "буза в прямом эфире", id: 2 },
    { title: "гонки на коровьей ферме", id: 3 },
  ]);

  const handleClick = () => {
    setName("Екатерина");
    console.log(name);
  };

  return (
    <div className="App">
      <h1>Меня зовут {name}</h1>
      <button onClick={handleClick}>Сменить имя</button>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
