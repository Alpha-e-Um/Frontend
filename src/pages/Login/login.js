import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../../api/axios";

const Login = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    console.log("location", location);
    // "/login/success"
    const url = location.pathname;
    const result2 = url.split("/"); // ["", "login", "success"]
    const result = result2[result2.length - 1]; // "success"
    console.log("queryParams", queryParams);
    const token = queryParams.get("accesstoken");

    // http://e-um.site/login/success?accesstoken=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiZW1haWwiOiJnZWVob29uNjIwMTdAZ21haWwuY29tIiwibmFtZSI6Iuy1nOyngO2biCAiLCJhdmF0YXIiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLZDVzR216Nm5fa1Z5d0U2QW1WbS1NdHlpaTlwc2NhbmUtMmxZN2hRTWdEMjB4RlE9czk2LWMiLCJhdXRob3JpdGllcyI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjY0MjMxMywiZXhwIjoxNzEyNjQ0MTEzfQ.BqvQwgrdYwlQ4xCwer4wHHnQC1tciu2Rvxp9kC_iZEJNuK6mjYQUKCk_GDEgyPHP9b384RFfmI1hdyAzQ3TkpQ
    console.log("result", result);
    if (result === "success") {
      if (token) {
        console.log("토큰 저장");
        localStorage.setItem("access_token", token);
        axiosWithAuth.defaults.headers.Authorization = `Bearer ${token}`;
        navigate("/");
      } else {
        // 토큰이 없거나 문제가 있다면 로그인 페이지나 오류 페이지로 리다이렉트
        console.log("url에 토큰이 포함되어 있지 않습니다");
        navigate("/");
      }
    } else {
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default Login;
