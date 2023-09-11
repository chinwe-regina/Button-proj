import React from "react";
import styled from "styled-components";

interface iButton {
  text: string;
  bcc: string;
  color: string;
}

const GlobalButton: React.FC<iButton> = ({ text, color, bcc }) => {
  return (
    <div>
      <Button bcc={bcc} color={color}>
        {text}
      </Button>
    </div>
  );
};

export default GlobalButton;

const Button = styled.button<{ bcc: string }>`
  background-color: ${({ bcc }) => bcc};
  width: 90px;
  height: 40px;
  padding: 5px 5px 5px 5px;
  color: ${({ color }) => color};
  border: 1px solid;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transition: all 360ms;
    transform: translate(all 360ms);
  }
`;
