import React, { Component } from "react";
import styled from "styled-components";
import MainBox from './Components/MainBox';


const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  color: black;
  font-size: large;
  font-weight: bold;
  margin-bottom: 15px;
`;

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Title>Unit6 연락처</Title>
        <MainBox></MainBox>
      </MainContainer>
    );
  }
}

export default App;
