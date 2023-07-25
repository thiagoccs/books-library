import React from 'react';
import styled from 'styled-components';
import Pesquisa from '../Components/Pesquisa/Pesquisa';
import MyProvider from '../MyProvider';

const FavoritosContainer = styled.div`
/* 
  height: 100vh;
  width: 100vw; */
  background-image: linear-gradient(90deg, #002f52, #4d73a5 165%);
`

function Favoritos() {
  return (
    <MyProvider>
      <FavoritosContainer>
        <Pesquisa />
      </FavoritosContainer>
    </MyProvider>
  );
}

export default Favoritos;
