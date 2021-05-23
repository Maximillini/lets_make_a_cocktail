const Drink = (props) => {
  let ingredients = [];

  // TODO: get measurements for ingredients
  for (const [key, value] of Object.entries(props.drink)) {
    if (key.includes('strIngredient') && !!value) ingredients.push(value);
  }

  const ingredientList = () => ingredients.map((ingredient, idx) => <li key={ingredient + idx}>{ingredient}</li>);

  return (
    <div className="drink-info">
      <div className="drink-name">{props.drink.strDrink}</div>
      <img src={props.drink.strDrinkThumb} />
      <ul className="ingredient-list">
        {ingredientList()}
      </ul>
      <div className="instructions">{props.drink.strInstructions}</div>
    </div>
  )
}

export default Drink;
