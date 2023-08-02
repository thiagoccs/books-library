import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../services/requests.favoritos';
import BookCard from '../Components/BookCard/BookCard';
import MyContext from '../MyContext';

const FavoritosContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52, #4d73a5 165%);
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .texto {
    color: white;
  }
`

function Favoritos() {
  const { atualizado } = useContext(MyContext);
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDoServidor = await getFavoritos()
    setFavoritos(favoritosDoServidor);
  }

  useEffect(() => {
    fetchFavoritos();
  }, [atualizado]);

  return (
    <FavoritosContainer>
      { favoritos.length > 0 ?
        favoritos.map((favorito, index) => {
          const props = { ...favorito, deleteAtivo: true }
          return <BookCard {...props} key={index} />
        }) : <h1 className='texto'>Você não possui nenhum livro favoritado</h1>
      }
    </FavoritosContainer>
  );
}

export default Favoritos;
