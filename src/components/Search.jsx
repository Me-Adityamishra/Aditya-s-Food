import React, { useEffect, useState } from 'react';
import styles from './Search.module.css';
const URL='https://api.spoonacular.com/recipes/complexSearch';
const API_KEY='f2f54e4865574bf3be7739b9b9383801';

function Search({foodData,setFoodData}) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
     async function fetchFood() {
      const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
       const data= await res.json();
       console.log(data.results);
       setFoodData(data.results);
    }
      fetchFood()
  }, [query]);

  return (
    <>
      <div className={styles.SearchContainer}>
        <input 
        className={styles.input}
        value={query} onChange={(e) => setQuery(e.target.value)} type='text' />
      </div>
    </>
  );
}

export default Search;
