import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  //These are APP_id and APP_key from the Edamam API and, also, the example how to fetch request to the server
  const APP_ID = "a09cc460";
  const APP_KEY = "fe6d0e048833aa4d27557e949ffc5ba1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  //useEffect will be additionally called whe query state will be changed
  useEffect(() => {
    getRecipes();
  }, [query]);

  // fetching data from the API server by asynchronus function
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <h1>Find a recipe: </h1>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => {
          return <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={index.toString()}
          />
        })}
      </div>
    </div>
  );
}

export default App;
