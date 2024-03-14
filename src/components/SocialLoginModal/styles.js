import styled from "styled-components";

export const ContainerOut = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: absolute;
  width: 688px;
  height: 590px;
  border-radius: 56px;
  background-color: #ffffff;
`;

export const Title = styled.label`
  display: block;
  font-size: 65px;
  font-weight: 800;
  margin-top: 76.01px;
`;

export const Explanation = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 400;
`;

export const KakaoButton = styled.button`
  position: absolute;
  font-size: 24px;
  font-weight: 600;
  top: 246.87px;
  left: 102.42px;
  width: 480px;
  height: 82px;
  border-radius: 12px;
  background-color: #fee500;
  color: black;
  border: none;
  cursor: pointer;
`;
export const GoogleButton = styled.button`
  position: absolute;
  font-size: 24px;
  font-weight: 600;
  top: 347.08px;
  left: 102.42px;
  width: 480px;
  height: 82px;
  border-radius: 12px;
  background-color: #1c48ff;
  color: white;
  border: none;
  cursor: pointer;
`;
export const NaverButton = styled.button`
  position: absolute;
  font-size: 24px;
  font-weight: 600;
  top: 447.28px;
  left: 102.42px;
  width: 480px;
  height: 82px;
  border-radius: 12px;
  background-color: #5ab335;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 20px;
  left: 603px;
  width: 61px;
  height: 61px;
`;
