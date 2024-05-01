import styled from "styled-components";

export const Container = styled.div`
  margin-right: 60px;
  width: 212px;
  height: 496px;
  border: 2px solid;
  border-color: #c9c9c9;
  border-radius: 12px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const SelectPage = styled.button`
  margin-bottom: 70px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NotSelectPage = styled.button`
  margin-bottom: 70px;
  font-size: 20px;
  font-weight: 400;
  border: none;
  background-color: #ffffff;
  color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
