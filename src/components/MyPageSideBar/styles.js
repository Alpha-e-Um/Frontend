import styled from "styled-components";

export const Title = styled.div`
  position: absolute;
  top: 114px;
  left: 159px;
  font-size: 32px;
  font-weight: 700;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 201px;
  left: 139px;
  width: 212px;
  height: 592px;
  border: solid;
  border-color: #c9c9c9;
  border-radius: 12px;
  padding-top: 30px;
`;

export const SelectPage = styled.button`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 70px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

export const NotSelectPage = styled.button`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 70px;

  border: none;
  background-color: #ffffff;
  color: #a9a9a9;
  cursor: pointer;
`;
