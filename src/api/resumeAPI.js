import { axiosWithAuth } from "./axios";

export const resumeAPI = {
  getResume() {
    return axiosWithAuth.get("/resume");
  },
  postResume(data) {
    return axiosWithAuth.post("/resume", data);
  },
};
