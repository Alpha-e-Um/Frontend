import styled from "styled-components";

export const TeamButton = styled.button`
  position: absolute;
  top: 108px;
  right: 118px;
  width: 66px;
  height: 34px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  border: solid;
  border-radius: 39px;
  border-color: #376fff;
  background-color: #376fff;
  cursor: pointer;
`;

export const TeamMemberButton = styled.button`
  position: absolute;
  top: 108px;
  right: 41px;
  width: 66px;
  height: 34px;
  font-size: 18px;
  font-weight: 500;
  color: #376fff;
  border: solid;
  border-radius: 39px;
  background-color: #ffffff;
  cursor: pointer;
`;

export const CardContainter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 52px 26px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 200px;
  width: 767px;
  height: 600px;
  gap: 20px;
  overflow-y: auto;
`;
