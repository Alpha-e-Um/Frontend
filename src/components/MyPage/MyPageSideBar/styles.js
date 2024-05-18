import styled from "styled-components";

export const Container = styled.div`
  margin-right: 60px;
  border: 2px solid;
  border-radius: 12px;
  border-color: #c9c9c9;
  padding: 30px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  user-select: none;
`;

export const SelectPage = styled.button`
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const NotSelectPage = styled.button`
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 400;
  color: #c9c9c9;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e6e6e6;
  }
`;
