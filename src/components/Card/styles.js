import styled from "styled-components";

export const Container = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid #c9c9c9;
  background-color: #ffffff;
  max-width: 100%;
  overflow: hidden;
`;

export const Title = styled.label`
  font-size: 24px;
  color: #6d758f;
  font-weight: 700;
  cursor: pointer;
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
  border-left: 1px solid #c9c9c9;
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
  font-size: 14px;
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
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #c9c9c9;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 100%;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
`;

// ButtonBox::-webkit-scrollbar {
//   display: none; /* Chrome, Safari, and Opera */
// }

export const StyledButton = styled.button`
  all: unset;
  background-color: #3376f6;
  border-radius: 16px;
  padding: 6px 14px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`;

export const LikeButton = styled.img`
  cursor: pointer;
  margin-left: 16px;
`;

export const LogoImg = styled.img`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 16px;
`;
