import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #c9c9c9;
  border-radius: 12px;
`;

export const DeadlineButton = styled.button`
  all: unset;
  position: absolute;
  left: 16px;
  top: 16px;
  background-color: #714adf;
  border-radius: 8px;
  padding: 6px 16px;
`;

export const DeadlineText = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const PosterImage = styled.img`
  border-radius: 12px 12px 0px 0px;
  width: 100%;
`;

export const ContestDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const ContestName = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #6d758f;
  margin-bottom: 8px;
`;

export const ContestInfo = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #6d758f;
`;

export const ContestHit = styled.label`
  padding: 14px;
  font-size: 12px;
  font-weight: 500;
  color: #6d758f;
`;
