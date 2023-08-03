import React, { useContext, useState } from "react";
import PropTypes from 'prop-types';
import "./BookCard.css";
import imagem from '../../images/padrão.jpeg'
import fotAutor from '../../images/autor.jpeg'
import { styled } from 'styled-components';
import { deleteFavoritos, postFavoritos } from '../../services/requests.favoritos';
import MyContext from '../../MyContext';

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

function BookCard({ titulo, autor, ano, id, deleteAtivo = false, favAtivo = false }) {
  const { atualizado, setAtualizado } = useContext(MyContext);


  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = async () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      const result = await postFavoritos(id);
      if (result === 'isFavorite') {
        setIsChecked(false)
        return alert(`Livro: ${titulo} já está em favoritos`);
      }
      return alert(`Livro: ${titulo} favoritado`);
    }
    return;
  };

  const deletarFavorito = async () => {
    await deleteFavoritos(id);

    setAtualizado(!atualizado)

    return alert(`Livro: ${titulo} deletado`);
  }

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
        <div className="canto">
          {
            favAtivo ? <label className="label">favoritar:<input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            /></label> : ''
          }
          {deleteAtivo ? <BttnDelete onClick={deletarFavorito}>X</BttnDelete> : <br></br>}
          <div
            className="author-photo"
            style={{ backgroundImage: `url(${fotAutor})` }}
          ></div>
        </div>
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
