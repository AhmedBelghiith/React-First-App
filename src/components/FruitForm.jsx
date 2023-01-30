import { useState } from "react";
export default function FruitForm({ handleAdd }) {
  //state
  const [nouveauFruit, setNouveauFruit] = useState("");

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    //copie de state

    //manipuler le state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id: id, nom: nom };
    //fruitsCopy.push(fruitAAjouter);
    handleAdd(fruitAAjouter);
    //modifier mon state avec le setter
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  //renders
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit..."
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}
