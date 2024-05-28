import { axiosWithAuth } from "./axios";

export const userAPI = {
  getMyInfo() {
    return axiosWithAuth.get("/user/me");
  },
  putUser(data) {
    return axiosWithAuth.put("/user/me", data);
  },
  getUserInfoById(id) {
    return axiosWithAuth.get(`/user/${id}`);
  },
};
