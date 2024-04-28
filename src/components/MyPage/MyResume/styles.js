import styled from "styled-components";

export const Container = styled.div`
  width: 898px;
  border: 2px solid;
  border-radius: 12px;
  border-color: #c9c9c9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.label`
  margin-top: 35px;
  margin-left: 50px;
  font-size: 24px;
  font-weight: 700;
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
