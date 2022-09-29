import styled from "styled-components";

import { mapStyles } from "lib/utils";

const StyledButton = styled.button`
  ${({ theme, variant }) => mapStyles(theme.buttons[variant])};
  height: 53px;
  padding: 8px 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = ({ variant = "primary", children, ...rest }) => {
  return (
    <StyledButton {...rest} variant={variant}>
      {children}
    </StyledButton>
  );
};
