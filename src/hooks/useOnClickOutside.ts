import { useEffect, type RefObject } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement | null>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // ref가 없거나, 클릭한 요소가 ref의 내부에 있다면 아무것도 하지 않음
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
