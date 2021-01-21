import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY } from "./constants/index.js";
import axios from "axios";
import styled from "styled-components";




function App(props) {

  
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
    <NasaContainer >
    <div className="App">
      <h1>NASA Astronomical Photo Of The Day</h1>
      <h2>{title}</h2>
      <NasaPhoto src={dailyPhoto} alt="NASA's astronomical picture of the day, typically displaying photos of stars, planets, moons, galaxies and so on" />
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
    </NasaContainer>
  );
}

const NasaContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background-color: #0B3D91;
color: #FC3D21;
`

const NasaPhoto=styled.img`
height: 20rem;
width: 20rem;
`

export default App;
