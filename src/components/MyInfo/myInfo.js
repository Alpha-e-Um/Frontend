import {
  ProfileChangeButton,
  Tag,
  Input,
  SchoolMailButton,
  AlarmContainter,
  Alarm,
  AlarmLabel,
  CallLabel,
  AlarmRow,
  AlarmButton,
  SaveButton,
  CannelButton,
  WithdrawalButton,
} from "./styles";

import { ReactComponent as Line } from "../../assets/myPage/myInfoVector2.svg";
import { ReactComponent as Profile } from "../../assets/myPage/profile.svg";
import { ReactComponent as CheckCircleOff } from "../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../assets/myPage/CheckCircleOn.svg";
import { useState } from "react";

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
      <WithdrawalButton>회원 탈퇴</WithdrawalButton>

      <Tag style={{ left: "330px", top: "151px" }}>이름</Tag>
      <Input
        style={{ left: "417px", top: "145px", width: "74px", height: "32px" }}
      />
      <Tag style={{ left: "322px", top: "222px" }}>닉네임</Tag>
      <Input
        style={{ left: "417px", top: "216px", width: "88px", height: "32px" }}
      />
      <Tag style={{ left: "314px", top: "293px" }}>전화번호</Tag>
      <Input
        style={{ left: "417px", top: "287px", width: "162px", height: "32px" }}
      />
      <Tag style={{ left: "314px", top: "364px" }}>생년월일</Tag>
      <Input
        type="date"
        style={{ left: "417px", top: "357px", width: "133px", height: "32px" }}
      />
      <Tag style={{ left: "311px", top: "428px" }}>소속/학교</Tag>
      <Input
        style={{ left: "417px", top: "422px", width: "102px", height: "32px" }}
      />
      <SchoolMailButton onClick={SchoolMail}>학교 메일 인증</SchoolMailButton>

      <Tag style={{ left: "312px", top: "493px" }}>거주 지역</Tag>
      <Input
        style={{ left: "417px", top: "486px", width: "168px", height: "32px" }}
      />

      <Tag style={{ left: "599px", top: "151px" }}>성</Tag>
      <Input
        style={{ left: "675px", top: "145PX", width: "60px", height: "32px" }}
      />

      <Tag style={{ left: "585px", top: "222px" }}>MBTI</Tag>
      <Input
        style={{ left: "675px", top: "216px", width: "84px", height: "32px" }}
      />

      <Line style={{ position: "absolute", right: "30px", top: "570px" }} />

      <AlarmContainter>
        <Alarm onClick={AlarmSetting}>
          {isAlarm ? <CheckCircleOn /> : <CheckCircleOff />}
          <AlarmLabel>알림 설정</AlarmLabel>
        </Alarm>
        <CallLabel>합격/불합격 연락 받을 수단</CallLabel>

        <AlarmRow>
          <AlarmButton onClick={AlarmMail} style={{ width: "90px" }}>
            MAIL
            {isMail ? <CheckCircleOn /> : <CheckCircleOff />}
          </AlarmButton>
          <AlarmButton onClick={AlarmMessage} style={{ width: "120px" }}>
            MESSAGE
            {isMessage ? <CheckCircleOn /> : <CheckCircleOff />}
          </AlarmButton>
          <AlarmButton onClick={AlarmApplication} style={{ width: "150px" }}>
            APPLICATION
            {isApplication ? <CheckCircleOn /> : <CheckCircleOff />}
          </AlarmButton>
        </AlarmRow>
      </AlarmContainter>

      <Line style={{ position: "absolute", right: "30px", top: "780px" }} />

      <SaveButton>저장</SaveButton>
      <CannelButton>취소</CannelButton>
    </div>
  );
};

export default MyInfo;
