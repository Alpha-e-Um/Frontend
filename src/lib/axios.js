import axios from "axios";

export const axios2 = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://e-um.site",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
  withCredentials: true,
});

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

axios2.interceptors.response.use(
  function (res) {
    return res;
  },
  async function (err) {
    const { config: originRequest } = err;

    if (err.status === 401) {
      const reIssueResponse = await axios2.post("/api/auth/reissue");

      if (reIssueResponse.status === 200) {
        const { accessToken } = reIssueResponse.data;
        localStorage.setItem("access_token", accessToken);
        axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originRequest);
      } else {
        window.location.replace("/sign-in");
      }
    }

    return Promise.reject(err);
  },
);
