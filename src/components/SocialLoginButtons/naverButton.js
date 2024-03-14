import { useState, useEffect } from "react";

const NaverButton = ({ onProfileChange }) => {
  const { naver } = window;

  const NAVER_CLIENT_ID = "THz0SwcnoCF1fQ6VyuCP";
  const NAVER_CALLBACK_URL = "http://localhost:3000/auth";

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: true,
      loginButton: { color: "green", type: 3, height: 58 },
    });
    naverLogin.init();

    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        console.log(`로그인: ${status}`);

        onProfileChange({
          type: "naver",
          name: naverLogin.user.name,
          email: naverLogin.user.email,
          picture: naverLogin.usernpmprofile_image,
        });

        window.close();
        // if (window.opener) {
        //   window.opener.location.href = NAVER_CALLBACK_URL;
        //   window.close();
        // } else {
        //   window.location.href = NAVER_CALLBACK_URL;
        // }
      }
    });
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin"></div>;
};
export default NaverButton;
