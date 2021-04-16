import React, {useState, useEffect} from 'react';
import SearchForm from './SearchForm.js';
import Drink from './Drink/Drink.js';
import {getRandom} from '../fetch_actions.js';
import './SearchPanel.css'

const SearchPanel = (props) => {

  const[drink, setDrink] = useState({});

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then((body) => {
        // console.log(body.drinks[0]);
        setDrink(() => body.drinks[0]);
      })
      .catch((err) => console.error(`Failed to fetch, something went wrong -- ${err}`));
  }, []);

  return (
    <div className="search-panel">
      {/* <h3>What Booze Do I Want To Use?</h3>
      <SearchForm/> */}
      <Drink drink={drink}/>
    </div>
  );
}

export default SearchPanel;
