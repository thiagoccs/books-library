import React from "react";
import PropTypes from 'prop-types';
import "./BookCard.css";

function BookCard({ titulo, imagem, autor, foto, ano }) {
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
          style={{ backgroundImage: `url(${foto})` }}
        ></div>
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
