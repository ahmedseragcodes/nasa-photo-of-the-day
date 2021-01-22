import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY } from "./constants/index.js";
import axios from "axios";
import styled from "styled-components";
import theme from "./theme/index.js";



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
      <NasaHeader>
      <NasaTitle>NASA Astronomical Photo Of The Day</NasaTitle>
      <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA Logo" />
      </NasaHeader>
      <PhotoTitle>Introducing {title}</PhotoTitle>
      <NasaPhoto src={dailyPhoto} alt="NASA's astronomical picture of the day, typically displaying photos of stars, planets, moons, galaxies and so on" />
      <NasaDate>{date}</NasaDate>
      <NasaExplanation>{explanation}</NasaExplanation>
    </NasaContainer>
  );
}
//Styled Components 

const NasaContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background-color: ${theme.teritaryColor};
color: ${theme.secondaryColor}
`
const NasaHeader=styled.div`
display: flex;
justify-content: center;;
margin-bottom: 3rem;
margin-top: .5rem;
`


const NasaTitle=styled.h1`
font-size: 1.8rem;
width: 30%;
`

const PhotoTitle=styled.h2`
font-size: 1.8rem;
color: ${theme.secondaryColor}
`

const NasaPhoto=styled.img`
width: 80rem;
`

const NasaDate=styled.p`
font-size: 1.5rem;
`
const NasaExplanation=styled.p`
width: 50%;
font-size: 1.5rem;
`

export default App;
