import {
  InformationContainer,
  InformationRow,
  ProfileChangeButton,
  SetProfile,
  SetVector2,
  SetVector3,
  StyledLabel,
  Input1,
  Input2,
  Input3,
  SchoolMailButton,
  AlarmContainter,
  Alarm,
  AlarmLabel,
  CallLabel,
  AlarmRow,
  AlarmButton,
  SaveButton,
  CannelButton,
} from "./styles";

import { ReactComponent as Vector2 } from "../../assets/myPage/myInfoVector2.svg";
import { ReactComponent as Profile } from "../../assets/myPage/profile.svg";
import { ReactComponent as CheckCircleOff } from "../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../assets/myPage/CheckCircleOn.svg";
import { useState } from "react";
import WithdrawalModal from "../WithdrawalModal/withdrawalModal";

const MyInfo = () => {
  const [isAlarm, setIsAlarm] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isApplication, setIsApplication] = useState(false);

  const profileChange = () => {};
  const SchoolMail = () => {};
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
    <div>
      <Profile style={{ position: "absolute", top: "146px", left: "83px" }} />
      <ProfileChangeButton onClick={profileChange}>
        사진 변경
      </ProfileChangeButton>

      <InformationContainer>
        <InformationRow>
          <StyledLabel>이름</StyledLabel>
          <Input1 />
          <StyledLabel>성</StyledLabel>
          <Input1 />
        </InformationRow>
        <InformationRow>
          <StyledLabel>닉네임</StyledLabel>
          <Input1 />
          <StyledLabel>MBTI</StyledLabel>
          <Input1 />
        </InformationRow>
        <InformationRow>
          <StyledLabel>전화번호</StyledLabel>
          <Input3 placeholder="010 - 1234 - 5678" />
        </InformationRow>
        <InformationRow>
          <StyledLabel>생년월일</StyledLabel>
          <Input2 type="date" />
        </InformationRow>
        <InformationRow>
          <StyledLabel>소속/학교</StyledLabel>
          <Input1 />
          <SchoolMailButton onClick={SchoolMail}>
            학교 메일 인증
          </SchoolMailButton>
        </InformationRow>
        <InformationRow>
          <StyledLabel>거주 지역</StyledLabel>
          <Input3 />
        </InformationRow>
      </InformationContainer>

      <SetVector2>
        <Vector2 />
      </SetVector2>

      <AlarmContainter>
        <Alarm onClick={AlarmSetting}>
          {isAlarm ? <CheckCircleOn /> : <CheckCircleOff />}
          <AlarmLabel>알림 설정</AlarmLabel>
        </Alarm>
        <CallLabel>합격/불합격 연락 받을 수단</CallLabel>

        <AlarmRow>
          <AlarmButton onClick={AlarmMail}>
            MAIL
            {isMail ? <CheckCircleOn /> : <CheckCircleOff />}
          </AlarmButton>
          <AlarmButton onClick={AlarmMessage}>
            MESSAGE
            {isMessage ? <CheckCircleOn /> : <CheckCircleOff />}
          </AlarmButton>
          <AlarmButton onClick={AlarmApplication}>
            APPLICATION
            {isApplication ? <CheckCircleOn /> : <CheckCircleOff />}
          </AlarmButton>
        </AlarmRow>
      </AlarmContainter>

      <SetVector3>
        <Vector2 />
      </SetVector3>

      <SaveButton>저장</SaveButton>
      <CannelButton>취소</CannelButton>
    </div>
  );
};

export default MyInfo;
