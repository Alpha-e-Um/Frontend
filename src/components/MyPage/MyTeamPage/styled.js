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
  margin-left: 36px;
  margin-top: 30px;
  font-size: 24px;
  font-weight: 700;
`;

export const Profile = styled.button`
  left: 64px;
  top: 219px;
  width: 250px;
  height: 250px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const Tag = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 332px;
  height: 36px;
  border: 1.9px solid;
  border-radius: 6px;
  border-color: #c9c9c9;
`;

export const Sel = styled.select`
  width: 332px;
  height: 36px;
  border: 1.9px solid;
  border-radius: 6px;
  border-color: #c9c9c9;
`;

export const Explanation = styled.textarea`
  width: 496px;
  height: 229px;
  border: 1.9px solid;
  border-radius: 6px;
  border-color: #c9c9c9;
  padding-top: 15px;
  padding-left: 18px;
  padding-right: 10px;
  resize: none;
`;

export const SaveButton = styled.button`
  width: 95px;
  height: 35px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background-color: #376fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
