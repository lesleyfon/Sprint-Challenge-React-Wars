import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'


import StarWars from './components/StarWars'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [allStarWars, setAllStarWars] = useState([]);
const [page, setPage] = useState(1)
useEffect(()=>{
console.log('somnethins jfa')
  let url = ``;
  if( page < 1 ){
   url = `https://swapi.co/api/people/?page`
  }else{
   url = `https://swapi.co/api/people/?page=${page}`
  }
  axios.get(url)
    .then(res=>{
      setAllStarWars(res.data.results)
    }).catch(err=>{
      console.error("Error: ", err)
    })
}, [page])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <NextPrev>
        <button onClick={()=>{setPage(page - 1)}}>Previous Page</button>
        <button onClick={()=>{setPage(page + 1)}}> Next Page</button>
      </NextPrev>
      <StarWars 
        allStarWars = { allStarWars }
      />
    </div>
  );
}

export default App;




//Styled Components 
const NextPrev = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
`; 
