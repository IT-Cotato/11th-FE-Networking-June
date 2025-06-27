import React from "react";
import ItemBox from "./ItemBox";
import type { IName } from "../types/name";

interface DropBoxOptionsProps {
  nameArray: IName[];
  ref?: React.Ref<HTMLDivElement>;
  setSelected: (v: number) => void;
  setShow: (b: boolean) => void;
}

const DropBoxOptions: React.FC<DropBoxOptionsProps> = ({
  nameArray,
  ref,
  setSelected,
  setShow,
}) => {
  return (
    <div
      ref={ref}
      className="flex p-8 flex-col items-start gap-12 self-stretch rounded-[4px] bg-white"
    >
      {nameArray.map((v) => (
        <ItemBox
          key={v.id}
          nameObject={v}
          setSelected={setSelected}
          setShow={setShow}
        />
      ))}
    </div>
  );
};

export default DropBoxOptions;
