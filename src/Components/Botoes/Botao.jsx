import React from "react";
import PropTypes from 'prop-types';
import './Botao.css'
import { Link } from 'react-router-dom';

export default function Botao({ bttnName }) {
  return (
    <Link to={`/${bttnName.replace(' ', '_').toLowerCase()}`}>
      <button type="button" className='botao'>{bttnName}</button>
    </Link>
  );
}

Botao.propTypes = {
  bttnName: PropTypes.string,
}.isRequired;
