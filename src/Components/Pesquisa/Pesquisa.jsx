import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from "../Input/Input";
import { useContext } from 'react';
import BookCard from '../BookCard/BookCard';
import MyContext from '../../MyContext';
import { getLivros } from '../../services/requests';
// import { postFavoritos } from '../../services/requests.favoritos';

const PesquisaContainer = styled.section`
  /* background-image: linear-gradient(90deg, #3d5466 35%, #8394a1 165%); */
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  min-height: 270px;
  width: 100%;
`
const DivContainer = styled.div`
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

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
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
        onBlur={(event) => {
          const textoDigitado = event.target.value;
          const resultadoDePesquisa = livros.filter((livro) => {
            return livro.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
          });
          setLivrosGerais(resultadoDePesquisa);
        }}
      />
      <DivContainer>
        {
          livrosGerais.map((livro, index) => <BookCard {...livro} favAtivo={true} key={index}/>)
        }
      </DivContainer>
    </PesquisaContainer>
  )
}