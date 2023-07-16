import React from "react";
import PropTypes from 'prop-types';
import './Botao.css'

export default function Botao({ bttnName }) {
  return (
    <button type="button" className='botao'>{ bttnName }</button>
  );
}

Botao.propTypes = {
  bttnName: PropTypes.string,
}.isRequired;
