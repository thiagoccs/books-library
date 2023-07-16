import React from 'react';
import Header from './Components/Header/Header';
import styled from 'styled-components';
import Pesquisa from './Components/Pesquisa/Pesquisa';
import UltimosLancamentos from './Components/UltimosLancamentos/UltimosLancamentos';
import MyProvider from './MyProvider';

const AppContainer = styled.div`
/* 
  height: 100vh;
  width: 100vw; */
  background-image: linear-gradient(90deg, #002f52, #4d73a5 165%);

`

function App() {
  return (
    <MyProvider>
      <AppContainer>
        <Header />
        <Pesquisa />
        <UltimosLancamentos />
      </AppContainer>
    </MyProvider>
  );
}

export default App;
