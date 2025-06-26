import React from "react";

interface ItemBoxProps {
  name: string;
  setSelected: (v: string) => void;
  setShow: (b: boolean) => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ name, setSelected, setShow }) => {
  return (
    <div
      className="self-stretch"
      onClick={() => {
        setSelected(name);
        setShow(false);
      }}
    >
      {name}
    </div>
  );
};

export default ItemBox;
