import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Slogan = styled.label`
  color: white;
  font-size: 40px;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const Description = styled.label`
  color: white;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const GetTeamButton = styled.button`
  all: unset;
  background-color: #ffffff;
  padding: 11px 30px;
  margin-top: 60px;
  margin-bottom: 80px;
  border-radius: 12px;
  cursor: pointer;
`;

export const ButtonText = styled.label`
  color: #6632e9;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export const Box = styled.div`
  background-color: #714adf;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  border-radius: 26px;
`;

export const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 1000px;
`;
