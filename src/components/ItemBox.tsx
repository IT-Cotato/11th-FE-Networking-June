import React from "react";
import { ANIMATION_DURATION_BG } from "../constants/values";

interface ItemBoxProps {
  name: string;
  setSelected: (v: string) => void;
  setShow: (b: boolean) => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ name, setSelected, setShow }) => {
  return (
    <div
      className={`self-stretch hover:bg-blue-100 transition-bg duration-${ANIMATION_DURATION_BG} ease-out`}
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
