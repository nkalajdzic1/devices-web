import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem 2rem;
`;

// Layout of the page, every page is wrapped with this component
export const Page = ({ children, ...rest }) => {
  return <Wrapper>{children}</Wrapper>;
};
