import React from 'react';
import { mock_livros2 } from "../../db/ultimosLancamentos"
import BookCard from "../BookCard/BookCard"
import styled from 'styled-components';
import { Titulo } from "../Titulo/Titulo";

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
    cursor: pointer;
`

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo
        cor="#EB9B00"
        tamanhoFonte="36px"
      >
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {
          mock_livros2.map((livro, index) => <BookCard {...livro} key={index} />)
        }
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  )
}