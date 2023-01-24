
import './App.css';
import axios from "axios";
import { useQuery } from 'react-query'

function App() {

const fetchDataHandler = () => {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.data.meals);
};

const {isError, isLoading, data, error} = useQuery(
  'meal', 
  fetchDataHandler
  );

  if(isLoading) {
    return <p>Loading....</p>
  }

  if(isError) {
    return <p>{error}</p>
  }

  console.log("data is ", data);


  return (
    <div className="App">
      <h5>{data[0].strMeal}</h5>
      <img src={data[0].strMealThumb} alt="#"/>
        <button type="">Get Another Meal</button>
    </div>
  );
}

export default App;
