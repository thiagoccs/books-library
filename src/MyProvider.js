import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [livrosGerais, setLivrosGerais] = useState([]);
  const [atualizado, setAtualizado] = useState(false);
  const contextValue = useMemo(() => ({
    livrosGerais,
    setLivrosGerais,
    atualizado,
    setAtualizado
  }), [livrosGerais, atualizado]);

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
