import styled from "styled-components";

export const Container = styled.div`
  margin-top: 90px;
  width: 898px;
  border: 2px solid;
  border-radius: 12px;
  border-color: #c9c9c9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.label`
  margin-top: 35px;
  margin-left: 50px;
  font-size: 24px;
  font-weight: 700;
`;

export const CreateButton = styled.button`
  margin-right: 16px;
  padding: 7px 16px 7px 16px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background: #377bff;
  border: none;
  border-radius: 8px;
`;

export const ResumeTitle = styled.label`
  font-size: 24px;
  font-weight: 500;
`;

export const ResumeDate = styled.label`
  font-size: 20px;
  font-weight: 400;
`;
