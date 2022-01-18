import React, { useState } from "react";
import './App.css';
import styled from "styled-components";
import ReactCardFlip from 'react-card-flip';
import img from './lij.jpeg';


function App() {

  const [isFlipped,setIsFlipped] = useState(false);

  const handleClick = ()=>{
    setIsFlipped(!isFlipped);
  };


  const MainContainer = styled.div`
  background-image:url(${img});
  `;

  const Heading = styled.h1`
  color:white;
  font-size:40px;
  font-weight:bold;
  display:flex;
  margin-top:0px;
  justify-content:center;
  background-color:mediumseagreen;
   `;

  const Button = styled.button`
  width:50vh;
  height:30vh;
  background-color:${(props)=>props.backgroundColor};
  color:white;
  cursor:pointer;
  border-radius:10px;
  font-size:20px;
  font-family:Cursive;
  box-shadow:inset 0 0 0 0 yellow;
  transition:ease-out 0.3s;
  outline:none;
  &:hover {
    box-shadow:inset 310px 0 0 0 yellow;
    cursor:pointer;
    color:black;
  }
  `;
  
  return (
    
    <div>
    <MainContainer>
    <Heading>Our Bussiness Categories</Heading>

       <ReactCardFlip isFlipped = {isFlipped} flipDirection="Vertical">
       <div 
       style={{
         backgroundColor:"blue", 
         height: 100,
         display:"flex",
         justifyContent:"center",
         color:"white",
         fontSize: 20,
        alignItems:"center"}}>

         Sales of the Day : Textile & Medicine...
         <button onClick={handleClick}>Check</button>
       </div>
      
      <div 
      style={{
        backgroundColor:"Green",
        height: 100,
        display:"flex",
        justifyContent:"center",
        color:"white",
        fontSize: 20,
        alignItems:"center",
        }}>
  
       Today's maximum sale products: Medicine & Groceries...
        <button onClick={handleClick}>ok</button>
      </div>
     </ReactCardFlip>
     <br></br>

    <div className="App">
    <Button  backgroundColor="red">FMCG</Button>
    <Button  backgroundColor="red">Medicine</Button>
    <Button  backgroundColor="red">Textile</Button>
    <Button  backgroundColor="red">Furniture</Button>
    </div>
    <br/><br/>
    <div className="App">
    <Button  backgroundColor="mediumseagreen">Cosmetics</Button>
    <Button  backgroundColor="mediumseagreen">Groceries</Button>
    <Button  backgroundColor="mediumseagreen">Automobile</Button>
    <Button  backgroundColor="mediumseagreen">Construction</Button>
  
    </div>
   
     <br></br>
     </MainContainer>
    
     </div>
  )
}

export default App;
