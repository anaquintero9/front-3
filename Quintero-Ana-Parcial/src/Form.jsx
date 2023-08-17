import { useState } from "react";

function Form({registrar}) {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      petName.trim().length < 3 ||
      petBreed.trim().length < 6 ||
      petName[0] == " "
    ) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      registrar({petName,petBreed});
      setPetName("");
      setPetBreed("");
      setError("");
    }
  }

  return (
    <div>
      <h2>Inscripción de Mascotas</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Nombre
          <input
            type="text"
            placeholder="Ej. Ramona"
            value={petName}
            onChange={(e)=>setPetName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Raza
          <input
            type="text"
            placeholder="Ej. Dalmata"
            value={petBreed}
            onChange={(e)=>setPetBreed(e.target.value)}
          />
        </label>
        <h4>{error}</h4>
          <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Form;
