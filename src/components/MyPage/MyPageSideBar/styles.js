import styled, { css } from "styled-components";

const sharedStyles = css`
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const Container = styled.div`
  margin-right: 60px;
  border: 2px solid;
  border-radius: 12px;
  border-color: #c9c9c9;
  padding: 30px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  user-select: none;
`;

export const SelectPage = styled.button`
  ${sharedStyles}
  color: #0f0f0f;
  font-weight: 600;
  background-color: #f2f2f2;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const NotSelectPage = styled.button`
  ${sharedStyles}
  font-weight: 400;
  color: #c9c9c9;
  background-color: #ffffff;
  &:hover {
    background-color: #f2f2f2;
  }
`;
