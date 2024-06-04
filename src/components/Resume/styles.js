import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 40px;
  border: solid;
  border-radius: 9px;
  border-color: #c9c9c9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.label`
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const Data = styled.label`
  padding: 8px 16px;

  border: 2px solid;
  border-radius: 8px;
  border-color: #c9c9c9;

  font-size: 16px;
  font-weight: 400;
`;

export const Gray = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #6d758f;
`;
