import React from "react";
import styled from "styled-components";
export default function DescriptionView() {
  const Container = styled.div`
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  return (
    <Container>
      <div>
        <div>
          <h3>John mark Doe Kyzer</h3>
          <span>Coach</span>
        </div>
        <ul>
          <li>
            <span>Position:</span> Coach
          </li>
          <li>
            <span>Experience:</span> 10 Years
          </li>
          <li>
            <span>Email:</span> edith@mail.com
          </li>
          <li>
            <span>Website:</span> www.example.com
          </li>
          <li>
            <span>Phone:</span> 507 - 541 - 4567
          </li>
        </ul>
      </div>
    </Container>
  );
}
