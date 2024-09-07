import React from 'react'
import FoodItem from './FoodItem'

function FoodList({foodData,setFoodId}) {
  return (
    <>
    <div>
    {foodData.map((food) => (
          <FoodItem  setFoodId={setFoodId} key={food.id} food={food}/>
        ))}
    </div>
    </>
  )
}

export default FoodList
