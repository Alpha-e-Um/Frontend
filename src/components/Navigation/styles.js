import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  border-bottom: 3px solid #ebebeb;
`;

export const Title = styled.label`
  color: #000000;
  font-size: 36px;
  font-weight: 900;
  margin-left: 160px;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  display: flex;
  gap: 120px;
`;

export const MenuItem = styled.label`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-size: 24px;
  all: unset;
  background-color: white;
  padding: 8px 16px;
  border-radius: 12px;
  border: 2px solid #376fff;
  cursor: pointer;
`;

export const LoginButtonLabel = styled.label`
  color: #376fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
