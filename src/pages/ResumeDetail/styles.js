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

export const ColumnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.label`
  font-size: 32px;
  font-weight: 700;
`;

export const Tag = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const Gray = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #6d758f;
`;

export const Explain = styled.label`
  font-size: 18px;
  font-weight: 300;
`;

export const BlueButton = styled.button`
  padding: 7px 15px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background: #377bff;
`;
