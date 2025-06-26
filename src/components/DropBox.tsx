import type { IName } from "../types/name";
import { useState, useRef, useEffect } from "react";
interface DropBox {
  names: IName[];
}

const DropBox = ({ names }: DropBox) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<IName | null>(null);
  const dropBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropBoxRef.current &&
        !dropBoxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: IName) => {
    setSelected(item);
    setIsOpen(false);
  };
  return (
    <div className="min-h-screen w-full bg-gray-350 p-4 flex justify-center items-start">
      <div className="relative min-w-[100px] " ref={dropBoxRef}>
        <button
          onClick={handleToggle}
          className="w-full bg-white border border-black rounded-sm px-[10px] py-[6px] flex items-start justify-between  focus:outline-none"
        >
          <div className="flex w-full items-start justify-between">
            <span className="text-left">
              {selected ? selected.name : "이름을 선택하세요"}
            </span>
            <img
              src="/src/assets/chevron-up.svg"
              alt="토글 아이콘"
              className={`transform transition-transform duration-200 ${
                isOpen ? "" : "rotate-180"
              }`}
            />
          </div>
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-[2px] bg-white rounded-sm py-2 z-10 flex flex-col">
            {names.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full text-left px-2 py-[6px] hover:bg-gray-100 rounded-sm"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropBox;
