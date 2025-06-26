import { useRef, useState } from "react";
import type { IName } from "../types/name";
import DropBoxOptions from "./DropBoxOptions";
import DropBoxSelect from "./DropBoxSelect";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

interface DropBox {
  names: IName[];
}

const DropBox = ({ names }: DropBox) => {
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);

  useOnClickOutside(optionsRef, () => setShow(false));

  return (
    <div className="flex w-100 flex-col items-start gap-2">
      <DropBoxSelect name={"조원영"} show={show} setShow={setShow} />
      {show && <DropBoxOptions names={names} ref={optionsRef} />}
    </div>
  );
};

export default DropBox;
