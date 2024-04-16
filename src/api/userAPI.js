import { axiosWithAuth } from "./axios";

export const userAPI = {
  getMyInfo() {
    return axiosWithAuth.get("/user/me");
  },
  getUserInfoById(id) {
    return axiosWithAuth.get(`/user/${id}`);
  },
};
