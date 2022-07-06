import React from "react";
import { StyledHeader } from "./styled/Header.styled";
import Container from "./styled/Container.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <h1>Huddle</h1>
      </Container>
    </StyledHeader>
  );
}

export default Header;
