import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY } from "./constants/index.js";
import axios from "axios";

function App() {

  
  const [date, setDate]=useState("");
  
  const [explanation, setExplanation]=useState("");

  const [title, setTitle]=useState("");
  
  const [dailyPhoto, setDailyPhoto]=useState("");

  useEffect(function(){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(function(res){
      console.log(res);
      setDailyPhoto(res.data.url);
      setDate(res.data.date);
      setExplanation(res.data.explanation);
      setTitle(res.data.title);
    })
    .catch(function(err){
      console.log(err);
    })
  },[])


  return (
    <div className="App">
      <h1>NASA Astronomical Photo Of The Day</h1>
      <h2>{title}</h2>
      <img src={dailyPhoto} alt="NASA's astronomical photo of the day, typically displaying photos of stars, planets, moons, galaxies and so on" />
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
  );
}

export default App;
