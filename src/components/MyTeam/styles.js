import styled from "styled-components";

export const MyTeamButton = styled.button`
  position: absolute;
  top: 101px;
  right: 55px;
  border: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MyTeamLabel = styled.label`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const CreateTeamButton = styled.button`
  position: absolute;
  left: 50%;
  top: 185px;
  transform: translateX(-50%);
  width: 749px;
  height: 39px;
  border: none;
  border-radius: 8px;
  background-color: #376fff;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CardContainter = styled.div`
  position: absolute;
  top: 255px;
  left: 50%;
  transform: translateX(-50%);
  width: 767px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto;
`;
