import { axiosWithAuth } from "./axios";

export const authAPI = {
  logout() {
    return axiosWithAuth.post("/auth/logout");
  },
};
