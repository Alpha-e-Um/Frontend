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

const Navigation = (props) => {
  const navigate = useNavigate();
  const [clickLoginButton, setClickLoginButton] = useState(false);

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
            <MenuItem>팀구하기</MenuItem>
            <MenuItem>팀원구하기</MenuItem>
            <MenuItem>대외활동</MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지(임시)
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
                  setClickLoginButton(true);
                }}
              >
                로그인
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
