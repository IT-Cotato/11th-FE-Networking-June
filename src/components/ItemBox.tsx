import React from "react";

interface ItemBoxProps {
  name: string;
}

const ItemBox: React.FC<ItemBoxProps> = ({ name }) => {
  return <div className="self-stretch">{name}</div>;
};

export default ItemBox;
