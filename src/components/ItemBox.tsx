import React from "react";

interface ItemBoxProps {
  name: string;
  setSelected: (v: string) => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ name, setSelected }) => {
  return (
    <div
      className="self-stretch"
      onClick={() => {
        setSelected(name);
      }}
    >
      {name}
    </div>
  );
};

export default ItemBox;
