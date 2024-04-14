import styled from "styled-components";

export const Containter = styled.div`
  position: relative;
  width: 780px;
  height: 106px;
  border: 1.9px solid;
  border-radius: 11px;
  border-color: #c9c9c9;
`;

export const ProjectName = styled.label`
  position: absolute;
  left: 21px;
  top: 12px;
  font-size: 17px;
  font-weight: 700;
  color: #6d758f;
`;

export const TeamAndRegion = styled.label`
  position: absolute;
  left: 126px;
  top: 17px;
  font-size: 11px;
  font-weight: 600;
  color: #6d758f;
`;

export const DateLabel = styled.label`
  position: absolute;
  right: 56px;
  top: 17px;
  font-size: 12px;
  font-weight: 500;
  color: #7c7c7c;
`;

export const TimeLabel = styled.label`
  position: absolute;
  right: 16px;
  top: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #9a9a9a;
`;

export const Introduction = styled.label`
  position: absolute;
  left: 21px;
  top: 53px;
  font-size: 15px;
  font-weight: 400;
  font-color: #6d758f;
`;

export const Pass = styled.div`
  position: absolute;
  right: 18px;
  top: 54px;
  width: 64px;
  height: 34px;
  border: 2px solid;
  border-radius: 8px;
  border-color: #376fff;
  font-size: 18px;
  font-weight: 500;
  color: #376fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Fail = styled.div`
  position: absolute;
  right: 18px;
  top: 54px;
  width: 64px;
  height: 34px;
  border: 2px solid;
  border-radius: 8px;
  border-color: #ff3737;
  font-size: 18px;
  font-weight: 500;
  color: #ff3737;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
