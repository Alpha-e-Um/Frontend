import axios from "axios";

const getBaseUrl = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api"
    : "https://e-um.site/api";
};

export const axiosWithAuth = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
  withCredentials: true,
});

axiosWithAuth.interceptors.response.use(
  function (res) {
    return res;
  },
  async function (err) {
    // const { config: originRequest } = err;
    if (err.response.status === 401) {
      // access token이 만료되어서 refresh token을 사용해서 재발급 요청할 때
      const reIssueResponse = await axiosWithAuth.post("/api/auth/reissue");
      if (reIssueResponse.status === 200) {
        const { accessToken } = reIssueResponse.data;
        localStorage.setItem("access_token", accessToken);
        axiosWithAuth.defaults.headers.Authorization = `Bearer ${accessToken}`;
        // await axios(originRequest).then((res) => {});
        window.location.replace("/");
      } else {
        window.location.replace("/sign-in");
      }
    } else if (err.response.status === 403) {
      // refresh token이 만료 혹은 없을 때
      console.log("refresh token 만료 혹은 존재X. 재로그인 요망");
      return;
    }

    return Promise.reject(err);
  },
);
