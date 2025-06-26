import { useRef, useState } from "react";
import type { IName } from "../types/name";
import styled, { keyframes } from "styled-components";
import Chevron from "../assets/chevron-up.svg";
import { useOutsideClick } from "./../hooks/useOutSideClick";
import { useAnimatedUnmount } from "../hooks/useAnimatedUnmount";

interface DropBox {
  names: IName[];
}

const slideIn = keyframes`
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: scaleY(1);
    opacity: 1;
  }
  to {
    transform: scaleY(0);
    opacity: 0;
  }
`;

const DropBox = ({ names }: DropBox) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useState<IName>({
    id: 2,
    name: "김초연",
  });
  const dropboxRef = useRef<HTMLDivElement>(null);
  const { shouldRender, ref } = useAnimatedUnmount(isOpen);

  useOutsideClick(dropboxRef, () => setIsOpen(false));

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (name: IName) => {
    setSelectedName(name);
    setIsOpen(false);
  };

  return (
    <Container ref={dropboxRef}>
      <DropBoxButton onClick={toggleOpen}>
        {selectedName.name}
        <ChevronImg src={Chevron} $isOpen={isOpen} />
      </DropBoxButton>
      {shouldRender && (
        <Options ref={ref} $isOpen={isOpen}>
          {names.map((name) => (
            <OptionItems key={name.id} onClick={() => handleSelect(name)}>
              {name.name}
            </OptionItems>
          ))}
        </Options>
      )}
    </Container>
  );
};

export default DropBox;

const Container = styled.div`
  width: 100px;
  height: 300px;
`;

const DropBoxButton = styled.button`
  width: 100%;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChevronImg = styled.img<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const Options = styled.ul<{ $isOpen: boolean }>`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  margin: 2px 0;
  flex-direction: column;
  gap: 12px;

  transform-origin: top;
  animation-name: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)};
  animation-fill-mode: forwards;
  animation-duration: 0.3s;
`;

const OptionItems = styled.li`
  cursor: pointer;
  list-style: none;
`;
