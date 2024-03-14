import { useEffect, useState } from "react";
import axios from "axios";

const { Kakao } = window;

const KakaoButton = ({ onProfileChange }) => {
  const REDIRECT_URI = "http://localhost:3000/kakao/callback";

  const initKakao = () => {
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init("c63fd1c6424baa0892237ae0312ce48d");
    }
  };

  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
    });
  };

  const getToken = async (code) => {
    const grant_type = "authorization_code";
    const client_id = `a74b3cc87a6c20b0d683d796a1353306`;
    const res = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      },
    );

    const token = res.data.access_token;
    await getKakaoUserData(token);
  };

  const getKakaoUserData = async (token) => {
    const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    onProfileChange({
      type: "kakao",
      name: kakaoUser.data.kakao_account.profile.nickname,
      email: "",
      picture: kakaoUser.data.kakao_account.profile.profile_image_url,
    });

    return await kakaoUser.data;
  };

  useEffect(() => {
    initKakao();
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      getToken(code);
    }
  }, []);

  return <button onClick={kakaoLoginHandler}>카카오 로그인</button>;
};

export default KakaoButton;
