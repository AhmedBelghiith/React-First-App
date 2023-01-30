export default function Fruit({ fruitInfo, onClick }) {
  //state
  /*   const fruitInfo = props.fruitInfo;
  const deleteFruit = props.deleteFruit; */
  /*   const { fruitInfo, deleteFruit } = props;
   */ //comportments

  //affichage (renders)
  return (
    <div>
      {" "}
      <li>
        {fruitInfo.nom} <button onClick={onClick}>X</button>
      </li>
    </div>
  );
}
