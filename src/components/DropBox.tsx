import type { IName } from "../types/name";
import { useState } from "react";
interface DropBox {
  names: IName[];
}

const DropBox = ({ names }: DropBox) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<IName | null>(null);

  return <div>Drop Box</div>;
};

export default DropBox;
