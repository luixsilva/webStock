import React from "react";
import PropTypes from "prop-types";
import "../Grid/index.css";

export const Grid = ({
  display = "flex",
  direction = "row",
  children,
  className = "",
  spacing = "0", // Valor padrão para espaçamento
}) => {
  return (
    <div
      className={`grid-container ${display} ${direction} spacing-${spacing} ${className}`}
    >
      {children}
    </div>
  );
};

export const GridItem = ({ children, xs, md, lg }) => {
  const classes = `grid-item grid-item-xs-${xs} grid-item-md-${md} grid-item-lg-${lg}`;
  return <div className={classes}>{children}</div>;
};

Grid.propTypes = {
  display: PropTypes.oneOf(["flex", "block"]),
  direction: PropTypes.oneOf(["row", "column"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(["0", "2", "4", "6"]), // Adicione os valores de espaçamento suportados
};
