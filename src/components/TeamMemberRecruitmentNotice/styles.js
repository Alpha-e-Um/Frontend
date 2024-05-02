import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  border: 2px solid;
  border-radius: 9px;
  border-color: #c9c9c9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.label`
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 36px;
  border: 2px solid;
  border-radius: 9px;
  border-color: #c9c9c9;
`;

export const Profile = styled.button`
  width: 250px;
  height: 250px;
  border: none;
  border-radius: 8px;
`;

export const Introduce = styled.textarea`
  margin-left: 20px;
  width: 500px;
  height: 240px;
  border: 2px solid;
  border-radius: 9px;
  border-color: #c9c9c9;
  font-size: 16px;
  font-weight: 400;
  padding-left: 18px;
  padding-top: 10px;
  resize: none;
`;

export const RegistrationButton = styled.button`
  margin-top: 60px;
  margin-left: 750px;
  margin-bottom: 108px;
  height: 35px;
  border: none;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background: #377bff;
`;
