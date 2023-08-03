import React, { useEffect, useState } from 'react';
import BookCard from "../BookCard/BookCard"
import styled from 'styled-components';
import { Titulo } from "../Titulo/Titulo";
import { getLivros } from '../../services/requests';

const UltimosLancamentosContainer = styled.section`
    /* background-color: #EBECEE; */
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

export default function UltimosLancamentos() {
  const [livros, setLivros] = useState([]);

  async function getLivrosServer() {
    const allLivros = await getLivros();
    setLivros(allLivros);
  }

  useEffect(() => {
    getLivrosServer();
  }, []);

  return (
    <UltimosLancamentosContainer>
      <Titulo
        cor="#EB9B00"
        tamanhofonte="36px"
      >
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {
          livros.slice(-4).map((livro, index) => <BookCard {...livro} key={index} />)
        }
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  )
}