import styled, { css } from "styled-components";

const fadeIn = css`
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
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

export const Completed = styled.button`
  border: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;

  opacity: 0;
  transform: translateY(-10px);
  ${({ isVisible }) => isVisible && fadeIn}
`;

export const CompletedLabel = styled.label`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const CardContainter = styled.div`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  width: 800px;
  height: 670px;
  display: grid;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;
