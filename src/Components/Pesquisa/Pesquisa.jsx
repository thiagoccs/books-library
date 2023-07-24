import React from 'react';
import styled from 'styled-components';
import Input from "../Input/Input";
import { useContext } from 'react';
import { mock_livros } from '../../db/dadosDePesquisa';
import BookCard from '../BookCard/BookCard';
import MyContext from '../../MyContext';

const PesquisaContainer = styled.section`
  /* background-image: linear-gradient(90deg, #002F52 35%, #326589 165%); */
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  min-height: 270px;
  width: 100%;
`

const BodyContainer = styled.body`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: center;
  /* justify-content: space-between; */
  max-width: 100vw;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

export default function Pesquisa() {
  const { livrosGerais, setLivrosGerais } = useContext(MyContext);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Pesquise pelo nome do livro"
        onChange={(event) => {
          const textoDigitado = event.target.value;
          const resultadoDePesquisa = mock_livros.filter((livro) => livro.titulo.includes(textoDigitado));
          setLivrosGerais(resultadoDePesquisa);
        }}
      />
      <BodyContainer>
        {
          livrosGerais.map((livro, index) => <BookCard {...livro} key={index} />)
        }
      </BodyContainer>
    </PesquisaContainer>
  )
}