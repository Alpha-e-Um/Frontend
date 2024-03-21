import styled from "styled-components";

export const Completed = styled.button`
  position: absolute;
  right: 55px;
  top: 103px;
  border: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CompletedLabel = styled.label`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const CardContainter = styled.div`
  position: absolute;
  top: 170px;
  left: 50%;
  width: 800px;
  transform: translateX(-50%);
  height: 670px;
  display: grid;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;
