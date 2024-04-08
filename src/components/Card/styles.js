import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid #c9c9c9;
  max-width: 360px;
`;

export const Title = styled.label`
  font-size: 24px;
  color: #6d758f;
  font-weight: 700;
`;

export const Position = styled.label`
  font-size: 16px;
  color: #6d758f;
  font-weight: 500;
  margin-top: 4px;
`;

export const StateLabel = styled.label`
  font-size: 14px;
  color: #3376f6;
  padding-right: 10px;
`;

export const TimeLabel = styled.label`
  border-left: 1px solid;
  font-size: 14px;
  padding-left: 10px;
  color: #6d758f;
`;

export const TeamNameLabel = styled.label`
  font-size: 14px;
  padding-right: 10px;
  color: #6d758f;
`;

export const LocationLabel = styled.label`
  border-left: 1px solid;
  font-size: 14px;
  padding-left: 10px;
  color: #6d758f;
`;

export const Description = styled.label`
  font-size: 18px;
  color: #6d758f;
  text-align: start;
`;

export const InteractBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #c9c9c9;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #3376f6;
  border-radius: 18px;
  padding: 6px 14px;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export const LikeButton = styled.img`
  cursor: pointer;
`;
