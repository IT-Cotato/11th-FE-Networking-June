import type { IName } from "../types/name";
import { useState } from "react";
interface DropBox {
  names: IName[];
}

const DropBox = ({ names }: DropBox) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<IName | null>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: IName) => {
    setSelected(item);
    setIsOpen(false);
  };
  return (
    <div>
      <div>
        <button onClick={handleToggle}>
          <span>{selected ? selected.name : "이름을 입력하세요"}</span>
          <img src="/src/assets/chevron-up.svg" alt="토글 아이콘" />
        </button>
      </div>
      <div>
        {names.map((item) => (
          <button key={item.id} onClick={() => handleSelect(item)}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropBox;
