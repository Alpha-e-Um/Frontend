import styled from "styled-components";

export const Containter = styled.div`
  position: relative;
  width: 360px;
  height: 255px;
  border: 2px solid;
  border-radius: 11px;
  border-color: #c9c9c9;
`;

export const Name = styled.label`
  position: absolute;
  left: 113px;
  top: 25px;
  font-size: 17px;
  font-weight: 700;
  color: #6d758f;
`;

export const GenderAge = styled.label`
  position: absolute;
  left: 167px;
  top: 28px;
  font-size: 11px;
  font-weight: 400;
  color: #6d758f;
`;

export const Belong = styled.label`
  position: absolute;
  left: 113px;
  top: 56px;
  font-size: 11px;
  font-weight: 600;
  color: #6d758f;
`;

export const Region = styled.label`
  position: absolute;
  left: 113px;
  top: 71px;
  font-size: 11px;
  font-weight: 600;
  color: #6d758f;
`;

export const Occupation = styled.label`
  position: absolute;
  left: 25px;
  top: 122px;
  width: 54px;
  height: 24px;
  border: none;
  border-radius: 17px;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background-color: #3376f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Introduction = styled.label`
  position: absolute;
  left: 27px;
  top: 158px;
  width: 250px;
  font-size: 15px;
  font-weight: 400;
  color: #6d758f;
  text-align: left;
`;
