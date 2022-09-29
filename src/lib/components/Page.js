import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem 2rem;
`;

export const Page = ({ children, ...rest }) => {
  return <Wrapper>{children}</Wrapper>;
};
