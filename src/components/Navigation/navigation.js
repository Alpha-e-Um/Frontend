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

const Navigation = (props) => {
  const [clickLanguageDropdown, setClickLanguageDropdown] = useState(false);
  return (
    <Container>
      <div>
        <Box>
          <Title>이음</Title>
          <MenuBox>
            <MenuItem>팀구하기</MenuItem>
            <MenuItem>팀원구하기</MenuItem>
            <MenuItem>대외활동</MenuItem>
            <MenuItem
              style={{
                color: "#6632e9",
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
              <LoginButtonLabel>회원가입/로그인</LoginButtonLabel>
            </LoginButton>
            <div>
              <ul
                onClick={() => {
                  setClickLanguageDropdown(!clickLanguageDropdown);
                }}
              >
                {"KR"}
                {clickLanguageDropdown ? "⌃" : "⌄"}
                {clickLanguageDropdown && (
                  <>
                    <li>KR</li>
                    <li>EN</li>
                  </>
                )}
              </ul>
            </div>
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
