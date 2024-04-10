import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  transform: translateX(-100%);
  top: 0px;
  left: -30px;
  width: 212px;
  height: 495px;
  border: 2px solid;
  border-color: #c9c9c9;
  border-radius: 12px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const SelectPage = styled.button`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 80px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

export const NotSelectPage = styled.button`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 80px;

  border: none;
  background-color: #ffffff;
  color: #a9a9a9;
  cursor: pointer;
`;
