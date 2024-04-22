import {
  Container,
  Title,
  ProfileChangeButton,
  Tag,
  Input,
  AlarmButton,
  SaveButton,
  CannelButton,
} from "./styles";

import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";
import { ReactComponent as Profile } from "../../../assets/myPage/profile.svg";
import { ReactComponent as CheckCircleOff } from "../../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../../assets/myPage/CheckCircleOn.svg";
import { useState } from "react";

const MyInfo = ({ IsWithdrawal }) => {
  const [isAlarm, setIsAlarm] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isApplication, setIsApplication] = useState(false);

  const profileChange = () => {};
  const AlarmSetting = () => {
    setIsAlarm(!isAlarm);
  };
  const AlarmMail = () => {
    setIsMail(!isMail);
  };
  const AlarmMessage = () => {
    setIsMessage(!isMessage);
  };
  const AlarmApplication = () => {
    setIsApplication(!isApplication);
  };

  return (
    <Container>
      <Title>내정보</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />

      <div style={{ display: "flex", marginLeft: "83px", marginTop: "57px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Profile />
          <ProfileChangeButton onClick={profileChange}>
            사진 변경
          </ProfileChangeButton>
        </div>

        <div
          style={{
            marginTop: "10px",
            marginLeft: "74px",
            width: "108px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tag>이름</Tag>
          <Tag>닉네임</Tag>
          <Tag>전화번호</Tag>
          <Tag>생년월일</Tag>
          <Tag>소속/학교</Tag>
          <Tag>거주지역</Tag>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input style={{ width: 60 }} />
          <Input style={{ width: 88 }} />
          <Input style={{ width: 162 }} />
          <Input style={{ width: 139 }} />
          <Input style={{ width: 131 }} />
          <Input style={{ width: 179 }} />
        </div>
        <div
          style={{
            marginTop: "10px",
            width: "108px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tag>성</Tag>
          <Tag>MBTI</Tag>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input style={{ width: 46 }} />
          <Input style={{ width: 88 }} />
        </div>
      </div>

      <Line style={{ marginLeft: "auto", marginRight: "auto" }} />

      <div
        style={{
          marginLeft: 300,
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button
          onClick={() => AlarmSetting()}
          style={{
            display: "flex",
            alignItems: "center",
            border: "none",
            backgroundColor: "#ffffff",
          }}
        >
          {isAlarm ? (
            <CheckCircleOn style={{ marginRight: 10 }} />
          ) : (
            <CheckCircleOff style={{ marginRight: 10 }} />
          )}
          알림 설정
        </button>

        <Tag style={{ marginTop: 30, marginBottom: 22 }}>
          합격/불합격 연락 받을 수단
        </Tag>

        <div style={{ display: "flex" }}>
          <AlarmButton onClick={() => AlarmApplication()}>
            APPLICATION
            {isApplication ? (
              <CheckCircleOn style={{ marginLeft: 10 }} />
            ) : (
              <CheckCircleOff style={{ marginLeft: 10 }} />
            )}
          </AlarmButton>
          <AlarmButton onClick={() => AlarmMail()}>
            E-MAIL
            {isMail ? (
              <CheckCircleOn style={{ marginLeft: 10 }} />
            ) : (
              <CheckCircleOff style={{ marginLeft: 10 }} />
            )}
          </AlarmButton>
          <AlarmButton onClick={() => AlarmMessage()}>
            SMS
            {isMessage ? (
              <CheckCircleOn style={{ marginLeft: 10 }} />
            ) : (
              <CheckCircleOff style={{ marginLeft: 10 }} />
            )}
          </AlarmButton>
        </div>
      </div>

      <Line style={{ marginLeft: "auto", marginRight: "auto" }} />

      <div
        style={{
          marginTop: "30px",
          marginBottom: "25px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <SaveButton>저장</SaveButton>
        <CannelButton>취소</CannelButton>
      </div>
    </Container>
  );
};

export default MyInfo;
