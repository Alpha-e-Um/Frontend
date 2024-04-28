import styled from "styled-components";

export const Container = styled.div`
  width: 898px;
  border: 2px solid;
  border-color: #c9c9c9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.label`
  margin-top: 35px;
  margin-left: 50px;
  font-size: 24px;
  font-weight: 700;
`;

export const MyTeamButton = styled.button`
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 767px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto;
`;
