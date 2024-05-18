import { axiosWithAuth } from "./axios";

export const resumeAPI = {
  postResume(data) {
    return axiosWithAuth.post("/resume", data);
  },
};
