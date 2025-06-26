import React from "react";
import ItemBox from "./ItemBox";
import type { IName } from "../types/name";

interface DropBoxOptionsProps {
  names: IName[];
  ref?: React.Ref<HTMLDivElement>;
  setSelected: (v: string) => void;
}

const DropBoxOptions: React.FC<DropBoxOptionsProps> = ({
  names,
  ref,
  setSelected,
}) => {
  return (
    <div
      ref={ref}
      className="flex p-8 flex-col items-start gap-12 self-stretch rounded-[4px] bg-white"
    >
      {names.map((v) => (
        <ItemBox key={v.id} name={v.name} setSelected={setSelected} />
      ))}
    </div>
  );
};

export default DropBoxOptions;
