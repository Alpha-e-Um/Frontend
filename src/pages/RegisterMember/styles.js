import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid;
  border-radius: 9px;
  border-color: #c9c9c9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px;
`;

export const Title = styled.label`
  font-size: 28px;
  font-weight: 700;
`;

export const Tag = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 38px;
  border: 2px solid;
  border-radius: 9px;
  border-color: #c9c9c9;
`;

export const Introduce = styled.textarea`
  width: 100%;
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

export const QuillWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  .ql-toolbar {
    display: flex;
    justify-content: flex-start;
  }
`;
