import React from "react";
import ItemBox from "./ItemBox";
import type { IName } from "../types/name";

interface DropBoxOptionsProps {
  names: IName[];
  ref?: React.Ref<HTMLDivElement>;
}

const DropBoxOptions: React.FC<DropBoxOptionsProps> = ({ names, ref }) => {
  return (
    <div
      ref={ref}
      className="flex p-8 flex-col items-start gap-12 self-stretch rounded-[4px] bg-white"
    >
      {names.map((v) => (
        <ItemBox key={v.id} name={v.name} />
      ))}
    </div>
  );
};

export default DropBoxOptions;
