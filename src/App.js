import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '74b1c963';
  const API_KEY = '641ce4efe4ceb5ffd8935e653e5debfa';

  const [recipes, setRecipes] = useState([]);

  useEffect(()=> {
    getRecipes();
  });

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => {
        <Recipe />
      })}
    </div>
  );
}

export default App;
