import "./App.css";
import Card from "./Card";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [pets,setPets]=useState([])

  function registrar(datos) {
    setPets([...pets, datos])
  }

  return (
    <div className="App">
      <Form registrar={registrar} />
      <Card pets={pets}/>
    </div>
  );
}

export default App;
