import styled from "styled-components";

const NavMenu = styled.div`
  padding: 0.5rem calc((70vw - 1000px) / 2);

  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default NavMenu;
