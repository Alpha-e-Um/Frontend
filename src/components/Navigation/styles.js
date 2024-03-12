import styled from "styled-components";

export const Container = styled.div`
  background-color: #7cfbcb;
  padding: 8px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.label`
  font-size: 36px;
  font-weight: 900;
  margin-left: 6.25rem;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  margin-left: 100px;
`;

export const MenuItem = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-left: 50px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-size: 24px;
  all: unset;
  background-color: white;
  padding: 10px 22px;
  border-radius: 12px;
  margin-left: 50px;
  cursor: pointer;
`;

export const LoginButtonLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
