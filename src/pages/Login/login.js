import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      localStorage.setItem("access_token", token);
      navigate("/");
    } else {
      // 토큰이 없거나 문제가 있다면 로그인 페이지나 오류 페이지로 리다이렉트
      console.log("url에 토큰이 포함되어 있지 않습니다");
      navigate("/");
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default Login;
