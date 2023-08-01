import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../services/requests.favoritos';
import BookCard from '../Components/BookCard/BookCard';

const FavoritosContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52, #4d73a5 165%);
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDoServidor = await getFavoritos()
    setFavoritos(favoritosDoServidor);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <FavoritosContainer>
      {
        favoritos.map((favorito, index) => {
          const props = { ...favorito, deleteAtivo: true }
          return <BookCard {...props} key={index} />
        })
      }
    </FavoritosContainer>
  );
}

export default Favoritos;
