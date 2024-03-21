import styled from "styled-components";

export const ResumeButton = styled.button`
  position: absolute;
  left: 50%;
  top: 113px;
  transform: translateX(-50%);
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
`;

export const CardContainter = styled.div`
  position: relative;
  left: 50%;
  top: 179px;
  transform: translateX(-50%);
  width: 750px;
  height: 650px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border: solid;
  overflow-y: auto;
`;
