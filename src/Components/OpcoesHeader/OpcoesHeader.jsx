import React from "react";
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import Botao from '../Botoes/Botao';
import './OpcoesHeader.css';

const categoriasDeFiltro = ['Categorias', 'Minha Estante', 'Favoritos'];
const icones = [perfil, sacola];

export default function OpcoesHeader() {
  return (
    <div className='menus'>
      <ul className='opcoes'>
        {
          categoriasDeFiltro.map((nomeFiltro, index) => (
            <li className='opcao'  key={ index }><Botao bttnName={ nomeFiltro } /></li>
          ))
        }
      </ul>
      <ul className='icones'>
        {
          icones.map((icone, index) => (
            <li  key={ index }><img className='icone' src={ icone } alt='ícone'/></li>
          ))
        }
      </ul>
    </div>
  );
}