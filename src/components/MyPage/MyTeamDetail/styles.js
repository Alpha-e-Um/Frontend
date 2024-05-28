// styles.js

import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Details = styled.div`
  margin-bottom: 20px;
`;

export const InviteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const InviteInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const InviteButton = styled.button`
  padding: 10px;
  background-color: #3376f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2851a3;
  }
`;

export const SelectedEmailList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const SelectedEmail = styled.div`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #999;
  margin-left: 5px;
  cursor: pointer;
`;
