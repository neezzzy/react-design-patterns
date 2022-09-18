import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;

export default function SplitScreen({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 1,
}) {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
}
