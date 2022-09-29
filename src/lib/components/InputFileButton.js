import styled from "styled-components";
import { Label } from "./typography";

const Wrapper = styled.div`
  & > input[type="file"] {
    display: none;
  }

  & > label {
    height: 53px;
    padding: 8px 16px;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: bold;
    font-size: 15px;
    border-radius: 4px;
    border: 3px solid ${({ theme }) => theme.black};
    cursor: pointer;
  }
`;

// Input for files that is looking as a button
export const InputFileButton = ({ id, label, inputProps, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Label htmlFor={id}>{label}</Label>
      <input {...inputProps} id={id} />
    </Wrapper>
  );
};
