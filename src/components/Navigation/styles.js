import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 4px 10px rgba(70, 56, 147, 0.1);
  /* background-color: #7cfbcb; */
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
`;

export const Title = styled.label`
  color: #6632e9;
  font-size: 36px;
  font-weight: 900;
  margin-left: 160px;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  margin-left: 100px;
`;

export const MenuItem = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-left: 120px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-size: 24px;
  all: unset;
  background-color: white;
  border: 2px solid #6632e9;
  padding: 10px 18px;
  border-radius: 12px;
  cursor: pointer;
`;

export const LoginButtonLabel = styled.label`
  color: #6632e9;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
