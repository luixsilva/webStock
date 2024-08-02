import React from "react";
import "../Grid/index.css";

export const Grid = ({ children, display = "block" }) => {
  return <div className={`grid-container ${display}`}>{children}</div>;
};

export const GridItem = ({ children, xs, md, lg }) => {
  const classes = `grid-item grid-item-xs-${xs} grid-item-md-${md} grid-item-lg-${lg}`;
  return <div className={classes}>{children}</div>;
};
