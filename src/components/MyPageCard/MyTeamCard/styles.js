import styled from "styled-components";

export const Containter = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-radius: 16px;
  border-color: #c9c9c9;
  padding: 20px;
  justify-content: space-between;
`;

export const TeamName = styled.label`
  font-size: 20px;
  font-weight: 800;
  color: #6d758f;
`;

export const Introduction = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #6d758f;
  text-align: left;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 30px;
  border: 1.6px solid;
  border-radius: 8px;
  border-color: #376fff;
  font-size: 14px;
  font-weight: 500;
  color: #376fff;
  background-color: #ffffff;
  cursor: pointer;
  padding: 2px 20px;
`;
