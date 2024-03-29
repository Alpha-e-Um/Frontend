import styled from "styled-components";

export const ContainerOut = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Containter = styled.div`
  position: relative;
  width: 516px;
  height: 524px;
  border-radius: 42px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const Title = styled.label`
  position: absolute;
  top: 231px;
  font-size: 32px;
  font-weight: 700;
`;

export const Explanation = styled.label`
  position: absolute;
  top: 297px;
  font-size: 18px;
  font-weight: 500;
  color: #8f8f8f;
`;

export const CannelButton = styled.button`
  position: absolute;
  top: 387px;
  left: 151px;
  width: 95px;
  height: 35px;
  border-radius: 8px;
  border-color: #dedede;
  background-color: #dedede;
  font-size: 20px;
  font-weight: 400;
  color: #646464;
`;

export const SecessionButton = styled.button`
  position: absolute;
  top: 387px;
  right: 151px;
  width: 95px;
  height: 35px;
  border-radius: 8px;
  border-color: #376fff;
  background-color: #376fff;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
`;
