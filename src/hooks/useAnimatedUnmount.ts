import { useEffect, useRef, useState } from "react";

export function useAnimatedUnmount(isOpen: boolean) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const handleAnimationEnd = () => {
      if (!isOpen) setShouldRender(false);
    };

    currentRef.addEventListener("animationend", handleAnimationEnd);
    return () => {
      currentRef.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [isOpen]);

  return { shouldRender, ref };
}
