import { useState } from 'react';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import  './App.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetailComponent from './components/FoodDetailComponent';
function App() {
  const [foodData, setFoodData] = useState([]); // Corrected this line
  const [foodId,setFoodId]=useState("658615");

  return (
    <>
      <div className='App'>
      <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
        <InnerContainer>
        <FoodList  setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetailComponent foodId={foodId}/>
        </InnerContainer>
         
        </Container>
        
      </div>
    </>
  );
}

export default App;
