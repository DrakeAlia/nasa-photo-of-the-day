import React from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";


// stylying component //
const TitleMe = styled.h1`
   font-family: 'Oswald', sans-serif;
    margin: 4%;
    `;

function App() {
  return (
    <TitleMe className="App">
      Photo Of The Day
      <Card />
      </TitleMe>
  );
}

export default App;
