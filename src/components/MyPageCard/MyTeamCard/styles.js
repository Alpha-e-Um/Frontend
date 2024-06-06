import styled from "styled-components";

export const Containter = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-radius: 11px;
  border-color: #c9c9c9;
  padding: 20px;
  justify-content: space-between;
`;

export const TeamName = styled.label`
  font-size: 17px;
  font-weight: 700;
  color: #6d758f;
`;

export const Introduction = styled.label`
  font-size: 15px;
  font-weight: 400;
  color: #6d758f;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 30px;
  border: 2px solid;
  border-radius: 4px;
  border-color: #376fff;
  font-size: 14px;
  font-weight: 400;
  color: #376fff;
  background-color: #ffffff;
  cursor: pointer;
`;
