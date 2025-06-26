import { useState } from "react";
import type { IName } from "../types/name";
import DropBoxOptions from "./DropBoxOptions";
import DropBoxSelect from "./DropBoxSelect";

interface DropBox {
  names: IName[];
}

const DropBox = ({ names }: DropBox) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex w-100 flex-col items-start gap-2">
      <DropBoxSelect name={"조원영"} show={show} setShow={setShow} />
      {show && <DropBoxOptions names={names} />}
    </div>
  );
};

export default DropBox;
