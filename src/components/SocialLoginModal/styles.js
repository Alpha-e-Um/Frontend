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
  z-index: 1000;
`;

export const Container = styled.div`
  width: 750px;
  height: 641px;
  border-radius: 56px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExitButton = styled.button`
  margin-top: 30px;
  margin-left: 648px;
  width: 61px;
  height: 61px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const Title = styled.label`
  margin-top: 26px;
  font-size: 65px;
  font-weight: 400;
`;

export const Explanation = styled.label`
  margin-top: 10px;
  margin-bottom: 74px;
  font-size: 20px;
  font-weight: 500;
`;

export const LoginButton = styled.button`
  width: 600px;
  height: 90px;
  margin-bottom: 15px;
  border: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const GoogleButton = styled.button`
  width: 600px;
  height: 90px;
  margin-bottom: 15px;
  border: none;
  border-radius: 13px;
  background-color: #f2f2f2;
  font-size: 28px;
  font-weight: 500;

  display: flex;
  align-items: center;
  cursor: pointer;
`;
