import { useState } from "react";
import {
  Box,
  Container,
  LoginButton,
  LoginButtonLabel,
  MenuBox,
  MenuItem,
  Title,
} from "./styles";
import { ReactComponent as Alert } from "../../assets/icons/alert.svg";
import { useNavigate } from "react-router-dom";
import SocialLoginModal from "../SocialLoginModal/SocialLoginModal";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/authState";

const Navigation = (props) => {
  const navigate = useNavigate();
  const [clickLoginButton, setClickLoginButton] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <Container>
      {clickLoginButton ? (
        <SocialLoginModal setClickLoginButton={setClickLoginButton} />
      ) : null}
      <div>
        <Box>
          <Title
            onClick={() => {
              navigate("/");
            }}
          >
            이음
          </Title>
          <MenuBox>
            <MenuItem
              onClick={() => {
                navigate("/team");
              }}
            >
              팀구하기
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/member");
              }}
            >
              팀원구하기
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/contest");
              }}
            >
              대외활동
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지
            </MenuItem>
            <MenuItem
              style={{
                color: "#000000",
                fontWeight: "900",
              }}
            >
              앱 다운로드
            </MenuItem>
          </MenuBox>
          <div
            style={{
              display: "flex",
              marginRight: "160px",
              alignItems: "center",
            }}
          >
            <LoginButton>
              <LoginButtonLabel
                onClick={() => {
                  if (userInfo.isLogin) {
                    setUserInfo({});
                    localStorage.removeItem("access_token");
                    window.location.href = "/";
                    // TODO 로그아웃 API 요청 보내기
                  } else {
                    setClickLoginButton(true);
                  }
                }}
              >
                {userInfo.isLogin ? "로그아웃" : "로그인"}
              </LoginButtonLabel>
            </LoginButton>
            <div style={{ marginLeft: "40px" }}>
              <Alert width={28} fill="true" />
            </div>
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default Navigation;
