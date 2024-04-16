import styled from "styled-components";

export const SelectButton = styled.button`
  position: absolute;
  width: 66px;
  height: 34px;
  border: solid;
  border-radius: 39px;
  border-color: #376fff;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-color: #376fff;
  user-select: none;
  cursor: pointer;
`;

export const NotSelectButton = styled.button`
  position: absolute;
  width: 66px;
  height: 34px;
  border: solid;
  border-radius: 39px;
  font-size: 18px;
  font-weight: 500;
  color: #376fff;
  background-color: #ffffff;
  user-select: none;
  cursor: pointer;
`;

export const CardContainter = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 250px;
  width: 767px;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  overflow-y: auto;
`;
