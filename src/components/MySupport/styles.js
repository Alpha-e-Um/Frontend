import styled from "styled-components";

export const Completed = styled.button`
  position: absolute;
  right: 55px;
  top: 103px;
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
  top: 170px;
  left: 70px;
  width: 800px;
  height: 670px;
  display: grid;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;
