import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  padding: 8px 0px;
  color: #fff;
  text-align: center;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
