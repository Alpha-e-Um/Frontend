import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const TeamInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: start;
  align-items: start;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
`;

export const Introduction = styled.p`
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  width: 100%;
`;

export const ApplyButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ParticipantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  max-width: 1200px;
`;

export const ParticipantCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const ParticipantImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ParticipantName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ParticipantDetails = styled.div`
  font-size: 14px;
  color: #555;
`;
