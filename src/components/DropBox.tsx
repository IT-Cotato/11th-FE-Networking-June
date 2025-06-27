import { useEffect, useRef, useState } from "react";
import type { IName } from "../types/name";
import DropBoxOptions from "./DropBoxOptions";
import DropBoxSelect from "./DropBoxSelect";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { ANIMATION_DURATION } from "../constants/values";

interface DropBox {
  names: IName[];
}

const DropBox = ({ names }: DropBox) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(6);

  useOnClickOutside(dropdownRef, () => setShow(false));

  useEffect(() => {
    let openTimer: number;
    let closeTimer: number;

    if (show) {
      setIsRendered(true);
      // DropBoxOptions 마운트 후에 애니메이션 동작
      openTimer = setTimeout(() => {
        setActive(true);
      }, 100);
    } else {
      setActive(false);
      // 애니메이션 동작 이후에 DropBoxOptions 언마운트
      closeTimer = setTimeout(() => {
        setIsRendered(false);
      }, ANIMATION_DURATION);
    }

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [show]);

  return (
    <div ref={dropdownRef} className="flex w-100 flex-col items-start gap-2">
      <DropBoxSelect
        name={names[selected - 1].name}
        show={show}
        setShow={setShow}
      />
      {isRendered && (
        <div
          className={`
            self-stretch 
            max-h-0
            overflow-hidden 
            transition-[max-height] duration-1500 ease-out
            ${active ? "max-h-[100vh]" : "max-h-0"}
          `}
        >
          <DropBoxOptions
            nameArray={names}
            setSelected={setSelected}
            setShow={setShow}
          />
        </div>
      )}
    </div>
  );
};

export default DropBox;
