import React from "react";
import "../Link/index.css"

export const Link = ({ children, href }) => {
  return (
    <>
      <a className="custom-link" href={href}>{children}</a>
    </>
  );
};
