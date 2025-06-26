import React from "react";
import ItemBox from "./ItemBox";
import type { IName } from "../types/name";

interface ItemListProps {
  names: IName[];
}

const ItemList: React.FC<ItemListProps> = ({ names }) => {
  return (
    <div className="flex p-8 flex-col items-start gap-12 self-stretch rounded-[4px] bg-white min-w-100">
      {names.map((v) => (
        <ItemBox key={v.id} name={v.name} />
      ))}
    </div>
  );
};

export default ItemList;
