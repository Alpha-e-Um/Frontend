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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResumeList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
`;

export const ResumeItem = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 14px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ $isSelected }) => ($isSelected ? "#f0f0f0" : "white")};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ResumeItemDetail = styled.div`
  margin-bottom: 5px;
`;

export const ResumeItemDetailSmall = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ModalButtonWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 10px;
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #377bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #f44336;
  border: 1px solid #f44336;
  border-radius: 5px;
  cursor: pointer;
`;
