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

export const SelectButton = styled.button`
  width: 64px;
  height: 35px;
  margin-right: 10px;
  border: solid;
  border-radius: 56px;
  border-color: #376fff;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-color: #376fff;
  user-select: none;
  cursor: pointer;
`;

export const NotSelectButton = styled.button`
  width: 64px;
  height: 35px;
  margin-right: 10px;
  border: solid;
  border-radius: 56px;
  font-size: 18px;
  font-weight: 500;
  color: #376fff;
  background-color: #ffffff;
  user-select: none;
  cursor: pointer;
`;

export const CardContainter = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  top: 250px;
  width: 767px;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  overflow-y: auto;
`;
