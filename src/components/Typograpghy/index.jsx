import React from 'react';
import PropTypes from 'prop-types';
import '../Typograpghy/index.css'; // Certifique-se de criar e adicionar estilos adequados

export const Typography = ({
  variant = 'body1', // Define o estilo padrão do texto
  component = 'p', // Define o componente HTML padrão
  align = 'left', // Alinhamento do texto
  children,
  className = '',
}) => {
  const classNames = `typography ${variant} ${align} ${className}`;
  
  // Renderiza o componente HTML especificado
  return React.createElement(component, { className: classNames }, children);
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption']),
  component: PropTypes.oneOf(['p', 'span', 'div', 'label']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
