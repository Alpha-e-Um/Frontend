import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 52px 26px;

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1024px) {
  }
`;

export const Title = styled.label`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
`;
