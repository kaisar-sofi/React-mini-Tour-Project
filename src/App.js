
import React from "react";
import data from "./data";
import Tours from "./components/Tours";
import { useState } from 'react'
const App = () => {
  const [tours,settours]= useState(data);

 function removeTour(id)
 {
  const newTours = tours.filter(tour=>tour.id!==id)
  settours(newTours);
 }

 //initilaizing again if no tour left
 if(tours.length===0)
 {
  return(
    <div className="refresh">
    <h1>No Tours Left</h1>
      <button className="btn-white" onClick={()=>settours(data)}>refresh</button>
    </div>
  )
 }
  return (
    <div className="App">
      <Tours tours ={tours} removeTour= {removeTour}></Tours>
    </div>
  );
}

export default App;
