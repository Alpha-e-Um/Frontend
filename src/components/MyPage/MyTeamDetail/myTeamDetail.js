import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { teamAPI } from "../../../api/teamAPI";
import Select from "react-select";
import {
  Container,
  Title,
  Details,
  InviteContainer,
  InviteInput,
  InviteButton,
  SelectedEmail,
  SelectedEmailList,
  CloseButton,
} from "./styles";
import Navigation from "../../Navigation/navigation";

const MyTeamDetail = () => {
  const { id } = useParams();
  const [teamDetails, setTeamDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [inviteError, setInviteError] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await teamAPI.getTeamById(id);
        console.log(response.data.data);
        setTeamDetails(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamDetails();
  }, [id]);

  const handleInvite = async () => {
    try {
      setInviteError(null); // Reset invite error
      const emails = selectedEmails.map((email) => email.value);
      const data = {
        teamId: id,
        emails: emails,
      };
      console.log(data);
      await teamAPI.inviteTeamMember(data);
      alert("초대가 성공적으로 발송되었습니다!");
      setSelectedEmails([]);
    } catch (err) {
      setInviteError(err);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputValue) {
        const newEmail = { value: inputValue, label: inputValue };
        setSelectedEmails([...selectedEmails, newEmail]);
        setInputValue("");
      }
    }
  };

  const removeEmail = (emailToRemove) => {
    const updatedEmails = selectedEmails.filter(
      (email) => email.value !== emailToRemove.value,
    );
    setSelectedEmails(updatedEmails);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Navigation />
      <Container>
        <Title>{teamDetails.name}</Title>
        <Details>
          <p>Email: {teamDetails.email}</p>
          <p>FormationDate: {teamDetails.formationDate}</p>
          <p>id: {teamDetails.id}</p>
          <p>Introduction: {teamDetails.introduction}</p>
          <p>phoneNumber: {teamDetails.phoneNumber}</p>
          <p>logo: {teamDetails.logo}</p>
        </Details>
        <InviteContainer>
          <InviteInput
            type="text"
            placeholder="팀원 이메일 입력"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <SelectedEmailList>
            {selectedEmails.map((email) => (
              <SelectedEmail key={email.value}>
                {email.label}
                <CloseButton onClick={() => removeEmail(email)}>x</CloseButton>
              </SelectedEmail>
            ))}
          </SelectedEmailList>
          <InviteButton onClick={handleInvite}>초대</InviteButton>
        </InviteContainer>
        {inviteError && <div>Error: {inviteError.message}</div>}
      </Container>
    </div>
  );
};

export default MyTeamDetail;
