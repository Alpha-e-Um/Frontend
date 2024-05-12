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
  border-radius: 12px;
  border-color: #c9c9c9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: ${({ isVisible }) =>
    isVisible ? "900px" : "150px"}; // 조건에 따라 높이 변경
  transition: height 0.3s ease-out;
`;

export const Title = styled.label`
  margin-top: 35px;
  margin-left: 50px;
  font-size: 24px;
  font-weight: 700;

  opacity: 0;
  transform: translateY(-10px);
  ${({ isVisible }) => isVisible && fadeIn}
`;

export const ResumeButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  width: 750px;
  height: 40px;
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
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3268e5;
  }

  opacity: 0;
  transform: translateY(-10px);
  ${({ isVisible }) => isVisible && fadeIn}
`;

export const CardContainter = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 27px;
  margin-bottom: 50px;
  width: 767px;
  height: 650px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto;
`;
