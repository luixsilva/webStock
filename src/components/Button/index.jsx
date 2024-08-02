import React from "react";
import PropTypes from "prop-types";
import "../Button/index.css";

export const Button = ({
  type = "button",
  onClick,
  children,
  className,
  fullWidth = false,
  backgroundColor,
  textColor,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || "#007bff", // Cor de fundo padrão
    color: textColor || "#fff", // Cor do texto padrão
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className} ${fullWidth ? "full-width" : ""}`}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};
