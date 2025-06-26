import React from "react";
import ChevronUp from "../assets/chevron-up.svg?react";

interface DropBoxSelectProps {
  name: string;
  show: boolean;
  setShow: (b: boolean) => void;
}

const DropBoxSelect: React.FC<DropBoxSelectProps> = ({
  name,
  show,
  setShow,
}) => {
  return (
    <div
      onClick={() => setShow(!show)}
      className="flex p-[6px_10px] items-center self-stretch rounded-[4px] border-1 border-solid border-black bg-white"
    >
      <div className="w-56">{name}</div>
      <ChevronUp className="w-24 h-24 aspect-square" />
    </div>
  );
};

export default DropBoxSelect;
