import styled from "styled-components";

export const Container = styled.div`
  width: 898px;
  border: 2px solid;
  border-color: #c9c9c9;
  border-radius: 12px;
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

export const Completed = styled.button`
  border: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CompletedLabel = styled.label`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const CardContainter = styled.div`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  width: 800px;
  height: 670px;
  display: grid;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;
