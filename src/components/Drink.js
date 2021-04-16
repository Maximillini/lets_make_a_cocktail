const Drink = (props) => {
  return (
    <div className="drink-info">
      <div className="drink-name">{props.drink.strDrink}</div>
      <img src={props.drink.strDrinkThumb} />
      <div className="instructions">{props.drink.strInstructions}</div>
    </div>
  )
}

export default Drink;
