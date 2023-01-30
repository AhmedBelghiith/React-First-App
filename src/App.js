import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  //state (etat/données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  //comportements
  // const handleDelete = (id) => {
  //   console.log(id);
  //   //copie de state
  //   //const fruitsCopy = fruits.slice();
  //   const fruitsCopy = [...fruits]; //spread Operator
  //   //manipuler le state
  //   const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

  //   //modifier mon state avec le setter
  //   setFruits(fruitsCopyUpdated);
  // };

  const fruitPref = (nomFruit) => {
    alert(`mon fruit prefere: ${nomFruit}`);
  };

  const handleAdd = (fruitAAjouter) => {
    //const fruitsCopy = fruits.slice();
    const fruitsCopy = [...fruits]; //spread Operator
    //manipuler le state
    fruitsCopy.push(fruitAAjouter);

    //modifier mon state avec le setter
    setFruits(fruitsCopy);
  };

  //affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => fruitPref(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}
export default App;
