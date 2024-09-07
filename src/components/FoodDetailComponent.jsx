import React, { useEffect, useState } from 'react';
import styles from './FoodDetailComponent.module.css';
import ItemList from './ItemList';

function FoodDetailComponent({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = 'f2f54e4865574bf3be7739b9b9383801';

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img 
          className={styles.recipeImage} 
          src={food.image} 
          alt={food.title} 
        />
        <div className={styles.recipeDetail}>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦 <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "🥕Vegetarian" : "🍗Non-Vegetarian"}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>

        <div>
          💲 <span><strong>{food.pricePerServing / 100} Per Serving</strong></span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading}/>

        <h2>Instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions?.length > 0 && 
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetailComponent;
