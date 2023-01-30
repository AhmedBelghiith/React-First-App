# React-First-App

## Installation

```
npm create-react-app React-Tuto
```

## List component
### Affichage
```js
//state (etat/données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);
  
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
```
### Delete

```js
 const handleDelete = (id) => {
 console.log(id);
  //copie de state
  //const fruitsCopy = fruits.slice();
  const fruitsCopy = [...fruits]; //spread Operator
  //manipuler le state
  const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

  //modifier mon state avec le setter
  setFruits(fruitsCopyUpdated);
  };
```

## Form component
### Add
```js
const handleAdd = (fruitAAjouter) => {
    //const fruitsCopy = fruits.slice();
    const fruitsCopy = [...fruits]; //spread Operator
    //manipuler le state
    fruitsCopy.push(fruitAAjouter);

    //modifier mon state avec le setter
    setFruits(fruitsCopy);
  };
```
### Form code
```js
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
```






