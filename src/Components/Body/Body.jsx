import React from 'react';
import BookCard from "../BookCard/BookCard";
import { styled } from "styled-components";
import { mock_livros } from "../../dadosDePesquisa";

const BodyContainer = styled.body`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
    /* justify-content: space-between; */
    max-width: 100vw;
`

export default function Body() {
  return (
    <BodyContainer>
      {
        mock_livros.map((livro, index) => <BookCard {...livro} key={ index }/>)
      }
    </BodyContainer>

  )
}
