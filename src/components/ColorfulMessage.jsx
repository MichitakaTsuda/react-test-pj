import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    color, //objectとプロパティ名が同じ時はコロン前を省略できる color: color => color
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
