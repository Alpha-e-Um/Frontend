import styled, { css } from "styled-components";

const fadeIn = css`
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
`;

export const Container = styled.div`
  margin-top: 90px;
  width: 898px;
  border: 2px solid;
  border-color: #c9c9c9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: ${({ $isVisible }) =>
    $isVisible ? "1000px" : "150px"}; // 조건에 따라 높이 변경
  transition: height 0.3s ease-out;
`;

export const Title = styled.label`
  margin-top: 35px;
  margin-left: 50px;
  font-size: 24px;
  font-weight: 700;

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const SelectButton = styled.button`
  width: 64px;
  height: 35px;
  margin-right: 10px;
  border: solid;
  border-radius: 56px;
  border-color: #376fff;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-color: #376fff;
  user-select: none;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3268e5;
  }

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const NotSelectButton = styled.button`
  width: 64px;
  height: 35px;
  margin-right: 10px;
  border: solid;
  border-radius: 56px;
  font-size: 18px;
  font-weight: 500;
  color: #376fff;
  background-color: #ffffff;
  user-select: none;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e5e5e5;
  }

  opacity: 0;
  transform: translateY(-10px);
  ${({ $isVisible }) => $isVisible && fadeIn}
`;

export const CardContainter = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  top: 250px;
  width: 767px;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
