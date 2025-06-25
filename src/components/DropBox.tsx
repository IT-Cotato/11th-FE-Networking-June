import { useState } from "react";
import type { IName } from "../types/name";
import styled from "styled-components";

interface DropBox {
  names: IName[];
}

const DropBox = ({ names }: DropBox) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useState<IName | null>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <Container>
      <DropBoxButton onClick={toggleOpen}>
        {selectedName?.name || "김초연"}
      </DropBoxButton>
      {isOpen && <Options></Options>}
    </Container>
  );
};

export default DropBox;

const Container = styled.div`
  width: 100px;
`;

const DropBoxButton = styled.button`
  width: 100%;
  padding: 6px 10px;
  background: white;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Options = styled.ul`
  background: white;
  border-radius: 4px;
  border: none;
  display: flex;
  padding: 8px;
  margin: 2px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
