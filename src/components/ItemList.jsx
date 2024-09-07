import React from 'react'
import Item from './item'

function ItemList({food,isLoading}) {
  return (
    <>
    <div>
    <div>
           {isLoading?<p>Loading</p>
           : (food.extendedIngredients?.map((item) => (
            <Item item={item}/>
          )))
           
           }
         
        </div>
    </div>
    </>
  )
}

export default ItemList
