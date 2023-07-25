import React from "react";
import PropTypes from 'prop-types';
import "./BookCard.css";
import imagem from '../../images/padrão.jpeg'
import fotAutor from '../../images/autor.jpeg'
import { styled } from 'styled-components';

const BttnDelete = styled.button`
  border-radius: 50%;
  border: 2px solid black;  
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  background-color: orange; /* Cor de fundo do botão (substitua pela cor desejada) */
  color: black; /* Cor do texto dentro do botão (substitua pela cor desejada) */
  font-size: 20px; /* Tamanho da fonte do texto dentro do botão */
  font-weight: bold;
  margin-left: 5px;
  align-self: flex-end;
  cursor: pointer; /* Altera o cursor para indicar que o botão é clicável */
`

function BookCard({ titulo, autor, ano }) {
  return (
    <div className="book-card">
      <div
        className="book-image"
        style={{ backgroundImage: `url(${imagem})` }}
      ></div>
      <div className="book-info">
        <div className="book-details">
          <h2 className="book-title">{titulo}</h2>
          <p className="book-author"><strong>Autor: </strong>{autor}</p>
          <p className="book-year"><strong>Ano: </strong>{ano}</p>
        </div>
        <div
          className="author-photo"
          style={{ backgroundImage: `url(${fotAutor})` }}
        ></div>
        <BttnDelete>X</BttnDelete>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  titulo: PropTypes.string,
  imagem: PropTypes.string,
  autor: PropTypes.string,
  foto: PropTypes.string,
  ano: PropTypes.number,
}.isRequired;


export default BookCard;
