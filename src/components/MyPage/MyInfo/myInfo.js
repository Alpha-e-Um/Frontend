import {
  Container,
  Title,
  LineAnimation,
  AnimatedProfile,
  ProfileChangeButton,
  Tag,
  Input,
  AlarmSettingButton,
  AlarmButton,
  BlueButton,
  CannelButton,
} from "./styles";

import { ReactComponent as CheckCircleOff } from "../../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../../assets/myPage/CheckCircleOn.svg";
import { useEffect, useState } from "react";
import { userAPI } from "../../../api/userAPI";

const MyInfo = ({ IsWithdrawal, innerRef }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickName] = useState("");
  const [mbti, setMbti] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [school, setSchool] = useState("");
  const [region, setRegion] = useState("");

  const [isAlarm, setIsAlarm] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isApplication, setIsApplication] = useState(false);

  const [visible, setVisible] = useState({
    step0: false,
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
    step10: false,
    step11: false,
  });

  const handleChange = (value, setter) => {
    setter(value);
  };

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

  const StartAnimation = () => {
    const timers = [];
    const delay = 50;

    for (let i = 0; i <= 11; i++) {
      const timer = setTimeout(() => {
        setVisible((prev) => ({ ...prev, [`step${i}`]: true }));
      }, i * delay);
      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  };

  const EndAnimation = async () => {
    for (let i = 1; i <= 11; i++) {
      setVisible((prev) => ({ ...prev, [`step${i}`]: false }));
    }
    setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step0`]: false }));
    }, 200);
  };

  innerRef.current = {
    EndAnimation,
  };

  const LoadUserData = () => {
    userAPI
      .getMyInfo()
      .then((res) => {
        const data = res.data.data;
        console.log(data);

        setFirstName(data.name.first);
        setLastName(data.name.last);
        setNickName(data.nickname ?? "");
        setMbti(data.mbti ?? "");
        setPhoneNumber(data.phoneNumber ?? "");
        setBirthDay(data.birthday ?? "");
        setSchool(data.school ?? "");
        setRegion(data.region ?? "");
      })
      .catch((error) => {});
  };

  const SaveUserData = async () => {
    const data = {
      avatar: "asdf",
      firstName: firstName,
      lastName: lastName,
      nickname: nickname,
      mbti: mbti,
      phoneNumber: phoneNumber,
      birthday: birthday,
      school: school,
      region: region,
    };
    console.log(data);
    userAPI
      .putUser(data)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    StartAnimation();

    LoadUserData();
  }, []);

  return (
    <Container $isVisible={visible.step0}>
      <Title $isVisible={visible.step1}>내정보</Title>
      <LineAnimation style={{ top: 16 }} $isVisible={visible.step2} />

      <div style={{ display: "flex", marginLeft: "83px", marginTop: "57px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AnimatedProfile $isVisible={visible.step2} />
          <ProfileChangeButton
            onClick={profileChange}
            $isVisible={visible.step4}
          >
            사진 변경
          </ProfileChangeButton>
        </div>

        <div
          style={{
            marginTop: "10px",
            marginLeft: "74px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Tag style={{ paddingRight: 70 }} $isVisible={visible.step2}>
              이름
            </Tag>
            <Input
              style={{ width: 60 }}
              value={firstName}
              onChange={(e) => handleChange(e.target.value, setFirstName)}
              $isVisible={visible.step2}
            />

            <Tag
              style={{ paddingLeft: 165, paddingRight: 69 }}
              $isVisible={visible.step2}
            >
              성
            </Tag>
            <Input
              style={{ width: 46 }}
              value={lastName}
              onChange={(e) => handleChange(e.target.value, setLastName)}
              $isVisible={visible.step2}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Tag style={{ paddingRight: 56 }} $isVisible={visible.step3}>
              닉네임
            </Tag>
            <Input
              style={{ width: 162 }}
              value={nickname}
              onChange={(e) => handleChange(e.target.value, setNickName)}
              $isVisible={visible.step3}
            />
            <Tag
              style={{ paddingLeft: 63, paddingRight: 40 }}
              $isVisible={visible.step3}
            >
              MBTI
            </Tag>
            <Input
              style={{ width: 88 }}
              value={mbti}
              onChange={(e) => handleChange(e.target.value, setMbti)}
              $isVisible={visible.step3}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Tag style={{ paddingRight: 40 }} $isVisible={visible.step4}>
              전화번호
            </Tag>
            <Input
              style={{ width: 162 }}
              value={phoneNumber}
              onChange={(e) => handleChange(e.target.value, setPhoneNumber)}
              $isVisible={visible.step4}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Tag style={{ paddingRight: 40 }} $isVisible={visible.step5}>
              {" "}
              생년월일
            </Tag>
            <Input
              style={{ width: 162 }}
              value={birthday}
              onChange={(e) => handleChange(e.target.value, setBirthDay)}
              $isVisible={visible.step5}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Tag style={{ paddingRight: 34 }} $isVisible={visible.step6}>
              소속/학교
            </Tag>
            <Input
              style={{ width: 162, marginRight: 20 }}
              value={region}
              onChange={(e) => handleChange(e.target.value, setRegion)}
              $isVisible={visible.step6}
            />

            <BlueButton>학교인증</BlueButton>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Tag style={{ paddingRight: 36 }} $isVisible={visible.step7}>
              거주 지역
            </Tag>
            <Input
              style={{ width: 162 }}
              value={school}
              onChange={(e) => handleChange(e.target.value, setSchool)}
              $isVisible={visible.step7}
            />
          </div>
        </div>
      </div>

      <LineAnimation $isVisible={visible.step8} />

      <div
        style={{
          marginLeft: 300,
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <AlarmSettingButton
          onClick={() => AlarmSetting()}
          style={{
            display: "flex",
            alignItems: "center",
            border: "none",
            backgroundColor: "#ffffff",
          }}
          $isVisible={visible.step9}
        >
          {isAlarm ? (
            <CheckCircleOn style={{ marginRight: 10 }} />
          ) : (
            <CheckCircleOff style={{ marginRight: 10 }} />
          )}
          알림 설정
        </AlarmSettingButton>

        <Tag
          style={{ marginTop: 30, marginBottom: 22 }}
          $isVisible={visible.step9}
        >
          합격/불합격 연락 받을 수단
        </Tag>

        <div style={{ display: "flex" }}>
          <AlarmButton
            onClick={() => AlarmApplication()}
            $isVisible={visible.step10}
          >
            APPLICATION
            {isApplication ? (
              <CheckCircleOn style={{ marginLeft: 10 }} />
            ) : (
              <CheckCircleOff style={{ marginLeft: 10 }} />
            )}
          </AlarmButton>
          <AlarmButton onClick={() => AlarmMail()} $isVisible={visible.step10}>
            E-MAIL
            {isMail ? (
              <CheckCircleOn style={{ marginLeft: 10 }} />
            ) : (
              <CheckCircleOff style={{ marginLeft: 10 }} />
            )}
          </AlarmButton>
          <AlarmButton
            onClick={() => AlarmMessage()}
            $isVisible={visible.step10}
          >
            SMS
            {isMessage ? (
              <CheckCircleOn style={{ marginLeft: 10 }} />
            ) : (
              <CheckCircleOff style={{ marginLeft: 10 }} />
            )}
          </AlarmButton>
        </div>
      </div>

      <LineAnimation $isVisible={visible.step10} />

      <div
        style={{
          marginTop: "30px",
          marginBottom: "25px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <BlueButton onClick={() => SaveUserData()} $isVisible={visible.step11}>
          저장
        </BlueButton>
        <CannelButton $isVisible={visible.step11}>취소</CannelButton>
      </div>
    </Container>
  );
};

export default MyInfo;
