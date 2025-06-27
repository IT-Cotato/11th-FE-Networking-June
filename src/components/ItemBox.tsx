import React from "react";
import { ANIMATION_DURATION_BG } from "../constants/values";
import type { IName } from "../types/name";

interface ItemBoxProps {
  nameObject: IName;
  setSelected: (v: number) => void;
  setShow: (b: boolean) => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({
  nameObject,
  setSelected,
  setShow,
}) => {
  return (
    <div
      className={`self-stretch hover:bg-blue-100 transition-bg duration-${ANIMATION_DURATION_BG} ease-out`}
      onClick={() => {
        setSelected(nameObject.id);
        setShow(false);
      }}
    >
      {nameObject.name}
    </div>
  );
};

export default ItemBox;
