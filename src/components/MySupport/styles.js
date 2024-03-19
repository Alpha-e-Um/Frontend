import styled from "styled-components";

export const Completed = styled.button`
  position: absolute;
  top: 120px;
  right: 120px;
  align-items: center;
  border: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

export const CompletedLabel = styled.label`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const CardContainter = styled.div`
  position: absolute;
  top: 220px;
  left: 70px;
  width: 800px;
  height: 770px;
  border: solid;
  overflow-y: auto;
`;
