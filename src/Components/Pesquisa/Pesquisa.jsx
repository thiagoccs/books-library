import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from "../Input/Input";
import { useContext } from 'react';
import BookCard from '../BookCard/BookCard';
import MyContext from '../../MyContext';
import { getLivros } from '../../services/requests';

const PesquisaContainer = styled.section`
  /* background-image: linear-gradient(90deg, #3d5466 35%, #8394a1 165%); */
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
  /* max-width: 100vw; */
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
  const [livros, setLivros] = useState([]);
  
  async function fetchLivros () {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
    setLivrosGerais(livrosDaAPI)
  }

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Pesquise pelo nome do livro"
        onChange={(event) => {
          const textoDigitado = event.target.value;
          const resultadoDePesquisa = livros.filter((livro) => livro.titulo.includes(textoDigitado));
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