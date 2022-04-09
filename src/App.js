import "./App.css";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: "гулянка на ДР Сергея", id: 1 },
    { title: "буза в прямом эфире", id: 2 },
    { title: "гонки на коровьей ферме", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  return (
    <div className="App">
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Удалить событие</button>
        </div>
      ))}
    </div>
  );
}

export default App;
