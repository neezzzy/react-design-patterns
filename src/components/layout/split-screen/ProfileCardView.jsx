import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;

export default function ProfileCardView() {
  return (
    <Container>
      <Img src="../../../src/assets/images/pug.jpg" />
    </Container>
  );
}
