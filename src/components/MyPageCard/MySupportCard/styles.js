import styled from "styled-components";

export const Containter = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-radius: 11px;
  border-color: #c9c9c9;
  padding: 20px;
`;

export const ProjectName = styled.label`
  font-size: 17px;
  font-weight: 700;
  color: #6d758f;
`;

export const TeamAndRegion = styled.label`
  font-size: 11px;
  font-weight: 600;
  color: #6d758f;
`;

export const DateLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #7c7c7c;
`;

export const TimeLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: #9a9a9a;
`;

export const Introduction = styled.label`
  font-size: 15px;
  font-weight: 400;
  color: #6d758f;
`;

export const Pass = styled.div`
  width: 80px;
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
  width: 80px;
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
